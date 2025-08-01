const form = document.getElementById("formPersona");
const tabla = document.getElementById("tablaPersonas");
const tbody = tabla.querySelector("tbody");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const edad = document.getElementById("edad").value.trim();
  const correo = document.getElementById("correo").value.trim();

  if (!nombre || !edad || !correo) {
    alert("Todos los campos son obligatorios .");
    return;
  }

  const fila = document.createElement("tr");
  fila.innerHTML = `
        <td>${nombre}</td>
        <td>${edad}</td>
        <td>${correo}</td>
        <td><button class="eliminar">Eliminar</button></td>
     `;
  tbody.appendChild(fila);
  tabla.style.display = "table";

  form.reset();
});

tbody.addEventListener("click", function (e) {
  if (e.target.classList.contains("eliminar")) {
    const fila = e.target.closest("tr");
    fila.remove();
    if (tbody.children.length === 0) {
      tabla.style.display = "none";
    }
  }
});
