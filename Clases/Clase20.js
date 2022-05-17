//Mas sobre funciones
function pedirEdad(edad) {
  console.log("Tu edad es: " + edad);
}

function funcionC() {
  return false;
}
function sumarNumeros(n1, n2, callback) {
  let total = n1 + n2;
  if (callback()) {
    return "Esto es true: " + total;
  } else {
    return "Esto es False: " + total;
  }
}

function nombreAlumno() {
  let inputNombre = prompt("Ingrese su nombre");
  console.log("Su nombre es: " + inputNombre);
}
function edadAlumno() {
  let edad = parseInt(prompt("Ingrese su edad"));
  return edad > 18;
}
function pedirDni() {
  alert("Mi DNI es 12345678");
}
 //usando el metodo getElementBy.. podemos capturar clases y id.
console.log(document.getElementById("titulo")); // Devuelve un elemento unico(captura)
console.log(document.getElementsByClassName("subtitulo")); // Devuelve un objeto con las clases capturadas
