let displayTime = document.getElementById("displayTime");
let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;

function stopWatch() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }

  let s = (seconds < 10 ? "0" : "") + seconds;
  let m = (minutes < 10 ? "0" : "") + minutes;
  let h = (hours < 10 ? "0" : "") + hours;

  displayTime.textContent = h + ":" + m + ":" + s;
}

function startWatch() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
}

function pauseWatch() {
  clearInterval(timer);
}

function resetWatch() {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  displayTime.textContent = "00:00:00";
}
