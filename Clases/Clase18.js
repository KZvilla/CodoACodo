// Ciclos repetitivos exactos, for, for in for of.

for (let i = 1 /*Desde*/; i <= 10 /*Hasta*/; i++ /*Incremente de i en i*/) {
  if (i % 2 == 0) {
    console.log("Este indice es par " + i);
  }
  console.log("Probando ciclo for i: " + i);
}
////////////////////////////////////////////
console.log("------------------------------------");
const COMIDAS = [
  "Pizza",
  "Milanesa",
  "Pebete",
  "Empanada",
  "Pastel",
  "Caracol",
  "Alfajor",
];
const PRECIOS = [750, 50, 180, 698, 56, 98, 45];
var totalPrecios = 0;
////////////////////////////////////////////
for (let i = 0; i < COMIDAS.length; i++) {
  totalPrecios = totalPrecios + PRECIOS[i]; // ESto es un acumulador.
  console.log("Comida: " + COMIDAS[i] + " el precio es: $" + PRECIOS[i]);
}
console.log("El precio total es: $" + totalPrecios);
console.log("------------------------------------");

for (const comida of COMIDAS) {
  console.log(comida);
}
// Tarea: Ciclo for que imprima una tabla de multiplicar.
// 1-Elija un numro y presentar la tabla de multiplicar del 0 al 10.
