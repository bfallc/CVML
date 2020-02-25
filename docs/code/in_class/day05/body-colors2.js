// var kinectron = null;
// let numOfBodies=1;
// let bodLimit = 2;


// function setup() {
// 	createCanvas(640, 480);

// 	kinectron = new Kinectron("10.75.29.87");
// 	kinectron.makeConnection();
//   kinectron.startTrackedBodies(trackBody);
//   // console.log(kinectron);
//   //set the callback function name to be called when stuff comes from kinect
// }

// function draw() {

//     if(frameCount % 900 == 0) {
//         console.log(kinectron);
//     }
    
// }

// function trackBody(body) {

  

//   if (body.bodyIndex == 0){
//     fill(255,0,0);

//   }else if (body.bodyIndex == 1){
//     fill(255,0,255);

//   }else if (body.bodyIndex == 2){
//     fill(255,255,0);

//   }else if (body.bodyIndex == 3){
//     fill(0,255,0);

//   }else if (body.bodyIndex == 4){
//     fill(0,255,255);

//   }else if (body.bodyIndex == 5){
//       fill(0,0,255);

//   }



  
//   var val;
//   val = body.joints[kinectron.HANDRIGHT].depthX;
//   var rightHandX =  map(val,0,1,0,width);
//   val = body.joints[kinectron.HANDRIGHT].depthY;
//   var rightHandY = map(val,0,1,0,height); //height numbers bigger at the bottom

//    ellipse(rightHandX, rightHandY, 20,20);
//   textSize(32);
//   fill(255, 0, 0);
//   text(body.trackingId, 50, 50);

// }










// //--------------------------------------------
// Create P5 Canvas
let w= 1280;
let h = 720;
let tracking = false;// create a variable to hold ID of current player
let playerID = null;

let kinectron;

function setup(){
createCanvas(w, h);
background(0);

kinectron = new Kinectron("10.75.29.87");
kinectron.makeConnection();
kinectron.startTrackedBodies(drawBody);

}

function draw(){
}

function drawBody(body){
    background(0);

    for (let i = 0; i < bodies.length; i++) {
    
      // if we are not yet tracking a player/body 
      // and we find a tracked body
      // set tracking boolean to true
      // and set the playerID to the trackingId of the current body
      if (tracking == false && bodies[i].tracked == true) {
        tracking = true;
        playerID = bodies[i].trackingId;
      }    // if we are tracking and the current tracked body 
      // is the same as the player ID
      // then draw the joints of the body  
      if (tracking == true && bodies[i].trackingId == playerID) {      // iterate through all of the joints and draw them to canvas
          
          for(let i=0; i<body.joints.length; i++){
            fill(255, 0, 0);
            ellipse(body.joints[i].depthX*w, body.joints[i].depthY*h, 20, 20);
            textSize(32);
            fill(255, 0, 0);
            text(body.trackingId, 50, 50);
        
        }
      }
    }






}



// // create a boolean to indicate if we're tracking a player
// let tracking = false;// create a variable to hold ID of current player
// let playerID = null;function keyPressed() {  // press enter to reset tracking to false 
//   // this will allow you to look for a new player
//   if (keyCode == ENTER) tracking = false;
// }// this function runs each time body data is received
// function trackBody(allbodies) {  // get all bodies
//   let bodies = allbodies.bodies;  // kinect tracks up to six bodies
//   // let's loop through each of the six bodies
//   for (let i = 0; i < bodies.length; i++) {
    
//     // if we are not yet tracking a player/body 
//     // and we find a tracked body
//     // set tracking boolean to true
//     // and set the playerID to the trackingId of the current body
//     if (tracking == false && bodies[i].tracked == true) {
//       tracking = true;
//       playerID = bodies[i].trackingId;
//     }    // if we are tracking and the current tracked body 
//     // is the same as the player ID
//     // then draw the joints of the body  
//     if (tracking == true && bodies[i].trackingId == playerID) {      // iterate through all of the joints and draw them to canvas
//       for(let j = 0; j < body.joints.length; j++) {   
//           joint = body.joints[j];
//           drawJoint(joint);
//       }
//     }
//   }
// }