var song=""
var song2=""
var leftWristX=0
var leftWristY=0
var rightWristX=0
var rightWristY=0

function preload(){
    song=loadSound("music.mp3")
    song2=loadSound("music2.mp3")
}

function setup(){
    canvas=createCanvas(600,500)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on("poses",gotResults)
}

function draw(){
    image(video,0,0,600,500)
}

function modelLoaded(){
    console.log("poseNet is initialised")
}

function gotResults(results){
    if(gotResults.length > 0){
        console.log(results)
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftwristX= "+leftWristX+", leftWristY= "+leftWristY)

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.;rightWrist.y;
        console.log("rightwrist= "+rightWristX+"rightWristY= "+rightWristY)
    }
}