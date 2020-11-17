const randomScalingFactor = function () {
    return Math.round(Math.random() * 100);
};

function showResults(state, bg) {
    document.getElementById("popup").style.visibility = "visible";
    if (bg == "#4DBBF5") {
        bg = "#96D5F7E0";
    } else {
        bg = "#EEAEAFE0";
    }
    document.getElementById("popup").style.backgroundColor = bg;
    var ctx = document.getElementById('chart-area').getContext('2d');
    var config = {
        type: 'pie',
        data: {
            datasets: [{
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                ],
                backgroundColor: [
                    window.chartColors.red,
                    window.chartColors.orange,
                    window.chartColors.yellow,
                    window.chartColors.green,
                    window.chartColors.blue,
                ],
                label: 'Actual'
            }, {
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                ],
                backgroundColor: [
                    window.chartColors.red,
                    window.chartColors.orange,
                    window.chartColors.yellow,
                    window.chartColors.green,
                    window.chartColors.blue,
                ],
                label: 'Predicted'
            }],
            labels: [
                'Red',
                'Orange',
                'Yellow',
                'Green',
                'Blue'
            ]
        },
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Voter Turnout rates'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    };
    Chart.defaults.font.color = "#000";
    window.chart = new Chart(ctx, config);
}

function closePopup() {
    document.getElementById("popup").style.visibility = "hidden";
    document.getElementById("popup").style.backgroundColor = "#ffffff00";
    window.chart.destroy();
}
