var songE="";
var songLGO=""; 

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('Pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 600, 500);
    
    circle(leftWristX, leftWristY, 20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimal = floor(InNumberleftWristY);
    volume = remove_decimal/500;
    document.getElementById("volume").innerHTML = "Volume = " + volume;
    song.setVolume(volume);
}

function preload()
{
    songE = loadSound("BTSEuphoria.mp3");
    songLGO = loadSound("BTSLifeGoesOn.mp3");
}

function song_name()
{
    songE.play();
    songLGO.play();
    song.setVolume(1);
    song.rate(1);
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0);
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

        console.log("rightWristX = " + rightWristX + "rightWristY" + rightWristY);

    }
}

