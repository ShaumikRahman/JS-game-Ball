//onmousemove = function(e){document.getElementById('text').innerHTML = `${e.clientX} x ${e.clientY}`}
//tracks mouse pos
let diff = document.title;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth -= window.innerWidth * 0.01;
canvas.height = window.innerHeight -= window.innerHeight * 0.13;

//const centerW = canvas.width / 2;
//const centerH = canvas.height / 2;

let score = 0;
let inGame = false;
let lost = false;
let numberOfCircles;
let size = 15;
let xSpeed = 8;
let ySpeed = 4;
let mousePosX;
let mousePosY;
let circleList = [];

if (diff == 'Easy') {
    numberOfCircles = 12;
    for (let i = 0; i < numberOfCircles; i++) {
        circleList[i] = {
            x: size+1,
            y: size+1,
            dx: xSpeed * getRand(0.75,1.25),
            dy: ySpeed * getRand(0.75,1.25)
        }
    }
} else if ( diff == 'Medium') {
    numberOfCircles = 25;
    for (let i = 0; i < numberOfCircles; i++) {
        circleList[i] = {
            x: size+1,
            y: size+1,
            dx: xSpeed * getRand(0.75,1.25),
            dy: ySpeed * getRand(0.75,1.25)
        }
    }
} else {
    numberOfCircles = 100;
    for (let i = 0; i < numberOfCircles; i++) {
        circleList[i] = {
            x: size+1,
            y: size+1,
            dx: xSpeed * getRand(0.75,1.25),
            dy: ySpeed * getRand(0.75,1.25)
        }
    }
}

document.getElementById('restart').hidden = true;

document.getElementById('restart').addEventListener('click', (e) => {
    location.reload();
});

document.getElementById('canvas').addEventListener('mouseenter', function () {
    inGame = true;
});

document.getElementById('canvas').addEventListener('mouseleave', function () {
    inGame = false;
});

function getRand(min, max) {
    return Math.random() * (max - min) + min;
  }

function incrementScore() {
    if (inGame) {
        score++;
        document.getElementById('score').innerHTML = `Score : ${score}`
    }
}

function drawCircles() {
    ctx.beginPath();
    for (let i = 0; i < circleList.length; i++) {
        ctx.arc(circleList[i].x, circleList[i].y, size, 0, Math.PI * 2);
        ctx.moveTo(0,0);
    }
    ctx.fillStyle = 'white';
    ctx.fill();
}

function endGame() {
    lost = true;
    document.getElementById('restart').hidden = false;
}

function update() {

    if (lost == false) {
        ctx.clearRect(0,0,canvas.width,canvas.height);

        for (let i = 0; i < circleList.length; i++) {
            
            circleList[i].x += circleList[i].dx;
            circleList[i].y += circleList[i].dy;

            onmousemove = function (e) {
                mousePosX = e.clientX;
                mousePosY = e.clientY - document.getElementById('nav').clientHeight;
            }

            if (circleList[i].x + size > mousePosX && 
                circleList[i].x - size < mousePosX &&
                circleList[i].y + size > mousePosY &&
                circleList[i].y - size < mousePosY) {
                endGame();
            }

            if (circleList[i].x + size > canvas.width || circleList[i].x - size < 0) {
                circleList[i].dx *= -1;
                incrementScore();
            }

            if (circleList[i].y + size > canvas.height || circleList[i].y - size < 0) {
                circleList[i].dy *= -1;
                incrementScore();
            }
        }

        drawCircles();

        requestAnimationFrame(update);
    }

    
}
update();