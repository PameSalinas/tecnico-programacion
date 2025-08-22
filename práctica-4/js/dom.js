export const renderTable = (employees, tableBody) => {
  tableBody.innerHTML = "";

  if (employees.length !== 0) {
    employees.forEach((emp) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.position}</td>
        <td>${emp.department}</td>
        <td>
        <button data-action="edit" data-id="${emp.id}">Edit</button>
        <button class="danger" data-action="delete" data-id="${emp.id}">Delete</button>
        </td>
      `;
      row.style.animation = "fadeIn 0.5s ease";
      tableBody.appendChild(row);
    });
  }
};
