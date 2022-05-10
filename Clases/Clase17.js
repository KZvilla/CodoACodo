// Ciclos repetitivos exactos, for, for in for of.

// Ciclos repetitivos inexactos, while y do while.
let letra;
let intentos = 3;
let contador = 0;
const LETRAREAL = "a";
while (letra != LETRAREAL && contador < 3) {
  letra = prompt("Ingrese una letra a adivinar");
  console.log(intentos);
  intentos--;
  contador++;
}
if (intentos === 0 && letra != "a") {
  console.log("Perdiste");
  console.log("Intentos " + intentos);
} else {
  console.log("Ganaste");
  console.log("Intentos restantes " + intentos);
}
