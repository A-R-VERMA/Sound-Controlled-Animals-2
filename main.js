function classifyAnimal() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifer('', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}