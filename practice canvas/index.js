(function () {
  const canvas01 = document.createElement("canvas");
  document.body.appendChild(canvas01);

  canvas01.style.backgroundColor = "#fff";
  canvas01.style.borderRadius = "18px";

  canvas01.setAttribute("height", "480");
  canvas01.setAttribute("width", "480");

  const cvsCo = canvas01.getContext("2d");

  function createCan() {
    // fillRect()

    cvsCo.fillStyle = "green";
    cvsCo.fillRect(30, 30, 120, 120);

    cvsCo.fillStyle = "blue";
    cvsCo.fillRect(180, 30, 120, 120);

    cvsCo.fillStyle = "orange";
    cvsCo.fillRect(330, 30, 120, 120);

    // strokeRect()
    cvsCo.strokeStyle = "orange";
    cvsCo.lineWidth = 4;
    cvsCo.strokeRect(30, 30, 120, 120);

    cvsCo.strokeStyle = "green";
    cvsCo.strokeRect(180, 30, 120, 120);

    cvsCo.strokeStyle = "blue";
    cvsCo.strokeRect(330, 30, 120, 120);

    // clearRect() to clear out some part as rectangle cordinate

    cvsCo.clearRect(40, 40, 100, 100);
    cvsCo.clearRect(190, 40, 100, 100);
    cvsCo.clearRect(340, 40, 100, 100);

    // fillText() && strokeText()
    cvsCo.font = "30px Serif";
    cvsCo.fillStyle = "blue";
    cvsCo.fillText("Hellow", 45, 100);

    cvsCo.font = "30px Serif";
    cvsCo.fillStyle = "orange";
    cvsCo.fillText("Hellow", 195, 100);

    cvsCo.font = "30px Serif";
    cvsCo.strokeStyle = "green";
    cvsCo.lineWidth = 1;
    cvsCo.strokeText("Hellow", 345, 100);

    // paths

    cvsCo.beginPath();
    cvsCo.moveTo(30, 180);
    cvsCo.lineTo(150, 180);
    cvsCo.lineTo(90, 300);
    cvsCo.closePath();
    // cvsCo.lineTo(30, 180);
    // cvsCo.stroke();
    cvsCo.fillStyle = "purple";
    cvsCo.fill();

    // triangle
    cvsCo.beginPath();
    cvsCo.moveTo(120, 300);
    cvsCo.lineTo(240, 300);
    cvsCo.lineTo(180, 180);
    cvsCo.lineTo(120, 300);
    cvsCo.fillStyle = "red";
    cvsCo.fill();

    // rect()
    cvsCo.beginPath();
    // cvsCo.moveTo(240, 180)
    cvsCo.rect(270, 180, 60, 120);
    cvsCo.fillStyle = "green";
    cvsCo.fill();

    // arc()

    cvsCo.beginPath();
    cvsCo.lineWidth = 2;
    cvsCo.strokeStyle = "red";
    cvsCo.arc(400, 240, 52, Math.PI * 0, Math.PI * 2);
    cvsCo.stroke();

    cvsCo.beginPath();
    cvsCo.arc(400, 240, 32, Math.PI * 0.18, Math.PI * 0.82, false);
    cvsCo.stroke();

    cvsCo.beginPath();
    cvsCo.arc(380, 220, 8, Math.PI * 0, Math.PI, false);
    cvsCo.stroke();

    cvsCo.beginPath();
    cvsCo.arc(420, 220, 8, Math.PI * 0, Math.PI, false);
    cvsCo.stroke();

    // new happy

    cvsCo.strokeStyle = "blue";
    cvsCo.beginPath();
    cvsCo.arc(400, 390, 52, Math.PI * 0, Math.PI * 2);
    cvsCo.stroke();

    cvsCo.beginPath();
    cvsCo.arc(400, 390, 32, Math.PI * 0.18, Math.PI * 0.82, false);
    cvsCo.stroke();

    cvsCo.beginPath();
    cvsCo.arc(380, 370, 8, Math.PI * 0.1, Math.PI * 0.9, false);
    cvsCo.stroke();

    cvsCo.beginPath();
    cvsCo.arc(420, 370, 8, Math.PI * 0.1, Math.PI * 0.9, false);
    cvsCo.stroke();

    // bezier curv

    cvsCo.beginPath;
    cvsCo.strokeStyle = "green";
    cvsCo.moveTo(150, 360);
    cvsCo.quadraticCurveTo(30, 360, 30, 450);
    cvsCo.font = "15px Arial";
    cvsCo.fillText("Quadratic Curve", 60, 420);
    cvsCo.quadraticCurveTo(30 + 200, 360 + 120, 150, 360);
    // cvsCo.closePath();
    cvsCo.stroke();

    cvsCo.beginPath;
    cvsCo.strokeStyle = "green";
    cvsCo.moveTo(300, 360);
    cvsCo.bezierCurveTo(200, 380, 200, 400, 180, 450);
    // cvsCo.font = "15px Arial";
    // cvsCo.fillText("Quadratic Curve", 60, 420);
    // cvsCo.quadraticCurveTo(30 + 200, 360 + 120, 150, 360);
    cvsCo.closePath();
    cvsCo.moveTo(180, 370);
    cvsCo.moveTo(180, 370);
    cvsCo.lineTo(300, 460);
    cvsCo.stroke();
  }

  function clearCan() {
    cvsCo.clearRect(0, 0, canvas01.width, canvas01.height);
  }

  document.getElementById("btn-001").addEventListener("click", clearCan);
  document.getElementById("btn-002").addEventListener("click", createCan);
})();
