let w= 1280;
let h = 720;

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

    for(let i=0; i<body.joints.length; i++){
        fill(255, 0, 0);
        ellipse(body.joints[i].depthX*w, body.joints[i].depthY*h, 20, 20);

    }


}