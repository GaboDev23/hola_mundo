const boton = document.getElementById("boton");
const header = document.getElementById("header");
const contador = document.querySelector(".contador");
const mensaje = document.querySelector(".mensaje");

let contClicks = 0;

boton.addEventListener("click", () => {
    header.textContent = "¡Gracias por visitar mi primera página!";

    contClicks++;

    const texto = contClicks === 1 ? "vez" : "veces";

    contador.textContent = `${contClicks} ${texto}`;

    mensaje.textContent = "¡Gracias por visitar mi página!";

    if (contClicks === 1) {
        header.classList.add("active");
        mensaje.classList.add("visible");
    }
});