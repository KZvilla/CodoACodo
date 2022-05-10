let num = Number(prompt("Ingrese un numero que desee una tabla del 0 al 10"));
for (let index = 0; index < 10; index++) {
  document.write(num + " x " + index + " = " + num * index);
  document.write("<br>");
  console.log(num*index)
}
