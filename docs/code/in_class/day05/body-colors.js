var kinectron = null;
let numOfBodies=1;
let bodLimit = 2;

function preload(){

}


function setup() {
	createCanvas(640, 480);

	kinectron = new Kinectron("10.75.29.87");
	kinectron.makeConnection();
  kinectron.startTrackedBodies(trackBody);
  // console.log(kinectron);
  //set the callback function name to be called when stuff comes from kinect
}

function draw() {

    if(frameCount % 900 == 0) {
        console.log(kinectron);
    }
    
}

function trackBody(body) {

    // console.log("bodyIndex: " + body.bodyIndex);
    // console.log("bodyIndex: " + body.bodyIndex);
  
  //give every "body" a different color
  
  


  if (body.bodyIndex == 0 && numOfBodies<bodLimit){
    fill(255,0,0);
    var val;
    val = body.joints[kinectron.HANDRIGHT].depthX;
    var rightHandX =  map(val,0,1,0,width);
    val = body.joints[kinectron.HANDRIGHT].depthY;
    var rightHandY = map(val,0,1,0,height); //height numbers bigger at the bottom
    ellipse(rightHandX, rightHandY, 20,20);
    numOfBodies++;

  }else if (body.bodyIndex == 1 && numOfBodies<bodLimit){
    fill(255,0,255);
    var val;
    val = body.joints[kinectron.HANDRIGHT].depthX;
    var rightHandX =  map(val,0,1,0,width);
    val = body.joints[kinectron.HANDRIGHT].depthY;
    var rightHandY = map(val,0,1,0,height); //height numbers bigger at the bottom
    ellipse(rightHandX, rightHandY, 20,20);
    numOfBodies++;

  }else if (body.bodyIndex == 2 && numOfBodies<bodLimit){
    fill(255,255,0);
    var val;
    val = body.joints[kinectron.HANDRIGHT].depthX;
    var rightHandX =  map(val,0,1,0,width);
    val = body.joints[kinectron.HANDRIGHT].depthY;
    var rightHandY = map(val,0,1,0,height); //height numbers bigger at the bottom
    ellipse(rightHandX, rightHandY, 20,20);
    numOfBodies++;

  }else if (body.bodyIndex == 3 && numOfBodies<bodLimit){
    fill(0,255,0);
    var val;
    val = body.joints[kinectron.HANDRIGHT].depthX;
    var rightHandX =  map(val,0,1,0,width);
    val = body.joints[kinectron.HANDRIGHT].depthY;
    var rightHandY = map(val,0,1,0,height); //height numbers bigger at the bottom
    ellipse(rightHandX, rightHandY, 20,20);
    numOfBodies++;

  }else if (body.bodyIndex == 4 && numOfBodies<bodLimit){
    fill(0,255,255);
    var val;
    val = body.joints[kinectron.HANDRIGHT].depthX;
    var rightHandX =  map(val,0,1,0,width);
    val = body.joints[kinectron.HANDRIGHT].depthY;
    var rightHandY = map(val,0,1,0,height); //height numbers bigger at the bottom
    ellipse(rightHandX, rightHandY, 20,20);
    numOfBodies++;

  }else if (body.bodyIndex == 5 && numOfBodies<bodLimit){
      fill(0,0,255);
      var val;
      val = body.joints[kinectron.HANDRIGHT].depthX;
      var rightHandX =  map(val,0,1,0,width);
      val = body.joints[kinectron.HANDRIGHT].depthY;
      var rightHandY = map(val,0,1,0,height); //height numbers bigger at the bottom
      ellipse(rightHandX, rightHandY, 20,20);
      numOfBodies++;

  }

  numOfBodies=1;

  
//   var val;
//   val = body.joints[kinectron.HANDRIGHT].depthX;
//   var rightHandX =  map(val,0,1,0,width);
//   val = body.joints[kinectron.HANDRIGHT].depthY;
//   var rightHandY = map(val,0,1,0,height); //height numbers bigger at the bottom

// //  for(numOfBodies=0; numOfBodies<2;numOfBodies++){
//    ellipse(rightHandX, rightHandY, 20,20);
  //println(body.bodyIndex + " " +val );
//   }
}
