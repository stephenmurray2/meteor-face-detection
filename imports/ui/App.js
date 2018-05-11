import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

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

/*
export default withTracker(() => {
  return {
    tasks: Tasks.find({}).fetch(),
  };
})(App);
*/


