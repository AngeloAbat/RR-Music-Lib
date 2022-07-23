import { useState } from "react";
import { Link } from 'react-router-dom'

export default function GalleryItem(props){
    let [view, setView] = useState(false)

    const simpleView = () => {
        return (
            <div style={simpleStyle}>
                <h3>{props.item.trackName}</h3>
                <h4>{props.item.collectionName}</h4>
            </div>
        )
    }

    const detailView = () => {
        return (
            <div style={detailStyle}>
                <img src={props.item.artworkUrl100} alt="album art" style={imageStyle}></img>
                <div style={infoStyle}>
                    <h2>{props.item.trackName}</h2>
                    <h3>
                        <Link to={`/artist/${props.item.artistId}`}>
                            {props.item.artistName}
                        </Link>
                    </h3>
                    <h3>
                        <Link to={`/album/${props.item.collectionId}`}>
                            {props.item.collectionName}
                        </Link>
                    </h3>
                    <h4>{props.item.primaryGenreName}</h4>
                    <h4>{props.item.releaseDate}</h4>
                </div>
            </div>
        )
    }

    const imageStyle = {
        'display' : 'inline-block',
        'position' : 'justify',
        'height': '100%',
        'align' : 'left'
    }
    const infoStyle = {
        'display' : 'inline-block',
        'position' : 'justify',
        'vertical-align' : 'top',
        'text-align' : 'right',
        'padding-left' : '30px'
    }

    const simpleStyle = {
        'width' : '25v',
        'height' : '20vh',
        'border' : '1px solid black',
        'margin' : '2px'
    }

    const detailStyle = {
        'width' : '80vw',
        'height' : '20vh',
        'border' : '1px solid black',
        'margin' : '2px',
        'backgroundRepeat' : 'no-repeat',
        'backgroundSize' : 'cover',
        'color' : 'black',
    }

    return (
        <div onClick={() => setView(!view)} style={{'display': 'inline-block'}}>
            {view ? detailView() : simpleView()}
        </div>
    )
}