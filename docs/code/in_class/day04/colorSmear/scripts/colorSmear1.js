// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 16-11: Simple color tracking

let video;

// A variable for the color we are searching for.
let trackColor = [0,0,0];
let points = [];

let threshold = 10;
let count = 0;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture
  (VIDEO);
  //video.size(width,height);
  // The above function actually makes a separate video
  // element on the page.  The line below hides it since we are
  // drawing the video to the canvas
  video.hide();

  // Start off tracking for red
  trackColor = [255, 0, 0];
}

function draw() {
    image(video,0,0);
    video.loadPixels();
  //loadPixels();
  

  // We are going to look at the video's pixels


  
  //   push();
  // translate(width, 0);
  // scale(-1, 1);

  // Before we begin searching, the "world record" for closest color is set to a high number that is easy for the first pixel to beat.

  // XY coordinate of closest color
  let avgX = 0;
  let avgY = 0;
  
  let count = 0;

  for (var y = 0; y < video.height; y+=16 ) {
    for (var x = 0; x < width; x+=16 ) {
      
      var loc = (x + y * video.width) * 4;
 
      var r1 = video.pixels[loc]; 
      var g1 = video.pixels[loc+1];
      var b1 = video.pixels[loc+2];

      var r2 = trackColor[0];
      var g2 = trackColor[1];
      var b2 = trackColor[2];

      // Using euclidean distance to compare colors
      var d = dist(r1, g1, b1, r2, g2, b2); // We are using the dist( ) function to compare the current color with the color we are tracking.

      // If current color is more similar to tracked color than
      // closest color, save current location and current difference
      if (d < threshold) {
        // let pixColor = trackColor;
        // noStroke();
        // ellipse(x, y, 1, 1);
        
        let thisFrame = frameCount;
          if(points.length < 3000 && (frameCount%3) == 1){
        let p = new Point(x,y,r2,g2,b2,thisFrame);
            points.push(p); 
          }
      }
    }
  }

  // We only consider the color found if its color distance is less than 10. 
  // This threshold of 10 is arbitrary and you can adjust this number depending on how accurate you require the tracking to be.
  
  // Draw the video
  //updatePixels();
  for (let i = 0; i < points.length; i++) {
  
    points[i].draw();
    
    
    points[i].update();
    }
//   if (count > 5) { 
//     avgX = avgX / count;
//     avgY = avgY / count;
//     // Draw a circle at the tracked pixel
//     fill(trackColor);
//     strokeWeight(4.0);
//     stroke(0);
//     ellipse(avgX, avgY, 16, 16);
//  }
  //pop();
  textSize(20);
  fill('white');
text('click a color to track', 10, 470);
}

class Point {
  
 constructor(_x,_y,_r,_g,_b,_thisFrame){
   this.x = _x;
   this.y =_y;
   this.r=_r;
   this.g=_g;
   this.b=_b;
   this.startFrame = _thisFrame;
   
 }
  
draw(){
  let age = frameCount - this.startFrame; 
  //fill(this.r, this.g, this.b, 255-(age/100*255));
  fill(255-this.r+(age/100*255), 255-this.g+(age/100*255), 255-this.b+(age/100*255));
  noStroke();
  ellipse(this.x,this.y,14,14);
}
  
update(){
 if((frameCount - this.startFrame) > 100) {
   let removedPoint = points.shift();
   
 }
  
  
  
}
  
  
  
}


function mousePressed() {
  // Save color where the mouse is clicked in trackColor variable
  trackColor = video.get(mouseX,mouseY);
  
  if(trackColor[0] > trackColor[1] && trackColor[0] > trackColor[2]){
   redThresh = true;
    greenThresh = false;
    blueThresh = false;
  }
  //console.log(trackColor);
}
