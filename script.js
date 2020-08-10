//onmousemove = function(e){document.getElementById('text').innerHTML = `${e.clientX} x ${e.clientY}`}
//tracks mouse pos

//console.log(`${window.innerWidth/2} x ${window.innerHeight}`);

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const centerW = canvas.width / 2;
const centerH = canvas.height / 2;

let circle = {
    x: 40,
    y: 40,
    s: 15,
    xSpeed: 5,
    ySpeed: 5
}

function drawCircle() {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.s, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
}

function update() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawCircle();
    circle.x += circle.xSpeed;
    circle.y += circle.ySpeed;

    if (circle.x + circle.s > canvas.width || circle.x - circle.s < 0) {
        circle.xSpeed *= -1;
    }

    if (circle.y + circle.s > canvas.height || circle.y - circle.s < 0) {
        circle.ySpeed *= -1;
    }

    requestAnimationFrame(update);
}
update();