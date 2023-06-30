const canvasEle = document.createElement("canvas");
canvasEle.setAttribute("height", "480");
canvasEle.setAttribute("width", "480");
document.body.appendChild(canvasEle);

const canCo = canvasEle.getContext("2d");

canvasEle.style.backgroundColor = "white";
canvasEle.style.marginTop = "16px";
canvasEle.style.marginBottom = "16px";
canvasEle.style.borderRadius = "16px";

const canHeight = canvasEle.height;
const canWidth = canvasEle.width;
let animationFram;

const circleData = {
  x: canWidth / 6,
  y: canHeight / 4,
  radii: 12,
  dx: Math.round(-canWidth / 100),
  dy: Math.round(-canHeight / 100),
};

const drawCircle = () => {
  const { x, y, radii } = circleData;
  canCo.beginPath();
  canCo.arc(x, y, radii, Math.PI * 0, Math.PI * 2);
  canCo.fillStyle = "rgb(80, 80, 189)";
  canCo.fill();
};

const updateCan = () => {
  animationFram && cancelAnimationFrame(animationFram);
  canCo.clearRect(0, 0, canWidth, canHeight);
  drawCircle();

  circleData.x += circleData.dx;
  circleData.y += circleData.dy;
  if (circleData.x + circleData.radii + circleData.dx >= canWidth)
    circleData.dx *= -0.25;
  if (circleData.x - circleData.radii + circleData.dx < 0) circleData.dx *= -4;
  if (circleData.y + circleData.radii + circleData.dy > canHeight)
    circleData.dy *= -0.5;
  if (circleData.y - circleData.radii + circleData.dy < 0) circleData.dy *= -2;

  animationFram = requestAnimationFrame(updateCan);
};
drawCircle();

updateCan();

function createCan() {
  updateCan();
}
