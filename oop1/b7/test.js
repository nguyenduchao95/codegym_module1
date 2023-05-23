let ROAD_FRICTION = 0.05;
let GRASS_FRICTION = 0.05;
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let imageData;
let FPS = 20;
let car = new Car(canvas.width-20, 250, canvas.width, canvas.height);
let background = new Image();
let keyStates = [];

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function init() {
    car.friction = ROAD_FRICTION;
    canvas.onkeydown = canvasKeydown;
    canvas.onkeyup = canvasKeyup;
    background.src = './img/map1.png';
    background.onload = function () {
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        window.setInterval(update, 1000 / FPS)
    }
}

function draw() {
    clear();
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    car.draw(ctx);
    ctx.fillStyle = 'red';
    let friction = ROAD_FRICTION;
    for (let vertice of car.vertices) {
        let index = Math.floor((vertice.x + vertice.y * imageData.width) * 4 + 3);
        if (imageData.data[index] != 0) {
            ctx.beginPath();
            ctx.arc(vertice.x, vertice.y, 3, 0, 2 * Math.PI,false);
            ctx.fill();
            friction += GRASS_FRICTION;
        }
    }
    car.friction = friction;
}

function update() {
    car.handleInput(keyStates);
    car.update();
    draw();
}

function canvasKeydown(e) {
    if (Object.values(KEYS).indexOf(e.keyCode) != -1) {
        keyStates[e.keyCode] = true;
    }
}

function canvasKeyup(e) {
    if (keyStates[e.keyCode]) {
        keyStates[e.keyCode] = false;
    }
}

window.onload = function () {
    init();
}
