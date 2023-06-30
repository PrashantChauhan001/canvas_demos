let canvas, ctx, flowField, flowFieldAnimation;
const mouse = {
  x: 0,
  y: 0,
};

window.onload = function () {
  canvas = document.getElementById("canvas1");
  ctx = canvas.getContext("2d");
  canvas.setAttribute("width", window.innerWidth);
  canvas.setAttribute("height", window.innerHeight);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
  flowField.animate(0);
};

class FlowFieldEffect {
  #ctx;
  #width;
  #height;
  constructor(ctx, width, height) {
    this.#ctx = ctx;
    this.#height = height;
    this.#width = width;
    this.lastTime = 0;
    this.interval = 1000 / 60;
    this.timer = 0;
    this.gridSize = 15;
    this.gradient;
    this.#createGradient();
    this.#ctx.strokeStyle = this.gradient;
    this.#ctx.lineWidth = 2.5;
  }
  #drawLine(x, y) {
    this.#ctx.beginPath();
    this.#ctx.moveTo(x, y);
    this.#ctx.lineTo(x + 2.5, y + 2.5);
    this.#ctx.stroke();
  }
  #createGradient() {
    this.gradient = this.#ctx.createLinearGradient(
      0,
      0,
      this.#width,
      this.#height
    );
    this.gradient.addColorStop("0.1", "#ff5c33");
    this.gradient.addColorStop("0.2", "#ff66b4");
    this.gradient.addColorStop("0.4", "#ccccff");
    this.gradient.addColorStop("0.6", "#b3ffff");
    this.gradient.addColorStop("0.8", "#80ff80");
    this.gradient.addColorStop("0.9", "#ffff33");
  }
  animate(timeStamp) {
    const deltaTime = timeStamp - this.lastTime;
    this.lastTime = timeStamp;
    if (this.timer > this.interval) {
      this.#ctx.clearRect(0, 0, this.#width, this.#height);
      for (let y = 0; y < this.#height; y += this.gridSize) {
        for (let x = 0; x < this.#width; x += this.gridSize) {
          this.#drawLine(x, y);
        }
      }
      this.timer = 0;
    } else {
      this.timer += deltaTime;
    }
    requestAnimationFrame(this.animate.bind(this));
    // console.log(deltaTime);
  }
}

window.addEventListener("resize", () => {
  cancelAnimationFrame(flowFieldAnimation);
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
  flowFieldAnimation = flowField.animate(0);
});

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});
