song = "";

function preload() {
    song = loadSound("");
}

function setup() {
canvas = createCanvas(600,500);
canvas.center();

webcam=createCapture(VIDEO);
webcam.hide();
}

function draw() {
    image(webcam,0,0,600,500);
}

function play() {
    song.play();
}
function stop() {
    song.stop();
}

