
//how to draw the video in the frame
//image(capture, 0, 0, w, h);

//-------------_IMAGE-------------
let capture;
// set the only working capture resolution for whatever reason
let w = 640;
let h = 480;
// set two starting threshold values
let threshold01 = 100;

//--------------RAIN---------------
let textString = "0123456789abcdefghijklmnopqrstuvwxyzABCDEHGHIJKLMNOPQRSTUVWXYZ";
let characters = [];
let dir;
let p;
let cycle = 0;
let x = 0;

function setup() {
  createCanvas(w, h);
  
  //--------------IMAGE-----------------
  capture = createCapture(VIDEO);
  // since we're drawing pixel information directly to the canvas,
  // we need to set our screen's pixel density to 1 (if you're working
  // on a retina display, which you probably are!)
  pixelDensity(1);
  capture.hide();
  
  let xSpacing = 20;
  
  //--------------RAIN------------------
    //for(c of textString){
   for (let i = 0; i < round(random(10, textString.length)); i++) {
     c = textString[i];
    let newC = new CharObj(c, x, round(random(w)), 1);
    characters.push(newC);
    //print(characters[3]);
     x+=xSpacing;
  }
  
}

function draw() {
  background(220);
  // load pixel data to the canvas
  loadPixels();
  // load pixel data to the video capture object
  capture.loadPixels();
  // threshold01 determines the cutoff for filling in pixels
  // with black. It's mapped to the mouseX position
  //threshold01 = map(mouseX, 0, width, 0, 255);
  
  // go through every single pixel in our video capture
  // as well as our canvas.
  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      // calculate the location of each individual color channel
      let index = (x + y*w)*4;
      // capture the RGB values of each pixel from the video
      let r = capture.pixels[index];
      let g = capture.pixels[index+1];
      let b = capture.pixels[index+2];
      // add together the brightness values so we can average them
      let totalBrightness = r + g + b;
      //calculate the current pixel's brightness by averaging
      // the value from each of their color channels.
      let brightness = totalBrightness/3.0;

      // if a pixel's brightness is below threshold01...
      if(brightness < threshold01){
          // set pixels to black
          pixels[index] = 0;
          pixels[index+1] = 0;
          pixels[index+2] = 0;    
        // if a pixel's brightness is between threshold01 and threshold02...
      } else {
     // set pixels to white 
        pixels[index] = 255;
        pixels[index+1] = 255;
        pixels[index+2] = 255;  
      }
    }
  }
  // update the canvas pixels to show the new pixel colors
  updatePixels();

//-----------RAIN------------------
for(let c of characters){
  // for (let i = 0; i < characters.length; i++) {
  //   let c = characters[i];
    
    
  //index = round((c.x + c.y*w)*4);
  index = (c.x + c.y*w)*4;
    //print(index);
    // let indexLow = round((c.x + (c.y+1)*w)*4);
    // let indexLower = round((c.x + (c.y+2)*w)*4);  
    // let avgIndex = (pixels[index] + pixels[indexLow] + pixels[indexLower])/3;

//     print("--------");
//     print(pixels[index]);
//     print(pixels[index+4]);
//     print(pixels[index+8]);

  
      
  //if(avgIndex >= 100 || avgIndex === undefined){  
  if (pixels[index] == 255 || pixels[index] === undefined) {
      c.y = c.y + 2;
    //} else if (pixels[index] == 0){
    } else{
      c.y = c.y - 3;
      if(pixels[index+16] == 255){
      c.x= c.x + int(random(0,5));
      } else {
      c.x = c.x + int(random(-5,0));
      }
      //print(c.x);
    }
    if (c.y >= height) {
      c.y = 0;
      c.x = round(random(400));
    }
  textSize(28);
  text(c.c, c.x, c.y);
  }
  
  
  

if((cycle % 150) == 0){
     for (let i = 0; i < random(10, textString.length); i++) {
     c = textString[i];
       if(characters.length < 80){
    let newC = new CharObj(c, round(random(w)), 20, 1);
    characters.push(newC);
       }
     }
}

  
  
cycle++;  
} //end main loop


//--------------RAIN---------------
class CharObj {
  constructor(_c, _x, _y, _dir) {
    this.c = _c;
    this.x = _x;
    this.y = _y;
    this.dir = _dir;
  }
}

function keyPressed(){
  if(key == 's'){
   save('textRain-2020-02-07.png'); 
  }
  
}