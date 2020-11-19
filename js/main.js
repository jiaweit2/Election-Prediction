const randomScalingFactor = function () {
    return Math.round(Math.random() * 100);
};
window.charts = []

function showResults(state, bg) {
    document.getElementById("popup").style.pointerEvents = "initial";
    document.getElementById("popup").style.opacity = "1";
    if (bg == "#4DBBF5") {
        bg = "#ADE1FA";
    } else {
        bg = "#EEB3BE";
    }
    document.getElementById("popup").style.backgroundColor = bg;

    // Show data
    createTurnout(state);
    createDemoGraph(state);
}

function closePopup() {
    document.getElementById("popup").style.opacity = "0";
    document.getElementById("popup").style.backgroundColor = "#ffffff00";
    document.getElementById("popup").style.pointerEvents = "none";
    window.charts.forEach(chart => {
        chart.destroy();
    });
    window.charts = []
    setTimeout(() => {
        let arr = ["AIAN", "API", "Black", "White", "Hispanic", "Unknown"];
        arr.forEach(race => {
            document.getElementById('demo-' + race).style.height = "0";
        });
    }, 800);
}
