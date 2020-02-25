let w= 1280;
let h = 720;
let particles = [];

let kinectron;

function setup(){
createCanvas(w, h);
background(0);

kinectron = new Kinectron("10.75.29.87");

kinectron.makeConnection();
kinectron.startTrackedBodies(drawBody);

console.log(kinectron);

const NUM_PARTICLES = 1000;
  
for(let i = 0; i < NUM_PARTICLES; i++) {
  let p = new Particle();
  particles.push(p);
}

}

function draw(){



}

function drawBody(body){
    background(0);

    // for(let i=0; i<body.joints.length; i++){
    //     fill(255, 0, 0);
    //     ellipse(body.joints[i].depthX*w, body.joints[i].depthY*h, 20, 20);

    // }
    let leftHand = createVector(body.joints[7].depthX*w,body.joints[7].depthY*h);
    let rightHand = createVector(body.joints[11].depthX*w,body.joints[11].depthY*h);
    fill(0, 255, 0);
    ellipse(leftHand.x, leftHand.y, 20, 20);
    fill(0, 0, 255);
    ellipse(rightHand.x, rightHand.y, 20, 20);

    let middlePosition = p5.Vector.lerp(leftHand, rightHand, 0.5);
    fill(255,255,0);
    ellipse(middlePosition.x, middlePosition.y, 40, 40);

}

class Particle {

    constructor() {
      this.pos = createVector(w/2, h/2);
      this.vel = createVector(random(-10, 10), random(-10, 10));
      this.accel = createVector(random(-0.1, 0.1), random(-0.1, 0.1));
      this.color = [random(255), 255, 255];
      this.radius = random(4, 16);
      this.force = createVector(0, 0);
      this.drag = 0.97;
    }
    
    update() {
      this.vel.add(this.force);
      this.vel.mult(this.drag);
      this.pos.add(this.vel);
    }
    
    draw() {
          
      // Note: you can use tint() to color images, however, it will slow your program
      // down SIGNIFICANTLY. Only use tint() if you're working with a couple particles
      // For better performance, create separate image files with the various colors you
      // want, then load those into your sketch. Ask me about that if you're curious!
      // tint(this.color);
      
      // draw the particle using the image we loaded above
      image(img, this.pos.x, this.pos.y, this.radius, this.radius);
      
      
      // Uncomment below to draw with Ellipses instead of images
      // (don't forget to comment out the image() function above!
      
      // fill(this.color[0], this.color[1], this.color[2], 0.2);
      // fill(255, 0.2);
      // ellipse(this.pos.x, this.pos.y, 2);
    }
  }