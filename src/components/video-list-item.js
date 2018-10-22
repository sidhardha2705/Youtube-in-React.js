import React from 'react'

const VideoListItem = (props) => {
    return(
        <li onClick={()=> props.onVideoClick(props.video)} className = 'list-group-item'>
            <div className= 'video-list-media'>
                <div className = 'media-left'>
                    <img className = 'media-object' src={props.video.snippet.thumbnails.default.url}/>
                </div>
                
            </div>

            <div className= 'media-body'>
                <div className = 'media-heading'>{props.video.snippet.title}</div>
            </div>
        </li>
    )
}

export default VideoListItem