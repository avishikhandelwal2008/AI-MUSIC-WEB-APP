song = "";
song1 = "";
leftwristX = "0";
leftwristY = "0";
rightwristX = "0";
rightwristY = "0";

function preload() {
    song = loadSound("music.mp3");
    song1 = loadSound("music2.mp3");
}

function setup() {
canvas = createCanvas(600,500);
canvas.center();

webcam=createCapture(VIDEO);
webcam.hide();

posenet = ml5.poseNet(webcam, modelLoaded);
posenet.on('pose' , gotPoses);
}

function modelLoaded() {
    console.log('Posenet is Initialised');
}

function gotPoses(results) {
    if(results.length > 0 ) {
        console.log(results);
        leftwristX = round(results[0].pose.leftWrist.x);
        leftwristY = round(results[0].pose.leftWrist.y);
        rightwristX = round(results[0].pose.rightWrist.x);
        rightwristY = round(results[0].pose.rightWrist.y);

        console.log("Value of left wrist x and y axis are = " + leftwristX + "  &  " + leftwristY);
        console.log("Value of right wrist x and y axis are = " + rightwristX + "  &  " + rightwristY);

        scoreleftwrist = results[0].pose.keypoints[9].score;
        console.log("scoreleftwrist = " + scoreleftwrist);
    }
}

function draw() {
    image(webcam,0,0,600,500);

    fill("red");
    stroke("red");
    if(scoreleftwrist > 0.1) {
        circle(leftwristX, leftwristY,20);
        InNumberleftWristY = Number(leftwristY);
        volume = InNumberleftWristY/500;
        song.setVolume(volume);
    
        document.getElementById("volume").innerHTML = "VOLUME = " + volume;
}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(2);
}
function stop() {
    song.stop();
}

}