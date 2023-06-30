const KEY_NAMES = {
  UP: "ARROWUP",
  DOWN: "ARROWDOWN",
  RIGHT: "ARROWRIGHT",
  LEFT: "ARROWLEFT",
};

const canvas01 = document.createElement("canvas");
canvas01.style.backgroundColor = "white";
canvas01.style.borderRadius = "16px";
canvas01.setAttribute("width", "600px");
canvas01.setAttribute("height", "520px");

document.getElementById("canvas-container").appendChild(canvas01);

const circleData = {
  posX: canvas01.width / 2,
  posY: canvas01.height / 2,
  r: 24,
  dx: 0,
  dy: 0,
  speed: 1,
};

const ctxCan01 = canvas01.getContext("2d");

const clearCanvas = () => {
  ctxCan01.clearRect(0, 0, canvas01.width, canvas01.height);
};

class Circle {
  xCordinate;
  yCordinate;
  radius;
  #ctx;
  constructor(x, y, r, ctx) {
    this.xCordinate = x;
    this.yCordinate = y;
    this.radius = r;
    this.#ctx = ctx;
    this.#draw();
  }
  #draw() {
    this.#ctx.beginPath();
    this.#ctx.fillStyle = "rgb(120,120,220)";
    this.#ctx.arc(
      this.xCordinate,
      this.yCordinate,
      this.radius,
      Math.PI * 0,
      Math.PI * 2
    );
    this.#ctx.fill();
  }
  move(dx, dy) {
    clearCanvas();
    this.xCordinate += dx;
    this.yCordinate += dy;
    this.#draw();
  }
}

let animatioFram;

const circle = new Circle(
  circleData.posX,
  circleData.posY,
  circleData.r,
  ctxCan01
);

// circle.draw();

let dx = 0,
  dy = 0,
  collision = 0;
const moveCircle = (keyDownName) => {
  if (keyDownName === KEY_NAMES.RIGHT) {
    dx += circleData.speed;
  }
  if (keyDownName === KEY_NAMES.LEFT) {
    dx -= circleData.speed;
  }
  if (keyDownName === KEY_NAMES.UP) {
    dy -= circleData.speed;
  }
  if (keyDownName === KEY_NAMES.DOWN) {
    dy += circleData.speed;
  }
  if (
    circle.xCordinate + circle.radius >= canvas01.width ||
    circle.xCordinate - circle.radius <= 0
  ) {
    dx *= -1;
    collision++;
    updateCollosionCount(collision);
  }
  if (
    circle.yCordinate + circle.radius >= canvas01.height ||
    circle.yCordinate - circle.radius <= 0
  ) {
    dy *= -1;
    collision++;
    updateCollosionCount(collision);
  }
  if (keyDownName === " ") {
    dx = 0;
    dy = 0;
  }
  console.log(dx, dy, keyDownName);
  circle.move(dx, dy);
  keyDownName = null;
  animatioFram = requestAnimationFrame(() => moveCircle(keyDownName));
};

const handleKeyDown = (e) => {
  animatioFram && cancelAnimationFrame(animatioFram);
  const keyDownName = e.key.toUpperCase();
  moveCircle(keyDownName);
};

const updateCollosionCount = (count) => {
  document.getElementById("collision-count").innerText = `${count}`;
};

// const handleKeyUp = (e) => {
//   // console.log(e);
//   const keyUpName = e.key.toUpperCase();
//   if (
//     keyUpName === KEY_NAMES.DOWN ||
//     keyUpName === KEY_NAMES.DOWN ||
//     keyUpName === KEY_NAMES.DOWN ||
//     keyUpName === KEY_NAMES.DOWN
//   ) {
//   }
// };

window.addEventListener("keydown", handleKeyDown);
