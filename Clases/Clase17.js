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

// Do.. while
var dowhile = 0;
var opcion = prompt("Ingrese una opcion");
do {
  console.log("Hola probando el Do...While " + (dowhile + 1));
  var notasAlumnos = Number(prompt("Ingrese una nota"));
  dowhile++;
} while (dowhile < 10);