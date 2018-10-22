import React from 'react'

const VideoDetail = ({video}) => {
    console.log(video)
    if(!video){
        return(
            <div>loading!!</div>
        )
    }
    return (
        <div className = 'video-detail col-md-8'>
            <div className = 'embed-responsive embed-responsive-16by9'>
                <iframe className='embeded-responsive-item' src= {'https://youtube.com/embed/'+ video.id.videoId }></iframe>
            </div>

            <div className = 'details'>
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
}

export default VideoDetail