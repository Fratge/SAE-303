const ctx = document.getElementById('myChart').getContext('2d');

var data = {
    labels: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
    datasets: [{
        data: [145, 143, 144, 146, 146, 149, 149, 147, 149, 150],
        borderColor: '#FFFFFF',
        pointRadius: 6,
        pointStyle: 'rectRot',
        pointBackgroundColor: '#FFFFFF',

    }],
};

var options = {
    responsive: true,
    scales: {
        y: {
            beginAtZero: false,
            display: false,
            suggestedMin: 142,
        },

        x: {
            ticks: {
                color: 'white',
                font: {
                    size: 14,
                    weight: 'bold'
                }
            },
            grid: {
                lineWidth: 0,
            },

        }
    },

    plugins: {
        legend: {
            display: false
        }
    }
};

var config = {
    type: 'line',
    data: data,
    options: options
};

var graph1 = new Chart(ctx, config);
