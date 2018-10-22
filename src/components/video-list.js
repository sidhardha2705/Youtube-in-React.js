import React from 'react'
import VideoListItem from './video-list-item';

const VideoList = (props) => {

    const VideoMapper = 
        props.videos.map( video => {return(<VideoListItem onVideoClick={props.onVideoClick} key={video.etag} video={video}/>)})
    

    return(
        <ul className = 'col-md-4 list-group'>
            {VideoMapper}
        </ul>
    )
}

export default VideoList