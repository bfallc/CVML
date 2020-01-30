//Day01, #6
let myCapture;

function setup() {
  createCanvas(640, 480);
  //background(50);
  //let canvas=createCanvas(640, 480);
  //canvas.parent("sketch");
  myCapture = createCapture(VIDEO);
  myCapture.hide();
  //fill(0, 255, 0);
  rectMode(CENTER);
  //noStroke();
}

function draw() {
  background(50);
  //fill(random(255),random(255),random(255));
  //load pixel data into myCapture object.
  myCapture.loadPixels();

  //const stepSize = round(constrain(mouseX / 8, 25, 32));
  const stepSizeX = 16;
  const stepSizeY = 16;
  for (let y = 0; y < height; y += stepSizeY) {
    for (let x = 0; x < width; x += stepSizeX) {
      //fill(random(255),random(255),random(255));
      const i = y * width + x;
      const darknessR = (255 - myCapture.pixels[i * 4]) / 255;
      let radiusRX = stepSizeX * darknessR;
      radiusRX = constrain(radiusRX, 8, 16);
      let radiusRY = stepSizeY * darknessR;
      radiusRY = constrain(radiusRY, 8, 16);

      push();
      translate(width-8, 8);
      scale(-1, 1);

      //if(x==0 && y==0){
      //print(darkness);
      //}
      push();
      translate(x, y);
      //rotate((darknessR));
      //fill(255-(darknessR*255)/20);
      let grey = 255-(darknessR * 255);
      fill(grey);
      //fill(255);  
      //rect(0, 0, radiusRX+8, radiusRX+8);


      rect(0, 0, 16, 16);
      //translate(width - 10, 10);
      // scale(-1, 1);
      // fill(grey);
      // textSize(10);
      // textStyle(BOLD);
      // text(grey, -2, 2);
      pop();

      pop();
    }
  }

}
