const ctx = document.getElementById('myChart').getContext('2d');
const dataLabels = ["South Korea", "Japan", "Australia", "Finland", "France", "Germany", "Mexico", "Switzerland", "Czech Republic", "Canada", "Chile", "U.S.", "Hungary"]
const blueBarValues = [74, 67, 56, 48, 46, 38, 37, 34, 25, 20, 20, 17, 17]

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
            ctx.fillText(data, bar._model.x, bar._model.y -5);
        });
    });
}

const getColors = () => {
    let maxValue = Math.max(...blueBarValues)
    let index = blueBarValues.indexOf(maxValue)
    let col = []
    blueBarValues.forEach((elm, i)=>{
        if(i === index){
            col.push("rgb(66, 135, 245)");
        }else{
            col.push("rgb(158, 158, 158)");
        }
    })
    return col;
}

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: dataLabels,
        datasets: [{
            data: blueBarValues,
            backgroundColor: getColors(),
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
                position: 'left',
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
        maintainAspectRatio: true,
        animation: {
            onComplete: addDataValuesToBars
        }
    }
});