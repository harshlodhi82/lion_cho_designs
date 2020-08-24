const ctx = document.getElementById('myChart').getContext('2d');
const dataLabels = ["Gastric Cancer","Colon Cancer","Breast Cancer","Liver Cancer","Cervical Cancer"]
const blueBarValues = [76, 76, 93, 35, 80]
const greyBarValues = [32, 66, 91, 19, 69]

function addDataValuesToBars() {
    let chartInstance = this.chart;
    let ctx = chartInstance.ctx;
    ctx.font = Chart.helpers.fontString(10, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.fillStyle = "#fff"
    this.data.datasets.forEach(function (dataset, i) {
        let meta = chartInstance.controller.getDatasetMeta(i);
        meta.data.forEach(function (bar, index) {
            let data = dataset.data[index];
            ctx.fillText(data, bar._model.x, bar._model.y + 20);
        });
    });
}

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: dataLabels,
        datasets: [{
            data: blueBarValues,
            backgroundColor: "rgb(66, 135, 245)",
        },
        {
            data: greyBarValues,
            backgroundColor: "rgb(158, 158, 158)",
        }
        ]
    },
    options: {
        scales: {
            xAxes: [
                {
                    categoryPercentage: 0.5,
                    barPercentage: 1.0
                }
            ],
            yAxes: [{
                position: 'right',
                ticks: {
                    beginAtZero: true
                }
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
        maintainAspectRatio:true,
        animation: {
            onComplete: addDataValuesToBars
        }
    }
});