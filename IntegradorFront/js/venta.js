const PRECIO = 200;
const DESCUENTOS = [0.8, 0.5, 0.15];
let color = document.getElementById("categoria");
color.addEventListener("change", (e) => {
  let value = e.target.value;
  document.getElementById("estudiante").classList.remove("border-warning");
  document.getElementById("estudiante").classList.add("border-primary");
  document.getElementById("trainee").classList.remove("border-warning");
  document.getElementById("trainee").classList.add("border-primary");
  document.getElementById("junior").classList.remove("border-warning");
  document.getElementById("junior").classList.add("border-primary");
  if (value === "1") {
    document.getElementById("estudiante").classList.remove("border-primary");
    document.getElementById("estudiante").classList.add("border-warning");
  } else if (value === "2") {
    document.getElementById("trainee").classList.remove("border-primary");
    document.getElementById("trainee").classList.add("border-warning");
  } else {
    document.getElementById("junior").classList.remove("border-primary");
    document.getElementById("junior").classList.add("border-warning");
  }
});

function resumen() {
  let categoria = document.getElementById("categoria").value;
  let cantidad = document.getElementById("cantidad").value;
  let desc = DESCUENTOS[categoria - 1];
  const totalPagar = document.getElementById("totalPagar");
  totalPagar.textContent = `Total a Pagar: $${PRECIO * desc * cantidad}`;
}
