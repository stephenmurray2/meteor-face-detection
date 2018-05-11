# Meteor Face Detection Application

A Meteor application that detects faces in images taken from a webcam. This makes use of the [opencv4nodejs](https://github.com/justadudewhohacks/opencv4nodejs) module (a set of Node.js bindings for [OpenCV](https://github.com/opencv/opencv)).

## Instructions

Clone the repo

```bash
$ npm install
$ cd meteor-face-detection
```

Install the dependencies

```bash
$ meteor npm install
```

Install the [mdg:camera](https://github.com/meteor/mobile-packages/tree/master/packages/mdg:camera) package

```bash
$ meteor add mdg:camera
```

Start the server

```bash
$ meteor
```

Navigate to the app at `http://localhost:3000`, and you're ready to start detecting faces!

## Issues

This works for Chrome, but not for Firefox... I haven't tested for any other browsers.



