const btnArunca = document.getElementById("btnArunca");
const zar1 = document.getElementById("zar1");
const zar2 = document.getElementById("zar2");
const castigator = document.getElementById("castigator");
const imgZar1 = document.getElementById("imgZar1");
const imgZar2 = document.getElementById("imgZar2");

btnArunca.addEventListener("click", () => {
  let random1 = Math.floor(Math.random() * 6) + 1;
  imgZar1.src = `${random1}.png`;
  let random2 = Math.floor(Math.random() * 6) + 1;
  imgZar2.src = `${random2}.png`;

  if (random1 > random2) {
    castigator.textContent = "Jucatorul 1 a castigat!";
  } else if (random1 < random2) {
    castigator.textContent = "Jucatorul 2 a castigat!";
  } else {
    castigator.textContent = "Remiza!";
  }

  zar1.textContent = `Jucator 1: ${random1}`;
  zar2.textContent = `Jucator 2: ${random2}`;
});
