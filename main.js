import "normalize.css";
import "./style.css";

const btnEl = document.querySelector(".btn");
const imageEl = document.querySelector(".image");
const canvasEl = document.querySelector("#canvas");
const ctx = canvasEl.getContext("2d");



const canvasDraw = [
  {
    name: "1",
    source: "www",
  },
  { name: "2", source: "http" },
];

btnEl.addEventListener("click", (e) => {
  
  if (e.target.innerText === "Open Canvas") {
    openCanvas();
  } else if (e.target.innerText === "Close Canvas") {
    closeCanvas();
  }
  changeButtonName(btnEl);
});

function closeCanvas() {
  if (canvasEl.getAttribute("data-open-close") != "1") return;
  canvasEl.setAttribute("data-open-close", "0");
  canvasEl.classList.add("visibility-hidden");
}

function openCanvas() {
  if (canvasEl.getAttribute("data-open-close") != "0") return;
  canvasEl.setAttribute("data-open-close", "1");
  canvasEl.classList.remove("visibility-hidden");

  //Resizing
  canvasEl.width = 500;
  canvasEl.height = 350;

  imageEl.classList.remove('visibility-hidden')
  // ctx.drawImage(imageEl, 0, 0, canvasEl.width, canvasEl.height);
  //variables
  let painting = false;

  function startPosition(e) {
    painting = true;
    
    draw(e);
  }

  function finishedPosition() {
    painting = false;
    ctx.beginPath();
  }

  function draw(e) {
    if (!painting) return;

    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.strokeStyle = "rgba(255,0,0,0.2)";
    

    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
  }

  //EventListeners
  canvasEl.addEventListener("pointerdown", startPosition);
  canvasEl.addEventListener("pointermove", draw);
  canvasEl.addEventListener("pointerup", finishedPosition);
}

function changeButtonName(btn) {
  if (btn.innerText === "Open Canvas") {
    btn.innerText = "Close Canvas";
  } else if (btn.innerText === "Close Canvas") {
    btn.innerText = "Open Canvas";
  }
}
