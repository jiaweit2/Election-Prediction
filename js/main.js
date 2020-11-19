const randomScalingFactor = function () {
    return Math.round(Math.random() * 100);
};
window.charts = []
var toObject = null;

function showResults(state, bg) {
    if (toObject) {
        clearTimeout(toObject);
        toObject = null;
    }
    document.getElementById("popup").style.pointerEvents = "initial";
    document.getElementById("popup").style.opacity = "1";
    if (bg == "#4DBBF5") {
        bg = "#ADE1FA"; //democrat
    } else {
        bg = "#EEB3BE"; //republican
    }
    document.getElementById("popup").style.backgroundColor = bg;

    // Show data
    createTurnout(state);
    createDemoGraph(state);
    createPrediction(state, bg);
}

function closePopup() {
    document.getElementById("popup").style.opacity = "0";
    document.getElementById("popup").style.backgroundColor = "#ffffff00";
    document.getElementById("popup").style.pointerEvents = "none";
    window.charts.forEach(chart => {
        chart.destroy();
    });
    window.charts = []
    toObject = setTimeout(() => {
        let arr = ["AIAN", "API", "Black", "White", "Hispanic", "Unknown"];
        arr.forEach(race => {
            document.getElementById('demo-' + race).style.height = "0";
        });
    }, 800);
}

function createPrediction(state, bg) {
    var actual = bg == "#ADE1FA" ? "Democrat" : "Republican";
    var predict = "Democrat";
    if (predictedData[state]["democratCounter"] < predictedData[state]["republicanCounter"]) {
        predict = "Republican";
    }
    console.log(predictedData[state]["democratCounter"], predictedData[state]["republicanCounter"])
    var s = "Actual Winnder: " + actual + "<br>";
    s += "Predicted Winner: " + predict;
    document.getElementById("result").innerHTML = s;


}