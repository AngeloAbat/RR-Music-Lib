import { useState } from 'react'

function GalleryItem(props){
    let [view, setView] = useState(false)

    const detailView = () => {
        return(
            <div>
                <h2>{props.item.trackName}</h2>
                <h3>
                    <a href={`/artist/${props.item.artistI}`}>
                        {props.item.artistName}
                    </a>
                </h3>
                <h3>
                    <a href={`/album/${props.item.collectionId}`}>
                        {props.item.collectionName}
                    </a>
                </h3>
                <h4>{props.item.primaryGenreName}</h4>
                <h4>{props.item.releaseDate}</h4>
            </div>
        )
    }

    return (
        <div onClick={() => setView(!view)} style={{'display': 'inline-block'}}>
            <p>One Gallery Item</p>
        </div>
    )
}

export default GalleryItem
