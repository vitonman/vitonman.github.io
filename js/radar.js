//radar
var ctxR = document.getElementById("radarChart").getContext('2d');
var myRadarChart = new Chart(ctxR, {
type: 'radar',
data: {
labels: ["Java", "PHP", "CSS", "HTML", "Android", "Python"],
datasets: [{
label: "My current abilities",
data: [73, 60, 57, 70, 73, 60],
backgroundColor: [
'rgba(105, 0, 132, .2)',
],
borderColor: [
'rgba(200, 99, 132, .7)',
],
borderWidth: 2
},
{
label: "My preferences",
data: [87, 70, 65, 80, 80, 70],
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
responsive: true
}
});