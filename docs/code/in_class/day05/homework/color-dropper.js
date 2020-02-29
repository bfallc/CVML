let w= 960;
let h = 600;
//-------------------KINECT STUFF------------
let kinectron;

let handRightX;
let handRightY;
let elbowRightX;
let elbowRightY;
let shoulderRightX;
let shoulderRightY;
let shoulderLeftX;
let shoulderLeftY;
let handLeftX;
let handLeftY;
let elbowLeftX;
let elbowLeftY;

let hRX;
let hRY; 
let eRX;
let eRY;
let sRX;
let sRY; 
let sLX; 
let sLY; 
let hLX;
let hLY;
let eLX;
let eLY;

//-------------------SHAPE STUFF-------------
let shaped = false;
let i = 0;
let positions = [];
let kill = false;
let timer;


function setup(){
    createCanvas(w, h);
    background(255);
    colorMode(HSB, 255);
    //noStroke();

    //-------------------KINECT SETUP-------------
    kinectron = new Kinectron("10.75.29.87");
    kinectron.makeConnection();
    kinectron.startTrackedBodies(drawBody);
}

function draw(){
}

function drawBody(body){
    background(255);

    //--------DECLARE BODY VARIABLES FROM BODY ARRAY------------
    handRightX = body.joints[kinectron.HANDRIGHT].depthX*w;
    handRightY = body.joints[kinectron.HANDRIGHT].depthY*h;
    elbowRightX = body.joints[kinectron.ELBOWRIGHT].depthX*w;
    elbowRightY = body.joints[kinectron.ELBOWRIGHT].depthY*h;
    shoulderRightX = body.joints[kinectron.SHOULDERRIGHT].depthX*w;
    shoulderRightY = body.joints[kinectron.SHOULDERRIGHT].depthY*h;
    shoulderLeftX = body.joints[kinectron.SHOULDERLEFT].depthX*w;
    shoulderLeftY = body.joints[kinectron.SHOULDERLEFT].depthY*h;
    handLeftX = body.joints[kinectron.HANDLEFT].depthX*w;
    handLeftY = body.joints[kinectron.HANDLEFT].depthY*h;
    elbowLeftX = body.joints[kinectron.ELBOWLEFT].depthX*w;
    elbowLeftY = body.joints[kinectron.ELBOWLEFT].depthY*h;
    
     //--------DRAW THE BODY!!-----------------------  
    fill(255, 0, 0);
    ellipse(handRightX, handRightY, 10, 10);
    ellipse(elbowRightX, elbowRightY, 10, 10);
    line(handRightX, handRightY, elbowRightX, elbowRightY);
    
    ellipse(shoulderRightX, shoulderRightY, 10, 10);
    line(elbowRightX, elbowRightY, shoulderRightX, shoulderRightY);

    ellipse(shoulderLeftX, shoulderLeftY, 10, 10);
    line(shoulderRightX, shoulderRightY, shoulderLeftX, shoulderLeftY);

    ellipse(elbowLeftX, elbowLeftY, 10, 10);
    line(shoulderLeftX, shoulderLeftY, elbowLeftX, elbowLeftY);

    ellipse(handLeftX, handLeftY, 10, 10);
    line(elbowLeftX, elbowLeftY, handLeftX, handLeftY);

    //------EVAL DISTANCE BETWEEN HANDS!!-----------------------
    let d = int(dist(handRightX, handRightY, handLeftX, handLeftY));
    text("hand distance:", 20, 20)
    text(nfc(d, 0), 105, 20);
    text("array qty: ", 20, 50)
    text(positions.length, 75, 50);

    //-----------CLOSE SHAPE AND DROP!!------------------------------------

    if (d < 50 && shaped == false) {
        //if (d < 50) {
        // let shape = new Shape();
        timer = frameCount;
        // 

        positions.push({
            hRX: body.joints[kinectron.HANDRIGHT].depthX*w,
            hRY: body.joints[kinectron.HANDRIGHT].depthY*h,
            eRX: body.joints[kinectron.ELBOWRIGHT].depthX*w,
            eRY: body.joints[kinectron.ELBOWRIGHT].depthY*h,
            sRX: body.joints[kinectron.SHOULDERRIGHT].depthX*w,
            sRY: body.joints[kinectron.SHOULDERRIGHT].depthY*h,
            sLX: body.joints[kinectron.SHOULDERLEFT].depthX*w,
            sLY: body.joints[kinectron.SHOULDERLEFT].depthY*h,
            hLX: body.joints[kinectron.HANDLEFT].depthX*w,
            hLY: body.joints[kinectron.HANDLEFT].depthY*h,
            eLX: body.joints[kinectron.ELBOWLEFT].depthX*w,
            eLY: body.joints[kinectron.ELBOWLEFT].depthY*h,
            birth: frameCount
        });
        shaped = true;
    }

    //if (shaped == true) {

        for (let a=0; a < positions.length; a++){
            push();
            fill(random(255),255,255, 255-(frameCount - positions[a].birth));
            noStroke();
            beginShape();
            vertex(positions[a].hRX, positions[a].hRY+(frameCount-positions[a].birth)*2);
            vertex(positions[a].eRX, positions[a].eRY+(frameCount-positions[a].birth)*2);
            vertex(positions[a].sRX, positions[a].sRY+(frameCount-positions[a].birth)*2);
            vertex(positions[a].sLX, positions[a].sLY+(frameCount-positions[a].birth)*2);
            vertex(positions[a].eLX, positions[a].eLY+(frameCount-positions[a].birth)*2);
            vertex(positions[a].hLX, positions[a].hLY+(frameCount-positions[a].birth)*2);
            endShape(CLOSE);
            //--INCREMENT DOWN!---
            // if((frameCount - positions[a].birth) > 100){
            //     shaped = false;
            // }
            // if((frameCount - positions[a].birth) > 255){
            //     kill = true;
            // }
            pop();
        }
    //}

    if((frameCount - timer) > 20){
        shaped = false;
    }
    
   for(let a=0; a< positions.length; a++){
        if((frameCount - positions[a].birth) > 255){
            positions.shift();
        }

   }
}

function keyPressed(){
    if(key == 'f'){
    let fs = fullscreen();
    fullscreen(!fs);
    }
  }
  

/*

for(let i = 0; i < shapes.length; i++) {

    // draw the shape
    // update the shape (as in, age it and move it down screen);
}


for(let i = 0; i < shapes.length; i++) {

    // check 
}












*/