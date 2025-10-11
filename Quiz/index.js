const intrebari = [
  {
    intrebare: "Care este cel mai mare ocean de pe Pământ?",
    variante: [
      "Oceanul Atlantic",
      "Oceanul Indian",
      "Oceanul Pacific",
      "Oceanul Arctic",
    ],
    corect: 2, // Oceanul Pacific
  },
  {
    intrebare: "Cine a pictat 'Mona Lisa'?",
    variante: [
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Michelangelo",
      "Vincent van Gogh",
    ],
    corect: 1, // Leonardo da Vinci
  },
  {
    intrebare: "În ce an a avut loc Revoluția Franceză?",
    variante: ["1492", "1789", "1914", "1848"],
    corect: 1, // 1789
  },
  {
    intrebare: "Care este capitala Australiei?",
    variante: ["Sydney", "Canberra", "Melbourne", "Perth"],
    corect: 1, // Canberra
  },
  {
    intrebare: "Cine a scris piesa 'Hamlet'?",
    variante: [
      "William Shakespeare",
      "Charles Dickens",
      "Johann Goethe",
      "Mark Twain",
    ],
    corect: 0, // William Shakespeare
  },
];

const containerIntrebari = document.getElementById("intrebari");
const btnVerifica = document.getElementById("btnVerifica");
const rezultat = document.getElementById("rezultat");

intrebari.forEach((intrebare, index) => {
  const divIntrebare = document.createElement("div");
  const enuntIntrebare = document.createElement("span");
  enuntIntrebare.textContent = intrebare.intrebare;
  divIntrebare.appendChild(enuntIntrebare);

  intrebare.variante.forEach((varianta, i) => {
    const input = document.createElement("input");
    const label = document.createElement("label");
    input.type = "radio";
    input.name = `intrebare${index}`;
    input.value = i;
    label.appendChild(input);
    label.appendChild(document.createTextNode(varianta));
    divIntrebare.appendChild(label);
  });

  containerIntrebari.appendChild(divIntrebare);
});

btnVerifica.addEventListener("click", () => {
  let scor = 0;

  intrebari.forEach((intrebare, index) => {
    const raspunsSelectat = document.querySelector(
      `input[name = "intrebare${index}"]:checked`
    );

    if (raspunsSelectat && Number(raspunsSelectat.value) === intrebare.corect) {
      scor++;
    }
  });

  rezultat.textContent = `Ai răspuns corect la ${scor} din ${intrebari.length} întrebări.`;
});
