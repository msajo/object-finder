cocossd = "";
status = "";
function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,480,380);
}
function start(){
    objectdetecter = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "status: Detecting objects";
    inputbox = document.getElementById("input").value
}
function modelLoaded(){
    console.log("model is loaded");
    status = true;
}