//Day01
let myCapture;

function setup() {
  //createCanvas(320, 240);
  let canvas = createCanvas(640, 480);
  canvas.parent("sketch");
  myCapture = createCapture(VIDEO);
  myCapture.hide();
  fill(0, 255, 0);
  noStroke();
}

function draw() {
  background(255);
  //fill(random(255),random(255),random(255));
  //load pixel data into myCapture object.
  myCapture.loadPixels();

  //const stepSize = round(constrain(mouseX / 8, 25, 32));
  const stepSizeX = 16;
  const stepSizeY =48;
  for (let y = 0; y < height; y += stepSizeY) {
    for (let x = 0; x < width; x += stepSizeX) {
      //fill(random(255),random(255),random(255));
      const i = y * width + x;
      const darknessR = (255 - myCapture.pixels[i * 4]) / 255;
      const radiusRX = stepSizeX * darknessR;
      const radiusRY = stepSizeY * darknessR;

      push();
      translate(width,0);
      scale(-1,1);
      
      //if(x==0 && y==0){
      //print(darkness);
      //}
      fill((darknessR*255),0,0);
      ellipse(x, y, radiusRX, radiusRY);
      pop();
    }
  }

}