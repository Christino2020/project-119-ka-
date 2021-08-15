function setup(){
    canvas = createCanvas(215, 100)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/o8OBLEdY4/model.json', modelLoaded)
}
function modelLoaded(){
console.log("Model Loaded!")
}
function draw(){
image(video, 0, 0, 215, 100)
classifier.classify(video, gotResults)
}
function gotResults(error, results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("result_person_name").innerHTML = results[0].label
        document.getElementById("result_Accuracy_name").innerHTML = results[0].confidence.toFixed(3) * 100
    }
}