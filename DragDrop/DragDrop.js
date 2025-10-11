const list = document.getElementsByClassName("list");
const leftBox = document.getElementById("left");
const rightBox = document.getElementById("right");

for (item of list) {
  item.addEventListener("dragstart", function (event) {
    let selected = event.target;

    rightBox.addEventListener("dragover", function (event) {
      event.preventDefault();
    });

    rightBox.addEventListener("drop", function () {
      rightBox.appendChild(selected);
      selected = null;
    });

    leftBox.addEventListener("dragover", function (event) {
      event.preventDefault();
    });

    leftBox.addEventListener("drop", function () {
      leftBox.appendChild(selected);
      selected = null;
    });
  });
}
