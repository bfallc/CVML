

let w = 1280;
let h = 720;

let kinectron; 

function setup(){
    let canvas = createCanvas(w,h)
    canvas.parent("#sketch");
    background(200);
    
    kinectron = new Kinectron("10.75.29.87");
    
    kinectron.makeConnection();
    
    kinectron.startTrackedBodies(drawBody);
}


function loop() {
    
}

function drawBody(body) {
    //background(200);
    for(let n = 0; n<6; n++){
        for(let i = 0; i<body.joints.length; i++){
            fill(n*50, 255, 0);    
            ellipse(body.joints[i].depthX*width, body.joints[i].depthY*height, 20, 20);
        
        }
    }
//    if (body.bodyIndex == 0){
//    for(let i = 0; i<body.joints.length; i++){
//        //background(0);
//        fill(255,0,0);    
//        ellipse(body.joints[i].depthX*width, body.joints[i].depthY*height, 20, 20);
//    }
//    } 
//        if (body.bodyIndex == 1){
//    for(let i = 0; i<body.joints.length; i++){
//        //background(0);
//        fill(0,255,0);    
//        ellipse(body.joints[i].depthX*width, body.joints[i].depthY*height, 20, 20);
//    }
//    } 
//           if (body.bodyIndex == 2){
//    for(let i = 0; i<body.joints.length; i++){
//        //background(0);
//        fill(0,0,255);    
//        ellipse(body.joints[i].depthX*width, body.joints[i].depthY*height, 20, 20);
//    }
//    } 
//           if (body.bodyIndex == 3){
//    for(let i = 0; i<body.joints.length; i++){
//        //background(0);
//        fill(255,255,0);    
//        ellipse(body.joints[i].depthX*width, body.joints[i].depthY*height, 20, 20);
//    }
//    } 
//           if (body.bodyIndex == 4){
//    for(let i = 0; i<body.joints.length; i++){
//        //background(0);
//        fill(0,255,255);    
//        ellipse(body.joints[i].depthX*width, body.joints[i].depthY*height, 20, 20);
//    }
//    } 
//           if (body.bodyIndex == 5){
//    for(let i = 0; i<body.joints.length; i++){
//        //background(0);
//        fill(50,50,50);    
//        ellipse(body.joints[i].depthX*width, body.joints[i].depthY*height, 20, 20);
//    }
//    } 
        

        
}
