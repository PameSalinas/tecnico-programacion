const EMAILJS_PUBLIC_KEY = "ofiYvHbvXfl8inOdA";
const EMAILJS_SERVICE_ID = "service_dkgp36j";
const EMAILJS_TEMPLATE_ID = "template_w74tvgq";

emailjs.init(EMAILJS_PUBLIC_KEY);

const sesionesComentarios = document.querySelectorAll(
  ".comentarios[data-publicacion-id]"
);

sesionesComentarios.forEach((sesion) => {
  const publicacionID = sesion.dataset.publicacionId;
  const formulario = sesion.querySelector(".formulario-comentario");
  const lista = sesion.querySelector(".lista-comentarios");
  const STORAGE_KEY = `comentarios_${publicacionID}`;

  const btnOcultar = sesion.querySelector("button");
  if (btnOcultar && lista) {
    btnOcultar.addEventListener("click", () => {
      lista.classList.toggle("lista-comentarios-oculto");
      btnOcultar.textContent = lista.classList.contains(
        "lista-comentarios-oculto"
      )
        ? "Mostrar"
        : "Ocultar";
    });
  }

  const cargarComentarios = () => {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  };

  const guardarComentarios = (comments) => {
    return localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
  };

  const mostrarComentarios = () => {
    const comentarios = cargarComentarios();

    lista.innerHTML = "";
    comentarios.forEach((comentario) => {
      const li = document.createElement("li");
      li.className = "item-comentarios";
      li.innerHTML = `
        <p class="text-comentario">${comentario.comentario}</p>
        <small class="meta-comentario">${comentario.nombre} • ${new Date(
        comentario.fecha
      ).toLocaleString()}</small>
    `;

      lista.appendChild(li);
    });
  };

  mostrarComentarios();

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const datosFormulario = new FormData(formulario);
    const nombre = datosFormulario.get("nombre").trim();
    const correo = datosFormulario.get("correo").trim();
    const comentario = datosFormulario.get("comentario").trim();

    if (!comentario) return;

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        post_id: publicacionID,
        from_name: nombre,
        from_email: correo,
        message: comentario,
      })
      .then(
        () => {
          const comentarios = cargarComentarios();
          comentarios.push({ nombre, correo, comentario, fecha: Date.now() });
          guardarComentarios(comentarios);
          mostrarComentarios();
          formulario.reset();

          agregarToast({
            tipo: "exito",
            titulo: "¡Comentario enviado!",
            descripcion: "Tu comentario fue enviado correctamente.",
            autoCierre: true,
          });
        },
        (err) => {
          console.error("Error al enviar el comentario:", err);
          agregarToast({
            tipo: "error",
            titulo: "Error al enviar comentario",
            descripcion:
              "Hubo un problema al enviar tu comentario. Por favor, intétalo de nuevo más tarde.",
            autoCierre: true,
          });
        }
      );
  });
});
