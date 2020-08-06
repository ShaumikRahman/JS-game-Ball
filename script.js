//onmousemove = function(e){document.getElementById('text').innerHTML = `${e.clientX} x ${e.clientY}`}
//tracks mouse pos

//console.log(`${window.innerWidth/2} x ${window.innerHeight}`);

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.beginPath();
ctx.arc(200,200,30,0, Math.PI * 2);
ctx.fillStyle = 'Red';
ctx.fill();