import React from "react";
import Nav from "./Nav";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";
import { searchYouTube } from "../searchYouTube";
import { YOUTUBE_API_KEY } from "../../config/youtube";
import { fakeData } from "./__test__/fakeData"; 

class App extends React.Component {
  constructor(props) {
    super(props) 

    this.state = { 
      videos: fakeData, 
      playingVideo: fakeData[0],
      query: ""
    }

    this.handlePlayer = this.handlePlayer.bind(this); 
    this.handleInput = this.handleInput.bind(this); 
    this.handleSumbit = this.handleSumbit.bind(this); 
  }

  // componentDidMount() {
  //   let info = {
  //     query: 'hello',
  //     max: 5,
  //     key: YOUTUBE_API_KEY,
  //   }
   
  //   searchYouTube(info, (val) => this.setState({ videos: val, playingVideo: val[0] })); 
  // }

  handleInput(e) {
    this.setState({ query: e.target.value }); 
  }

  handleSumbit() {
    let info = {
      query: this.state.query,
      max: 5,
      key: YOUTUBE_API_KEY,
    }
   
    searchYouTube(info, (val) => this.setState({ videos: val, playingVideo: val[0] })); 
  }

  handlePlayer(video) {
    this.setState({ playingVideo: video }); 
  }

  render() {
    return (
      <div>
        <Nav onInputChange={this.handleInput} onQuerySumbit={this.handleSumbit} />
        <div className="parent">
          <VideoPlayer video={this.state.playingVideo} />
          <VideoList videos={this.state.videos} onVideoClick={this.handlePlayer} />
        </div>
      </div>
    ); 
  }
}

export default App;