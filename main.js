song1 ="";
song2 = "";
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";
songs = "";


function preload()
{
    song1 = loadSound("Harry Potter Theme Song.mp3");
    song2 = loadSound("Harry Potter - Indian Theme Song (1).mp3");
}
function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded());
    poseNet.on('pose', gotPoses);
}


function draw()
{
    image(video, 0, 0, 600, 500);
    fill("#FF0000");
    stroke("#FF0000");
    song1_is_playing = song1.isPlaying();
    song2_is_playing = song2.isPlaying();
    if(scoreLeftWrist > 0.2)
    {
        circle(leftWristX, leftWristY, 20);
        song1.stop();
        if(song2_is_playing == false)
        {
            song2.play();
            document.getElementById("song").innerHTML = "Harry Potter Indian Theme Song";
        }
    }


}


function play()
{
    song.play();
}


function modelLoaded()
{
    console.log("Posenet Is Initialized!!");
}


function gotPoses(results)
{       
    if (results.length > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);                                           

        leftWristX = results[0].pose.leftWrist.x;
        leftWristX = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);
    
        rightWristX = results[0].pose.leftWrist.x;
        rightWristY = results[0].pose.leftWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}


