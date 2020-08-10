//onmousemove = function(e){document.getElementById('text').innerHTML = `${e.clientX} x ${e.clientY}`}
//tracks mouse pos
let diff = document.title;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth -= window.innerWidth * 0.01;
canvas.height = window.innerHeight -= window.innerHeight * 0.13;

const centerW = canvas.width / 2;
const centerH = canvas.height / 2;

let numberOfCircles;
let size;
let xSpeed;
let ySpeed;
let circleList = [];

if (diff == 'Easy') {
    numberOfCircles = 1;
    size = 15;
    xSpeed = 8;
    ySpeed = 4;
    for (let i = 0; i < numberOfCircles; i++) {
        circleList[i] = {
            x: centerW,
            y: centerH,
            dx: xSpeed,
            dy: ySpeed
        }
        console.log(`made circle ${i}`);
    }
    drawCircles();
} else if ( diff == 'Medium') {

} else {

}

function drawCircles() {
    ctx.beginPath();
    for (let i = 0; i < circleList.length; i++) {
        ctx.arc(circleList[i].x, circleList[i].y, size, 0, Math.PI * 2);
    }
    ctx.fillStyle = 'white';
    ctx.fill();
}

function update() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    for (let i = 0; i < circleList.length; i++) {
        circleList[i].x += circleList[i].dx;
        circleList[i].y += circleList[i].dy;

        if (circleList[i].x + size > canvas.width || circleList[i].x - size < 0) {
            circleList[i].dx *= -1;
        }

        if (circleList[i].y + size > canvas.height || circleList[i].y - size < 0) {
            circleList[i].dy *= -1;
        }
    }

    drawCircles();

    requestAnimationFrame(update);
}
update();