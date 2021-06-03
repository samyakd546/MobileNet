Webcam.set({
    width:310,
    height:300,
    image_format:'png',
    png_quality:90,

constraints:{
facingMode:"encironment"
}
});
camera=document.getElementById("camera");
Webcam.attach(camera);

function snap(){
    Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML="<img id='image' src='"+data_uri+"'>";

    })
}

console.log("ml5 version is",ml5.version);
classifier=ml5.imageClassifier('MobileNet',modelLoaded);

function modelLoaded(){
    console.log("Model is Loaded");
}

function check(){
    img=document.getElementById("image");
    classifier.classify(img,gotResult);
}

funcion gotResult(error,result){
    if(error){
     console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("object_name").innerHTML=result[0].label;

    }
}