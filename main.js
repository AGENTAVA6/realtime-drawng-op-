noseX = 0;
noseY = 0;
leftwrist = 0;
rightwirst = 0;
difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function modelLoaded(){
    console.log("poseNet is opppppppppp okkkkkkk")
}
function gotPoses(results){
if(results.length > 0){
console.log(results)
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.x;
console.log("noseX = "+ noseX+ 'noseY= ' +noseY);
leftwrist = results[0].pose.leftWrist.x;
rightwrist = results[0].pose.rightWrist.x;
difference = floor(leftwrist - rightwrist);
console.log("leftwirst = "+ leftwrist + "right wrist = "+ rightwrist + "difference = " + difference);
}
}
function draw(){
    background('#969A97');
document.getElementById("lol").innerHTML = "Width and height of the square will be = "+ difference + "px"
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);
}