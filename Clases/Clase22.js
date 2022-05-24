function additem() {
  let value = document.getElementById("inputUnico").value;
  for (i = 0; i < value; i++) {
    let item = document.createElement("li"); //Creamos un item li
    item.classList.add("list-group-item"); //Le agregamos la clase
    item.appendChild(document.createTextNode("Item ")); //Le asignamos un texto de valor
    document.querySelector("ul").appendChild(item); //finalmente lo agregamos como hijo de ul
    colored(); //Llamamos nuestra funcion para colorear
  }
}

var items = document.getElementsByClassName("list-group-item");
for (let item of items) {
  item.textContent = "Hola";
  console.log(item);
}

const COLORS = ["orange", "blue", "pink", "green"];
let i = 0;
for (let color of COLORS) {
  //Tambien podemos controlar el estilo de los items captados.
  items[i].style.color = color;
  i++;
}
function colored() {
  for (let j = 0; j < items.length; j++) {
    if (j % 2 === 0) {
      items[j].style.backgroundColor = "red"; // la propiedad background-color se llama de manera backgroundColor, no dejamos espacios y usamos camelCase
    }
  }
}
