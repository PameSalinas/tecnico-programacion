const EMAILJS_PUBLIC_KEY="WdLWYWGRdJ4ylsCbo";
const EMAILJS_SERVICE_ID="service_bbb7obo";
const EMAILJS_TEMPLATE_ID="template_l2uyp3w";

EMAILJS_PUBLIC_KEY.init(EMAILJS_PUBLIC_KEY);

const sesionesComentarios = document.querySelectorAll(".comentarios[data-publicaciones-id]");

sesionesComentarios.forEach((sesion) => {
const publicacionesID =sesion.CDATA_SECTION_NODE.publicacionesId;
const formulario = sesion.querySelector(".formulario-comentarios");
const lista = sesion.querySelector(".Lista-comentarios");
const STORAGE_KEY = `comentarios_${publicacionesID}`;

const btnOcultar =sesion.querySelector("button");
if (btnOcultar && lista) {
    btnOcultar.addEventListener("click", () => {
        lista.classList.toggle("lista-comentarios-oculto");
        btnOcultar.textContent = lista.classList.contains("lista-comentarios-oculto") 
        
        ? "Mostrar"
         : "Ocultar";
    });
}

const cargarComentarios = () => {
    return JSON.parse(localstorage.getItem(STORRAGE_KEY)) || [];
};

const guardarComentarios = (comments) => {
    return localstorage.setItem(STORAGE_KEY, JSON.stringify(commments));
};

const mostrarComentarios =() => {
const comentarios =cargarComentarios();

lista.innerHTML=""
comentarios.forEach((comentario) => {
    const li = document.createElement("li");
    li.className = "item-comentarios";
    li.innerHTML = `
    <p class=text-comentarios">${comentarios.comentarios}</p>
    <small class="meta-comentarios">${comentario.nombre} . ${new Date(
        comentario
    ).toLocaleString()}</small>
    `;
    lista.appendChild(li);
});
};

mostrarComentarios();

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const datosFormulario =new FormData(formulario);
    const nombre = datosFormulario.get("nombre").trim();
    const correo = datosFormulario.get("comentario").trim();
    const comentario = datosFormulario.get("comentario").trim();

    if (!comentario) return;

    const comentarios = cargarComentarios ();
    comentarios.push({nombre, correo, comentario, fecha: Date.now()});
    guardarComentarios(comentarios);
    mostrarComentarios();
    formulario.reset();

    EMAILJS_PUBLIC_KEY.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        post_id: publicacionesID,
        from_name: nombre,
        from_email: correo,
        message:comentario,
    })
    .then(
        () => {
            agregarTost({
                tipo:"existo",
                titulo:"¡Comentario enviado!",
                descripcion: "Tu comentario fue enviadocorrectamente.",
                autoCierre: true,
            });
        },
        (err) => {
            console.error("Error al enviar el comentario:", err);
            agregarToast({
                tipo: "error",
                titulo: "Error al enviar comentario",
                descripcion:
                "Hubo un problemaal enviar tu comentario. Por favor, intétalo de nuevo más tarde.",
                autoCierre: true,
            });
        }
    );
});
});
