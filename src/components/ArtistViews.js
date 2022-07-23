import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom'

function ArtistView(){
    const navigate = useNavigate()
    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])

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
            setArtistData(resData.results)
        }
        fetchData()
    }, [id])

    const albums = artistData.filter(entry => entry.collectionType == 'Album')

    const renderAlbums = albums.map((album, i) => {
        return (
            <div key={i}>
                <Link to={`/album/${album.collectionId}`}>
                    <p>{album.collectionName}</p>
                </Link>
            </div>
        )
    })

    return(
        <div>
            {artistData.length > 0 ? <h2>{artistData}</h2> : <h2>Loading...</h2>}
            {navButtons()}
            {renderAlbums}
        </div>
    )
}

export default ArtistView