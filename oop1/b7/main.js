let ONE_RADIAN = Math.PI / 180;
let _360_RADIAN = 360 * ONE_RADIAN;
let KEYS = {
    LEFT_ARROW: 37,
    UP_ARROW: 38,
    RIGHT_ARROW: 39,
    DOWN_ARROW: 40
}
function Car(x, y, mapWidth, mapHeight) {
    this.cx = x;
    this.cy = y;
    this.img = new Image();
    this.img.src = './img/car.png';
    this.mapWidth = mapWidth;
    this.mapHeight = mapHeight;

    this.maxSpeed = 20;
    this.minSpeed = -5;
    this.speed = 0;

    this.acceleration = 0.5;
    this.friction = 0;
    this.rotationAngle = 5 * ONE_RADIAN;
    this.angle = -90 * ONE_RADIAN;

    this.width = 30;
    this.height = 20;
    this.h_width = this.width / 2;
    this.h_height = this.height / 2;

    this.vertices = [
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: 0 },
    ];
}

Car.prototype.draw = function (ctx) {
    ctx.save();
    ctx.translate(this.cx, this.cy);
    ctx.rotate(this.angle);
    ctx.drawImage(this.img, -this.h_width, -this.h_height, this.width, this.height);
    ctx.restore();
}

Car.prototype.update = function () {
    let cos = Math.cos(this.angle);
    let sin = Math.sin(this.angle);
    if (this.speed) {
        this.cx += cos * this.speed;
        this.cy += sin * this.speed;

        if (this.cx < 0) this.cx = 0;
        else if (this.cx > this.mapWidth) this.cx = this.mapWidth;

        if (this.cy < 0) this.cy = 0;
        else if (this.cy > this.mapHeight) this.cy = this.mapHeight;
    }

    this.vertices = [
        {
            x: Math.floor(this.cx + cos * -this.h_width - sin * -this.h_height),
            y: Math.floor(this.cy + sin * -this.h_width + cos * -this.h_height)
        },
        {
            x: Math.floor(this.cx + cos * this.h_width - sin * -this.h_height),
            y: Math.floor(this.cy + sin * this.h_width + cos * -this.h_height)
        },
        {
            x: Math.floor(this.cx + cos * this.h_width - sin * this.h_height),
            y: Math.floor(this.cy + sin * this.h_width + cos * this.h_height)
        },
        {
            x: Math.floor(this.cx + cos * -this.h_width - sin * this.h_height),
            y: Math.floor(this.cy + sin * -this.h_width + cos * this.h_height)
        }
    ]
}

Car.prototype.handleInput = function (keyStates) {
    if (keyStates[KEYS.UP_ARROW]) {
        this.speed += this.acceleration;
        if (this.speed > this.maxSpeed) this.speed = this.maxSpeed;
    } else if (keyStates[KEYS.DOWN_ARROW]) {
        this.speed -= this.acceleration;
        if (this.speed < this.minSpeed) this.speed = this.minSpeed;
    }

    if (keyStates[KEYS.LEFT_ARROW])
        this.angle -= this.rotationAngle;
    if (keyStates[KEYS.RIGHT_ARROW])
        this.angle += this.rotationAngle;

    this.angle = this.angle % _360_RADIAN;
    this.speed *= (1 - this.friction);
    if (Math.abs(this.speed) < 0.1) this.speed = 0;
}