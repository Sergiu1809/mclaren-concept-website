const box = document.getElementById("box");
let topPos = 100;
let leftPos = 100;

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    if (topPos > 0) {
      topPos -= 3;
      box.style.top = topPos + "px";
    }
  }
  if (event.key === "ArrowDown") {
    if (topPos < window.innerHeight - box.clientHeight) {
      topPos += 3;
      box.style.top = topPos + "px";
    }
  }
  if (event.key === "ArrowLeft") {
    if (leftPos > 0) {
      leftPos -= 3;
      box.style.left = leftPos + "px";
    }
  }
  if (event.key === "ArrowRight") {
    if (leftPos < window.innerWidth - box.clientWidth) {
      leftPos += 3;
      box.style.left = leftPos + "px";
    }
  }
});
