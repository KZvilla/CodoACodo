// Una serie de eventos para llegar un evento, es lo que denominamos un Algoritmo
//Lenguaje interpretado y de tipado debil/dinamico.
// Los datos se pueden ser del tipo literarl o estar dentro de una variable
//Tipos: String, number , boolean.
//Para asignar variables
var nombre = "Luciano";
var Apellido = "Loker";
var nombre2 = "Lucas";
var edad;
edad = 25;
console.log(nombre + " " + Apellido);
//ej: Calcule el prom del alumno
let nota1 = 7;
let nota2 = 7;
let nota3 = 6;
let prom = Math.round((nota1 + nota2 + nota3)/3)
console.log("El promedio es: " + prom);
//Tarea: Algoritmo que calcule perimetro de un cuadrado, rectangulo y la superficie de un cuadrado.
//Tarea 1
let lado = 5;
let perimetro = lado * 4
console.log("el perimetro de un cuadrado es: " + perimetro + "cm.")
//Tarea 2
let ancho = 5;
let alto = 2.5;
let perimetro2 = ancho*2 + alto*2;
console.log("El perimetro de un rectangulo es: " + perimetro2 + "cm.")
//Tarea 3 
let lado1= 5;
let perimetro3=lado1*lado1
console.log("La superficie de un cuadrado es: " + perimetro3 + "cm.")