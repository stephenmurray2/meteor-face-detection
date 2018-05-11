import { Meteor } from 'meteor/meteor';
const cv = require('opencv4nodejs');

Meteor.methods({

  'detectFaces'(base64String) {
    
    // Load the classifier
    const classifier = new cv.CascadeClassifier(cv.HAAR_FRONTALFACE_ALT2);
    
    // Convert the base64 URI into an OpenCV mat object
    const base64data =base64String.replace('data:image/jpeg;base64','').replace('data:image/png;base64','');//Strip image type prefix
    const buffer = Buffer.from(base64data,'base64');
    const inputImg = cv.imdecode(buffer); 
    
    // Detect faces in the image
    const result = classifier.detectMultiScale(inputImg.bgrToGray());
    
    // Mark up the image, where the faces are
    result.objects.forEach((faceRect, i) => {  
      const rect = cv.drawDetection(
        inputImg,
        faceRect,
        { color: new cv.Vec(255, 147, 155) }
      );
    });
    
    // Convert the marked-up image to an encoded 64-URI
    const outBase64 =  cv.imencode('.jpg', inputImg).toString('base64');
    const outURI = 'data:image/jpeg;base64,'+outBase64;
    return outURI;
  },

});