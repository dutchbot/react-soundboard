import React, { Component } from 'react';
import ResponsivePlayer from './ResponsivePlayer';
import BoardOptions from './data/board.json'
import YoutubeUrls from './data/youtube-urls.json'
import './App.css';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  render() {
    let boardTitle = BoardOptions.name;
    let players = [];

    YoutubeUrls.youtube_fragments.forEach(element => {
      players.push(<div className="col-4 col-sm-3">
      <ResponsivePlayer key={element.key} start_time={element.start_time} name={element.name} url={element.url} end_time={element.end_time}/>
      </div>);
    });

    return <div className="container">
    <div className="row"><p className="boardTitle">{boardTitle}</p></div>
    <div className="row">
    {players}
    </div>
    </div>
  }
};

export default App;