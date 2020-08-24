const chartOneCtx = document.getElementById('myChart').getContext('2d');
const chartOneLabels = ["Hematologic malignancy"]
const blueBarValuesOne = [5.85]
const greyBarValuesOne = [0.92]

const chartTwoCtx = document.getElementById('myChartTwo').getContext('2d');
const chartTwoLabels = ["Brain cancer"]
const blueBarValuesTwo = [5.0]
const greyBarValuesTwo = [3.5]

function addDataValuesToBars() {
    let chartInstance = this.chart;
    let ctx = chartInstance.ctx;
    ctx.font = Chart.helpers.fontString(10, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.fillStyle = "#000"
    this.data.datasets.forEach(function (dataset, i) {
        let meta = chartInstance.controller.getDatasetMeta(i);
        meta.data.forEach(function (bar, index) {
            let data = dataset.data[index];
            ctx.fillText(data, bar._model.x, bar._model.y - 5);
        });
    });
}

//** Chart one */ 

const myChartOne = new Chart(chartOneCtx, {
    type: 'bar',
    data: {
        labels: chartOneLabels,
        datasets: [{
            data: blueBarValuesOne,
            backgroundColor: "rgb(66, 135, 245)",
        },
        {
            data: greyBarValuesOne,
            backgroundColor: "rgb(158, 158, 158)",
        }
        ]
    },
    options: {
        scales: {
            xAxes: [
                {
                    categoryPercentage: 0.5,
                    barPercentage: 0.4,
                    gridLines: {
                        drawBorder: true,
                        drawOnChartArea: false
                    },
                }
            ],
            yAxes: [{
                position: 'right',
                gridLines: {
                    display: false,
                },
                ticks: {
                    display: false,
                    beginAtZero: true, 
                    max:10
                },
            }]
        },
        legend: {
            display: false,
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
        tooltips: {
            enabled: false
        },
        events: [],
        responsive: true,
        maintainAspectRatio: true,
        animation: {
            onComplete: addDataValuesToBars
        }
    }
});

//** Chart Two */ 

const myChartTwo = new Chart(chartTwoCtx, {
    type: 'bar',
    data: {
        labels: chartTwoLabels,
        datasets: [{
            data: blueBarValuesTwo,
            backgroundColor: "rgb(66, 135, 245)",
        },
        {
            data: greyBarValuesTwo,
            backgroundColor: "rgb(158, 158, 158)",
        }
        ]
    },
    options: {
        scales: {
            xAxes: [
                {
                    categoryPercentage: 0.5,
                    barPercentage: 0.4,
                    gridLines: {
                        drawBorder: true,
                        drawOnChartArea: false
                    },
                }
            ],
            yAxes: [{
                position: 'right',
                gridLines: {
                    display: false,
                },
                ticks: {
                    display: false,
                    beginAtZero: true,
                    max:10
                },
            }]
        },
        legend: {
            display: false,
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
        tooltips: {
            enabled: false
        },
        events: [],
        responsive: true,
        maintainAspectRatio: true,
        animation: {
            onComplete: addDataValuesToBars
        }
    }
});