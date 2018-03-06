import React from 'react';
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types';

class ResponsivePlayer extends ReactPlayer {
  constructor(props) {
    super(props);
    this.state = { url: props.url, start_time: props.start_time, end_time: props.end_time, name: props.name};
  }

  ref = player => {
    this.player = player
  }

  onProgress = state => {
    if (state.playedSeconds >= this.state.end_time) {
      var internalPlayer = this.player.player.player.player;
      internalPlayer.pauseVideo();
      internalPlayer.seekTo(this.props.start_time)
      this.setState({url:this.props.url});
      }
  }

  render() {
    return (
      <div className='player-wrapper'>
        <ReactPlayer
          ref={this.ref}
          className='react-player'
          playing={this.state.playing}
          url={this.state.url}
          onProgress={this.onProgress}
          width='100%'
          height='100%'
        />
      <div className="overlay">
      <div className="text">{this.state.name}</div>
      </div>
      </div>
    )
  }
};

ResponsivePlayer.propTypes = {
  end_time: PropTypes.number
};

export default ResponsivePlayer;