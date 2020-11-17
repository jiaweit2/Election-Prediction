const randomScalingFactor = function () {
    return Math.round(Math.random() * 100);
};
window.charts = []

function showResults(state, bg) {
    document.getElementById("popup").style.visibility = "visible";
    if (bg == "#4DBBF5") {
        bg = "#96D5F7E0";
    } else {
        bg = "#EEAEAFE0";
    }
    document.getElementById("popup").style.backgroundColor = bg;
    createTurnout(state);
    createDemoGraph(state);
}

function closePopup() {
    document.getElementById("popup").style.visibility = "hidden";
    document.getElementById("popup").style.backgroundColor = "#ffffff00";
    window.charts.forEach(chart => {
        chart.destroy();
    });
    window.charts = []
}
