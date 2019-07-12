import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import Sound from 'react-sound';
// import { thisExpression } from '@babel/types';



 export default class App extends Component {
  constructor() {
    super();
    this.state = { 
      bell: {
        playStatus: Sound.status.STOPPED,
      }      ,   
      snare: {
        playStatus: Sound.status.STOPPED,
      },
      kick: {
        playStatus: Sound.status.STOPPED,
      }
    }
  }

  onPlaying = (e) =>{
    let placeholder;
    e.duration !== 240 ? e.duration = 240 : placeholder=1;       
      e.position !== 0 ? e.position = 0 : placeholder = 1;
  }

  //begins and ends with true and false whenever sound starts and ends
  handleBufferChange = (e)=>{
    console.log(e);
    
    this.setState({
      currentlyPlaying: e
    })
    
    
  }
    render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code> and save to reload.
        </p>
        <Sound
          url="bell.mp3"
          loop={true}
          position={0}
          playStatus={this.state.bell.playStatus}
          playbackRate={this.state.bell.speed}
          // onLoading={this.handleSongLoading}
          onPlaying={this.onPlaying}
          onBufferChange={this.handleBufferChange}
        />
        <Sound
          url="kick.mp3"
          loop={true}
          // position={this.state.position}
          playStatus={this.state.kick.playStatus}
          onPlaying={this.onPlaying}
          playbackRate={this.state.kick.speed}
          onBufferChange={this.handleBufferChange}
          // onLoading={this.handleSongLoading}

        />
        <Sound
          url="snare.mp3"
          loop={true}
          // position={this.state.position}
          playStatus={this.state.snare.playStatus}
          onPlaying={this.onPlaying}
          playbackRate={this.state.snare.speed}
          // onLoading={this.handleSongLoading}
          onBufferChange = {this.handleBufferChange}
        />
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button
              onClick={() => {
                // if (this.state.currentlyPlaying !== true){
                this.setState({
                  bell: {
                    playStatus: Sound.status.PLAYING,
                    speed: 0.5
                  }
                });
                // }
              }}
            >
              Click Bell
            </button>
            <button
              onClick={() => {
                this.setState({
                  bell: {
                    playStatus: Sound.status.STOPPED,
                    speed: 0.5
                  }
                });
              }}
            >
              stop bell
            </button>
            <button
              onClick={() => {
                if (this.state.bell.speed <= 3)
                  this.setState({
                    bell: {
                      speed: this.state.bell.speed + 0.5,
                      playStatus: this.state.bell.playStatus
                    }
                  });
              }}
            >
              speed up bell
            </button>
          </div>

          {/* KICK */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button
              onClick={() => {
                console.log(this.state, 'her e state')
                if (this.state.currentlyPlaying === true) {
                this.setState({
                  kick: {
                    playStatus: Sound.status.PLAYING,
                    speed: 0.5
                  }
                });
              }}}
            >
              Click Kick
            </button>
            <button
              onClick={() => {
                this.setState({
                  kick: {
                    playStatus: Sound.status.STOPPED,
                    speed: 0.5
                  }
                });
              }}
            >
              stop Kick
            </button>
            <button
              onClick={() => {
                if (this.state.kick.speed <= 3)
                  this.setState({
                    kick: {
                      playStatus: this.state.kick.playStatus,
                      speed: this.state.kick.speed + 0.5
                    }
                  });
              }}
            >
              speed up kick
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button
              onClick={() => {
                this.setState({
                  snare: {
                    playStatus: Sound.status.PLAYING,
                    speed: 0.5
                  }
                });
              }}
            >
              Click Snare
            </button>
            <button
              onClick={() => {
                this.setState({
                  snare: {
                    playStatus: Sound.status.STOPPED,
                    speed: 0.5
                  }
                });
              }}
            >
              stop Snare
            </button>
            <button
              onClick={() => {
                if (this.state.snare.speed <= 3)
                  this.setState({
                    snare: {
                      speed: this.state.snare.speed + 0.5,
                      playStatus: this.state.snare.playStatus
                    }
                  });
              }}
            >
              speed up snare
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
}



