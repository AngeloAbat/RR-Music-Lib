import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"; 

function SongView(){
    const navigate = useNavigate()
    const{id} = useParams()
    const [songData, setSongData] = useState([])

    const navButtons = () => {
        return (
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
                <button onClcik={() => navigate('/')}>Home</button>
            </div>
        )
    }

    useEffect(() => {
        const API_URL=`http://localhost:4000/song/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setSongData(resData.results)
        }
        fetchData()
    }, [id])

    const songs = songData.filter(entry => entry.wrapperType == 'track')

    const renderDetails = songs.map((song, i) => {
        return(
            <div>
                <h1>{song.trackName}</h1>
                <img src={song.artworkUrl100} alt="album art"></img>
                <Link to={`/artist/${song.collectionId}`}>
                    <h2>{song.artistName}</h2>
                </Link>

                <Link to={`/album/${song.collectionId}`}>
                    <h3>{song.collectionName}</h3>
                </Link>

                <p>{song.releaseDate}</p>
            </div>
        )
    })

    return(
        <div>
            {navButtons()}
            {renderDetails}
        </div>
    )
}

export default SongView