const botonTema = document.querySelector("#boton-tema");
const body = document.querySelector("body");

botonTema.addEventListener("click", () => {
    body.classList.toggle("tema-claro");
});

const habilidades = ["HTML", "CSS", "JavaScript", "Git y GitHub", "Atencion al cliente bilingue", "Resolucion de problemas"];

const listaHabilidades = document.querySelector("#lista-habilidades");

habilidades.forEach((habilidad) => {
    const li = document.createElement("li");
    li.textContent = habilidad;
    listaHabilidades.appendChild(li);
});

const formulario = document.querySelector("#formulario-contacto");
const mensajeError = document.querySelector("#mensaje-error");

formulariuo.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = document.querySelector("#nombre").value;
    const correo = document.querySelector("#correo").value;

    if (nombre === "" || correo === "") {
        mensajeError.textContent = "Por favor, completa todos los campos.";
        mensajeError.style.color = "red";

    } else {
        mensajeError.textContent = "Mensaje enviado correctamente.";
        mensajeError.style.color = "lightgreen";
        formulario.reset();
    }
});
