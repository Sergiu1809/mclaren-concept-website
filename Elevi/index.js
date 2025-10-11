const nume = document.getElementById("nume");
const nota = document.getElementById("nota");
const btnAdauga = document.getElementById("btnAdauga");
const lista = document.getElementById("lista");
const statistici = document.getElementById("statistici");

let elevi = [];

btnAdauga.addEventListener("click", () => {
  lista.textContent = "";
  const elev = { nume: nume.value, nota: Number(nota.value) };
  elevi.push(elev);

  elevi.forEach((elev) => {
    const li = document.createElement("li");
    li.textContent = `Nume: ${elev.nume}  Nota: ${elev.nota}`;
    lista.appendChild(li);
  });

  const sumaNote = elevi.reduce((acc, val) => acc + val.nota, 0);
  const medieNote = sumaNote / elevi.length;
  /*
  let max = -Infinity;
  for (const elev of elevi) {
    if (elev.nota > max) {
      max = elev.nota;
    }
  }
  */
  const max = elevi.reduce((max, elev) => {
    return elev.nota > max ? elev.nota : max;
  }, 0);

  statistici.textContent = `${medieNote} , ${max}`;
});
