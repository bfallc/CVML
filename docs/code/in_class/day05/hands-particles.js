let w = 1280;
let h = 720;
let particles = [];
let kinectron;

function setup() {
    createCanvas(w, h);
    background(0);
    kinectron = new Kinectron("10.75.29.87");
    kinectron.makeConnection();
    kinectron.startTrackedBodies(drawBody);
    console.log(kinectron);

    const NUM_PARTICLES = 50;

  for(let i = 0; i < NUM_PARTICLES; i++) {
    let p = new Particle();
    particles.push(p);
  }
}

function draw() {
}


function drawBody(body) {
    background(0);

if(body.bodyIndex == 1){
    let leftHand = createVector(body.joints[7].depthX*w, body.joints[7].depthY*h);
    let rightHand = createVector(body.joints[11].depthX*w, body.joints[11].depthY*h);
    //draw left hand
    fill(0, 255, 0);
    ellipse(leftHand.x, leftHand.y, 20, 20);
    //draw right hand
    fill(0, 0, 255);
    ellipse(rightHand.x, rightHand.y, 20, 20);
    //find middle
    let middlePos = p5.Vector.lerp(leftHand, rightHand, 0.5);
    forceScaler = -30;

    //console.log(middlePos);

    fill(255, 0, 0);
    //ellipse(middlePos.x, middlePos.y, 40);

    for(let i = 0; i < particles.length; i++) {
    
        let p = particles[i]
        let d = dist(middlePos.x, middlePos.y, p.pos.x, p.pos.y);
        let magnitude = forceScaler / (d+15);
        let forceDirection = p.pos.sub(middlePos);
        forceDirection.normalize();
        let newForce = forceDirection.mult(magnitude);
        p.force.add(newForce);
    
    p.update();
    p.draw();

    }
  }
}


class Particle {
  
    constructor() {
      this.pos = createVector(w/2, h/2);
      this.vel = createVector(random(-10, 10), random(-10, 10));
      this.accel = createVector(random(-0.1, 0.1), random(-0.1, 0.1));
      this.color = [random(255), 255, 255];
      this.radius = random(10, 40);
      this.force = createVector(0, 0);
      this.drag = 0.97;
    }
    
    update() {
      this.vel.add(this.force);
      this.vel.mult(this.drag);
      this.pos.add(this.vel);
    }
    
    draw() {
      ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
    }
  }
  