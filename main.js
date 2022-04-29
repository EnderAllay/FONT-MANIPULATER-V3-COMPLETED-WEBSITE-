function setup() {
    video= createCapture(VIDEO);
    video.size(550,500);

    canvas= createCanvas(500,500);
    canvas.position(560,150);

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#00ffc3');
    textSize(difference);
    fill('#FFE787');
    text('Keanu',50,400);
}

function modelLoaded() {
console.log("PoseNet is Loaded.");
}

function gotPoses(results){
if (results.length > 0) {

    console.log(results);

    rightWristX= results[0].pose.rightWrist.x;
    leftWristX= results[0].pose.leftWrist.x;
    difference= floor(leftWristX - rightWristX);

}
}