/*
let nume = ["Ana", "Ion", "Maria"];

nume.forEach((n) => {
  console.log(n.toUpperCase());
});


let numere = [1, 6, 4, 3, 5];

let suma = 0;

numere.forEach((numar) => {
  suma += numar;
});

console.log(suma);


const numere = [1, 2, 3, 4];

const numereDublate = numere.map((n) => {
  return n * 2;
});

console.log(numereDublate);



let nume = ["ana", "ion", "maria"];

let Nume = nume.map((n) => n[0].toUpperCase() + n.slice(1));

console.log(Nume);


const numere = [1, 5, 8, 11, 3];

const numereMari = numere.filter((n) => n > 5);

console.log(numereMari);

const fructe = ["mere", "banane", "kiwi", "pere"];

const cuvinteLungi = fructe.filter((f) => f.length > 4);

console.log(cuvinteLungi);



const numere = [2, 4, 6];

const suma = numere.reduce((acc, val) => acc + val, 0);
console.log(suma);

const nume = ["Ana", "Ion", "Maria"];

const string = nume.reduce((acc, val) => acc + "," + val);

console.log(string);

const produse = [
  { nume: "Lapte", pret: 5 },
  { nume: "Paine", pret: 3 },
  { nume: "Mere", pret: 4 },
];

const totalPreturi = produse.reduce((acc, produs) => acc + produs.pret, 0);

console.log(totalPreturi);


const numar = 5;

const estePar = (n) => n % 2 === 0;

console.log(estePar(numar));

const maiMariCa10 = (arr) => arr.filter((n) => n > 10).length;

console.log(maiMariCa10([5, 13, 115, 2]));



const note = [4, 7, 10, 3, 9];

const deTrecere = note.filter((n) => n > 5);

const mesaj = deTrecere.map((n) => `Ai luat nota ${n}`);

mesaj.forEach((m) => console.log(m));

const medieNoteTrecere =
  deTrecere.reduce((acc, nota) => acc + nota, 0) / deTrecere.length;

console.log(medieNoteTrecere);


const cos = [
  { produs: "Telefon", pret: 1200, cantitate: 1 },
  { produs: "Mouse", pret: 100, cantitate: 2 },
  { produs: "Casti", pret: 250, cantitate: 1 },
];

const subTotalProdus = cos.map((p) => ({
  produs: p.produs,
  subtotal: p.pret * p.cantitate,
}));

const totalCos = cos.reduce((acc, p) => acc + p.pret * p.cantitate, 0);
console.log(subTotalProdus);
console.log(totalCos);

const prodScumpe = cos.filter((n) => n.pret > 200);

console.log(prodScumpe);



const numere = [1, 2, 3, 4, 5];

const squareRoot = numere.map((n) => n * n);

console.log(squareRoot);

const cuvinte = ["pisica", "caine", "soarece"];

const length = cuvinte.map((n) => n.length);

console.log(length);


const numere = [3, 8, 15, 2, 7];

const bigNumbers = numere.filter((n) => n > 5);

console.log(bigNumbers);

const cuvinte = ["ana", "ion", "maria", "paul"];

const longWords = cuvinte.filter((n) => n.length > 3);

console.log(longWords);

const fructe = ["mere", "pere", "banane"];

fructe.forEach((f) => console.log(`Imi plac ${f}`));



const numere = [1, 2, 3];
let suma = 0;

numere.forEach((n) => (suma += n));

console.log(suma);



const numere = [5, 10, 15];

const suma = numere.reduce((acc, val) => val + acc, 0);

console.log(suma);


const numere = [2, 3, 4];

const produs = numere.reduce((acc, val) => acc * val, 1);

console.log(produs);


const numere = [1, 2, 3, 4, 5, 6];

const numerePare = numere.filter((n) => n % 2 === 0);

const parePatrat = numerePare.map((n) => n * n);

console.log(parePatrat);



const numere = [10, 25, 7, 30, 18];

const max = numere.reduce((acc, max) => (acc > max ? acc : max), 0);

console.log(max);


const animale = ["pisica", "caine", "vulpe"];

const obiect = animale.reduce((acc, animal) => {
  acc[animal] = animal.length;
  return acc;
}, {});



console.log(obiect);


const note = [4, 9, 7];

const mesaje = [];

note.forEach((n) => mesaje.push(`Ai luat ${n}`));

console.log(mesaje);



const produse = [
  { nume: "Paine", pret: 3 },
  { nume: "Lapte", pret: 5 },
  { nume: "Cascaval", pret: 12 },
  { nume: "Apa", pret: 2 },
];

const produseScumpe = produse
  .filter((p) => p.pret > 4)
  .reduce((acc, produs) => acc + produs.pret, 0);

console.log(produseScumpe);




const numere = [1, 2, 3, 4, 5, 6];

const propr = numere.filter((n) => n % 2 !== 0).map((n) => n * 2);

console.log(propr);



const cuvinte = ["soare", "luna", "stea", "nori"];

cuvinte.forEach((n) => console.log(`Cuvantul ${n} are ${n.length} litere`));


const note = [4, 7, 10, 5, 8];

const medie = note.reduce((n, val) => n + val, 0) / note.length;

console.log(medie);




const produse = [
  { nume: "Carne", pret: 20 },
  { nume: "Oua", pret: 12 },
  { nume: "Lapte", pret: 5 },
  { nume: "Paine", pret: 3 },
];

const produseIeftine = produse
  .filter((p) => p.pret < 15)
  .reduce((acc, p) => acc + p.pret, 0);

console.log(produseIeftine);


const nume = ["ana", "maria", "ion"];

const initialaMare = nume.map((n) => n.charAt(0).toUpperCase() + n.slice(1));

console.log(initialaMare);



const produse = [
  { nume: "Laptop", pret: 3000 },
  { nume: "Mouse", pret: 100 },
  { nume: "Tastatura", pret: 250 },
  { nume: "Monitor", pret: 1500 },
];

const suma = produse
  .filter((p) => p.pret > 500)
  .reduce((acc, p) => acc + p.pret, 0);

console.log(suma);



const fraze = ["salut lume", "javascript este tare", "exercitii practice"];

const literaMare = fraze.map(
  (fraza) => fraza[0].toUpperCase() + fraza.slice(1)
);

console.log(literaMare);


const note = [4, 7, 10, 5, 8, 9];

const max = note.reduce((acc, nota) => (nota > acc ? nota : acc), 0);

console.log(max);



const numere = [-3, 4, -1, 7, -5, 2];

const poz = numere.filter((n) => n > 0);
const neg = numere.filter((n) => n < 0);

console.log(poz);
console.log(neg);



const fructe = ["mar", "banana"];
const legume = ["morcov", "cartof"];

const mancare = [...fructe, ...legume];

console.log(mancare);



const culori = ["rosu", "albastru"];
culori.push("negru", "alb");
culori.unshift("turcoaz");
culori.pop();

console.log(culori);

*

const numere = [1, 2, 3];

const copie = [...numere];

copie.push(4, 5);

console.log(copie);



function suma(...numere) {
  return numere.reduce((acc, n) => acc + n, 0);
}

console.log(suma(1, 5, 32, 6));

const animale = ["caine", "pisica", "iepure"];

let plusAnimale = [];

plusAnimale = animale;

plusAnimale.push("papagal");
plusAnimale.unshift("cal");

console.log(plusAnimale);



const numere = [1, 4, 7, 10, 13, 16];

const patratePare = numere.filter((n) => n % 2 === 0).map((n) => n * n);

patratePare.push(5);

console.log(patratePare);



const produse = [
  { nume: "Telefon", pret: 2000 },
  { nume: "Husa", pret: 50 },
  { nume: "Tableta", pret: 1500 },
  { nume: "Incarcator", pret: 100 },
];

const pret = produse
  .filter((p) => p.pret > 100)
  .reduce((acc, p) => acc + p.pret, 0);

console.log(pret);

produse.push({ nume: "Calculator", pret: 1000 });

console.log(produse);




const culori = ["rosu", "verde", "albastru"];

culori.shift();
culori.unshift("galben");
const culoriMari = culori.map((c) => c.toUpperCase());

console.log(culoriMari);



const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];

const lista3 = [...lista1, ...lista2];
lista3.pop();

const sumaLista = lista3.reduce((acc, val) => acc + val, 0);

console.log(lista3);
console.log(sumaLista);



for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


let i = 0;
let S = 0;
while (i <= 10) {
  S += i;
  i++;
}

console.log(S);


const numere = [10, 45, 2, 89, 33, 5];
let max = 0;

for (i = 0; i <= numere.length; i++) {
  if (numere[i] > max) {
    max = numere[i];
  }
}

console.log(max);



const cuvant = "caine";
const vocale = ["a", "e", "i", "o", "u"];
let nrVocale = 0;

for (i = 0; i < cuvant.length; i++) {
  for (j = 0; j < vocale.length; j++) {
    if (cuvant[i] === vocale[j]) {
      nrVocale++;
    }
  }
}

console.log(nrVocale);



const secret = 7;
const incercari = [3, 5, 7, 9];
let i = 0;

let guesses = 0;

while (incercari[i] !== secret) {
  console.log(`Încercarea ${incercari[i]} nu e corectă.`);
  i++;
}

console.log(`Ai ghicit! Numărul era ${secret}.`);


const text = document.getElementById("text");

function changeText() {
  text.textContent = "yey";
}


let body = document.getElementById("body");

function changeColor() {
  body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
}



let counter = document.getElementById("counter");
let counterr = 0;

function Increment() {
  counterr++;
  counter.textContent = counterr;
}

function Decrement() {
  counterr--;
  counter.textContent = counterr;
}



const text = document.getElementById("text");

function show() {
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}



const image = document.getElementById("image");

function change() {
  if (image.src.includes("P1.jpg")) {
    image.src = "P2.jpg";
  } else {
    image.src = "P1.jpg";
  }
}


const text = document.getElementById("text");

function ZoomIn() {
  let currentSize = parseInt(window.getComputedStyle(text).fontSize);
  text.style.fontSize = currentSize + 2 + "px";
}

function ZoomOut() {
  let currentSize = parseInt(window.getComputedStyle(text).fontSize);
  text.style.fontSize = currentSize - 2 + "px";
}



const counter = document.getElementById("counter");
let savedValue = localStorage.getItem("clickCount");
if (savedValue) {
  counter.textContent = savedValue;
} else {
  counter.textContent = 0;
}

function Increment() {
  let value = Number(counter.textContent);
  value++;
  counter.textContent = value;

  localStorage.setItem("clickCount", value);
}

function Reset() {
  counter.textContent = 0;
  localStorage.setItem("clickCount", 0);
}


const text = document.getElementById("text");
function Afiseaza() {
  if (text.style.visibility === "hidden") {
    text.style.visibility = "visible";
  } else {
    text.style.visibility = "hidden";
  }
}



const varsta = document.getElementById("varsta");
const currentYear = new Date().getFullYear();

function Calculeaza() {
  const an = document.getElementById("an").value;
  if (an > currentYear) {
    varsta.textContent = "Anul nu poate fi mai mare decat cel curent";
  } else if (isNaN(an)) {
    varsta.textContent = `${an} nu este un an! `;
  } else {
    varsta.textContent = currentYear - an;
  }
}



const input = document.getElementById("nume");
const preview = document.getElementById("preview");

input.addEventListener("input", () => {
  preview.textContent = input.value;
});


Creează un buton și un paragraf.

La click, afișează în paragraf coordonatele click-ului (X și Y) 
folosind event.



const input = document.getElementById("input");

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    console.log("Ai apasat enter");
  }
});



const numeProdus = document.getElementById("numeProdus");
const pretProdus = document.getElementById("pretProdus");
const btnAdauga = document.getElementById("btnAdauga");
const btnCurata = document.getElementById("btnCurata");
const lista = document.getElementById("lista");
const statistici = document.getElementById("statistici");

let produse = [];

btnAdauga.addEventListener("click", () => {
  const produs = { nume: numeProdus.value, pret: Number(pretProdus.value) };
  produse.push(produs);
  lista.textContent = "";

  produse.forEach((p) => {
    const li = document.createElement("li");
    li.textContent = `Nume produs: ${p.nume} - Pret produs: ${p.pret} lei`;
    lista.appendChild(li);
  });

  const totalProduse = produse.length;
  const totalPret = produse.reduce((acc, val) => acc + val.pret, 0);
  const mediePret = (totalPret / totalProduse).toFixed(2);

  statistici.textContent = `Nr. produse: ${totalProduse} Pret total: ${totalPret} Medie pret: ${mediePret} `;
});

btnCurata.addEventListener("click", () => {
  produse = [];
  lista.textContent = "";
  statistici.textContent = `Nr. produse: 0 Pret total: 0 Medie pret: 0 `;
});

*/

const sarcina = document.getElementById("sarcina");
const prioritate = document.getElementById("prioritate");
const btnAdauga = document.getElementById("btnAdauga");
const lista = document.getElementById("lista");
const statistici = document.getElementById("statistici");

let sarcini = [];

btnAdauga.addEventListener("click", () => {
  if (sarcina.value.trim() === "") return;

  const task = { text: sarcina.value, prioritate: prioritate.value };
  sarcini.push(task);

  sarcina.value = "";
  afiseazaLista();
});

function afiseazaLista() {
  lista.textContent = "";

  sarcini.forEach((task, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = `${task.text} (${task.prioritate})`;
    span.classList.add(task.prioritate);

    const btnSterge = document.createElement("button");
    btnSterge.textContent = "Sterge";
    btnSterge.addEventListener("click", () => {
      sarcini.splice(index, 1);
      afiseazaLista();
    });

    li.appendChild(span);
    li.appendChild(btnSterge);
    lista.appendChild(li);
  });

  const total = sarcini.length;
  const prioritatiMari = sarcini.filter((s) => s.prioritate === "Mare").length;
  statistici.textContent = `Total sarcini: ${total} Prioritate mare: ${prioritatiMari}`;
}
