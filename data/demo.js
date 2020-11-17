function createDemoGraph(state) {
    var ctx = document.getElementById('chart-demo').getContext('2d');
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
                text: 'Voter Demographics'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    };
    Chart.defaults.font.color = "#000";
    window.charts.push(new Chart(ctx, config));
}