// Funciones en JavaScript
//Crear funcion
function pedirNombre() {
    console.log("Hola soy una funcion")
}
//Llamar funcion
pedirNombre()
//Funcion con argumento(el argumento puede definirse ahi no mas: edad=29)
function pedirEdadNombre(nombre,edad,verdad) {
    if (verdad) {
        console.log("Tu nombre es " + nombre)
        console.log("Tu edad es " + edad)
    } else console.log("No existe")
}
//Invocar la funcion con parametro
pedirEdadNombre("Cristian",28,true)

//Funciones que devuelven "algo"
function devuelve(){
    return 18
}
console.log(devuelve()) // la funcion devolverar 18