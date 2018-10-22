import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/seachbar'
import VideoList from './components/video-list'
import VideoDetail from './components/video-detail'

const API_KEY = 'AIzaSyCjwBUQrH9PRJwRpAf2KiUHpx5HV7l6jXg'

class App extends React.Component {

    constructor(props){
        super(props)

        this.state = { videos : [], selectedVideo : null }

        this.onSearch('shroud')
    }

    onSearch (input) {
        YTSearch ( {key: API_KEY, term : input }, (videos)=> {this.setState({ videos:videos, selectedVideo: videos[0] })}  )
    }

    render(){
        const videoSearch = _.debounce((input) => this.onSearch(input), 400)
        console.log(this.state)
        return(
            <div>
                <SearchBar onSearchInput ={videoSearch}/>
                <VideoDetail video= {this.state.selectedVideo} />
                <VideoList onVideoClick={ (selectedVideo) => this.setState({selectedVideo})} videos = {this.state.videos}/>
            </div>
        )
    }
    
}

ReactDOM.render(<App />, document.querySelector('.container'))