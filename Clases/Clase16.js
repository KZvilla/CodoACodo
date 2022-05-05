// Condicional Switch-Ej Cajero
var sueldo = 85000;
var opcion = prompt(
  "Ingrese la operacion actual: 1-Extraer 2-Depositar 3-Transferir 4-Consultar"
);

switch (opcion) {
  case "1":
    console.log("Extraer dinero");
    var extraer = prompt("Cuanto dinero quiere extraer");
    sueldo = sueldo - extraer;
    console.log("Sueldo final es: " + sueldo);
    break;
  case "2":
    console.log("Depositar");
    var deposito = prompt("Cuanto dinero quiere extraer");
    sueldo = sueldo + deposito;
    console.log("Sueldo final es: " + sueldo);
    break;
  case "3":
    console.log("Transferir");
    var enviar = Number(prompt("Diga un monto a transferir"));
    sueldo = sueldo - enviar;
    var destino = prompt(
      "Elegir el destino Agendados: 1-Ignacio 2-Emanuel 3-Hector"
    );
    if (destino == "1") {
      var sueldoIgnacio = sueldoIgnacio + enviar;
      console.log(
        "Gracias por el envio.. sueldo de Ignacio es: " + sueldoIgnacio
      );
      console.log("Sueldo final es: " + sueldo);
    }

    break;
  case "4":
    console.log("Consultar");
    console.log("Sueldo actual es: " + sueldo);
    alert("Su sueldo es de: " + sueldo);
    break;
  default:
    console.log("Gracias...");
    break;
}

//Operadores logicos

/*
Operador AND(Y)
AND-Y-&& 
true ---- true = True
false ---- false = false
true ---- false = false
false ---- true = false
*/

/*
Operador OR(O)
||-O
true ---- true = True
true ---- false = true
false ---- true = true
false ---- false = false
*/
