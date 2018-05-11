import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Webcam from './Webcam.js';

export default class App extends Component {

  render() {
    
    return (
      <div>
      <div className="nav">
        <a href="#home">Meteor Face Detection Application</a>
      </div>
      <div className="content">
          <Webcam />
      </div>
      </div>
    );
  }
}


