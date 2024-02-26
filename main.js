var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speakData = "Tirando sua selfie em 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);

setTimeout()
var img_id="selfie1";
takeSelfie()
setTimeout(function()
{
img_Id = "selfie1";
if(img_Id=="selfiel"){
    document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
    }
takeSelfie();
speakData = "Tirando sua selfie em 10 segundos";
var utterThis = new SpeechSynthesisUtterance (speakData); synth.speak(utterThis);
}, 5000);
}
function takeSelfie()
{
console.log(imgId);
Webcam.snap(function(data_uri) {
if(imgId=="selfiel"){
document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
}
if(imgId=="selfie2"){
document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
}
if(imgId=="selfie3"){
document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
}
});
}
