const boton = document.getElementById("boton");
const header = document.getElementById("header");

boton.addEventListener("click", () => {
    alert("¡Bienvenido al mundo del desarrollo web!");
    header.textContent = "¡Gracias por visitar mi primera página!";
});