let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

setInterval(() => {
  let currentTime = new Date();
  seconds.textContent =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
  minutes.textContent =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  hours.textContent =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
}, 1000);
