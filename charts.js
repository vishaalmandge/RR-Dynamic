/*---line chart---------*/

var options = {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "#34659e",
                borderColor: "#34659e",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "#34659e",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#34659e",
                pointHoverBorderColor: "#34659e",
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                data: [65, 59, 80, 0, 56, 55, 40],
                lineTension: 0,
        },
            {
                label: "My First dataset",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "#fcc302",
                borderColor: "#fcc302",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "#fcc302",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#fcc302",
                pointHoverBorderColor: "#fcc302",
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                data: [6, 77, 80, 30, 56, 67, 40],
                lineTension: 0,
        }
    ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    reverse: false
                }
      }]
        }
    }
}

var ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, options);
/*-----------bar chart----------------*/

var options = {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1,
                backgroundColor: '#34659e'
    	},
            {
                label: '# of Points',
                data: [7, 11, 5, 8, 3, 7],
                borderWidth: 1,
                backgroundColor: '#fcc302'
			}
		]
    },
    options: {
        scales: {
            yAxes: [{
                stacked: false,
                gridLines: {
                    display: true,
                    color: "rgba(255,99,132,0.2)"
                }
    }],
            xAxes: [{
                gridLines: {
                    display: false
                }
    }]
        }
    }
}

var ctx = document.getElementById('myChart1').getContext('2d');
new Chart(ctx, options);
