import React, { Component } from 'react';
import { MeteorCamera } from 'meteor/mdg:camera';
 
export default class Webcam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src:"import.png"
        }
    }
    
    handleClick() {
        
        var options = {
            width: 640,
            height: 640,
            quality: 100    
        };
        
        // Get the image from the camera, and pass it to the server-side Meteor method
        // for detecting faces
        MeteorCamera.getPicture(options,(error, img) => {
            Meteor.call('detectFaces', img, (error,markedUpImg) => {
                this.setState({src:markedUpImg});
            });
        });
        
    }
    
    render() {
        return (
            <div className="image-container" onClick={this.handleClick.bind(this)}>
                <img src={this.state.src} alt="image" />
            </div>
        );
  }
}
