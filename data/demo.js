var races = ["AIAN", "API", "Black", "White", "Hispanic", "Unknown"];

function createDemoGraph(state) {
    Chart.defaults.font.color = "#000";
    races.forEach(race => {
        createRaceGraph(state, race);
    });
    createRacePie(state);
}

function createRacePie(state) {
    var config = {
        type: 'pie',
        data: {
            datasets: [{
                data: [
                    predictedData[state]["aianDemocratCounter"],
                    predictedData[state]["apiDemocratCounter"],
                    predictedData[state]["whiteDemocratCounter"],
                    predictedData[state]["blackDemocratCounter"],
                    predictedData[state]["hispanicDemocratCounter"],
                    predictedData[state]["unknownDemocratCounter"],
                ],
                backgroundColor: [
                    "#FFBA5C",
                    "#FFEA77",
                    "#eee",
                    "#111",
                    "#E8A47D",
                    "#627832"
                ],
                label: 'Dataset 1'
            }, {
                data: [
                    predictedData[state]["aianRepublicanCounter"],
                    predictedData[state]["apiRepublicanCounter"],
                    predictedData[state]["whiteRepublicanCounter"],
                    predictedData[state]["blackRepublicanCounter"],
                    predictedData[state]["hispanicRepublicanCounter"],
                    predictedData[state]["unknownRepublicanCounter"],
                ],
                backgroundColor: [
                    "#FFBA5C",
                    "#FFEA77",
                    "#eee",
                    "#111",
                    "#E8A47D",
                    "#627832"
                ],
                label: 'Dataset 2'
            }],
            labels: [
                'AIAN',
                'API',
                'White',
                'Black',
                'Hispanic',
                "Unknown"
            ]
        },
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    };
    document.getElementById('demo-pie').style.height = "auto";
    var ctx = document.getElementById('demo-pie').getContext('2d');
    window.charts.push(new Chart(ctx, config));
}

function createRaceGraph(state, race) {
    var title = race;
    switch (race) {
        case "AIAN":
            title = "American Indian & Alaska Native (AIAN)"
            break;
        case "API":
            title = "Asian/Pacific Islander (API)"
            break;
        case "Unknown":
            title = "Unknown Race"
            break;
    }
    var barChartData = {
        labels: ['Democratic', 'Republican', 'Neutral', 'Unknown'],
        datasets: [{
            label: 'Male',
            backgroundColor: window.chartColors.blue,
            data: [
                predictedData[state][race.toLowerCase() + "ManDemocratCounter"],
                predictedData[state][race.toLowerCase() + "ManRepublicanCounter"],
                predictedData[state][race.toLowerCase() + "ManNeutralCounter"],
                predictedData[state][race.toLowerCase() + "ManUnknownPoliticsCounter"],
            ]
        },
        {
            label: 'Female',
            backgroundColor: window.chartColors.red,
            data: [
                predictedData[state][race.toLowerCase() + "WomanDemocratCounter"],
                predictedData[state][race.toLowerCase() + "WomanRepublicanCounter"],
                predictedData[state][race.toLowerCase() + "WomanNeutralCounter"],
                predictedData[state][race.toLowerCase() + "WomanUnknownPoliticsCounter"],
            ]
        },
        {
            label: 'Unknown',
            backgroundColor: window.chartColors.yellow,
            data: [
                predictedData[state][race.toLowerCase() + "UnknownGenderDemocratCounter"],
                predictedData[state][race.toLowerCase() + "UnknownGenderRepublicanCounter"],
                predictedData[state][race.toLowerCase() + "UnknownGenderNeutralCounter"],
                predictedData[state][race.toLowerCase() + "UnknownGenderUnknownPoliticsCounter"],
            ]
        },
        ]
    };
    document.getElementById('demo-' + race).style.height = "auto";
    var ctx = document.getElementById('demo-' + race).getContext('2d');
    window.charts.push(new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: title
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true
                }
            }
        }
    }));
}