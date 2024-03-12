//https://teachablemachine.withgoogle.com/models/HsdoZb9UB/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/HsdoZb9UB/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}