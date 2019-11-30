//radar
var ctxR = document.getElementById("radarChart").getContext('2d');
var myRadarChart = new Chart(ctxR, {
type: 'radar',
data: {
labels: ["Java", "Android", "Python", "PHP", "JS", "CSS", "HTML"],
datasets: [{
label: "My current skills",
data: [67, 59, 65, 60, 56, 55, 75],
backgroundColor: [
'rgba(105, 0, 132, .2)',
],
borderColor: [
'rgba(200, 99, 132, .7)',
],
borderWidth: 2
},
{
label: "My future preference",
data: [90, 75, 73, 75, 82, 68, 75],
backgroundColor: [
'rgba(0, 250, 220, .2)',
],
borderColor: [
'rgba(0, 213, 132, .7)',
],
borderWidth: 2
}
]
},
      options: {
        responsive: true,
        scale: {
          ticks: {
            beginAtZero: true,
            max: 100,
            min: 0
          }
        }
      }
});