let capture;
let classifier;
//this teachable machine model counts 0, 1, 2, 3 fingers
let imageModelURL = "https://teachablemachine.withgoogle.com/models/q79AC1BK/model.json";
let label;
let size;

let b1;
let b2;
let b3;
let yesDraw = 1;

var x, y;
var t = 0;
var T = 1000;
let filler = 255;

let w = 640;
let h = 480;

function preload() {
  classifier = ml5.imageClassifier(imageModelURL);
}

function setup() {
  createCanvas(w, h);

  // // the long version:
  // let constraints = {
  //   audio: false, // set this to true if you want to use the microphone
  //   video: {
  //     width: {
  //       min: 320,
  //       ideal: w,
  //       max: 1920
  //     },
  //     height: {
  //       min: 240,
  //       ideal: h,
  //       max: 1080
  //     },
  //     frameRate: {min: 1.0, max: 60.0} // most cams are 30fps, some are 60.
  //   }
  // }

  // The one-line, no-spaces equivalent version of the constraints
  // initialization above. This is quicker to copy and paste into your
  // sketches and takes up less space.
  let constraints = {
    audio: false,
    video: {
      width: {
        min: 320,
        ideal: w,
        max: 1920
      },
      height: {
        min: 240,
        ideal: h,
        max: 1080
      },
      frameRate: {
        min: 1.0,
        max: 60.0
      }
    }
  };

  //used to prevent flickering of data
  frameRate(30);

  capture = createCapture(constraints); ///get video
  capture.hide(); //hide video

  classifyVideo();

  b1 = new Ball(20, 20, 0);
  b2 = new Ball(80, 80, 255);
  b3 = new Ball(20, 200, 120);

}

function draw() {
  background(150, 200, 250);

  //image(capture, 0, 0);
  fill(0, 0, 0);
  textSize(20);
  text("How many fingers are you holding up?", 10, 25);
  fill(255,0, 0);
  text(label, 360, 25);


  // fill(200, 200, 0);
  // rect(0, height/2, size, 50);

  if (label == "Zero") {
    b1.draw(0);
    b2.draw(0);
    b3.draw(0);
  } else if (label == "One") {
    b1.draw(1);
    b2.draw(0);
    b3.draw(0);
  } else if (label == "Two") {
    b1.draw(1);
    b2.draw(1);
    b3.draw(0);
  } else if (label == "Three") {
    b1.draw(1);
    b2.draw(1);
    b3.draw(1);

  }


}

function classifyVideo() {
  classifier.classify(capture, gotResults); //classify is built-in ml5 function  
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }

  //classifier stores data labels in order of confidence
  //first label result is most confident data point
  label = results[0].label;

  //size = map(results[0].confidence, 0, 1, 0, 480);

  classifyVideo();



}

class Ball {

  constructor(_x, _y, _seed) {
    this.x = _x;
    this.y = _y;
    this.seed = _seed;
  }

  draw(yesDraw) {
    fill(255, 0, this.seed);
    noStroke(30);
    if (yesDraw == 1) {
      ellipse(this.x, this.y, 40, 40);
    }
    noiseSeed(this.seed);
    this.x = noise(t);
    this.x = map(this.x, 0, 1, 0, width);
    this.y = noise(T);
    this.y = map(this.y, 0, 1, 0, height);
    t = t + 0.01;
    T = T + 0.01;


  }



}