var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx,{
    type: "bar",
    data: {
        labels: ['lunes','martes','column3','column4','column5','column6'],
        datasets: [{
            label: 'Ejemplo CHART.JS',
            data: [10,6,30,43,23,15],
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
        }]
    }
});