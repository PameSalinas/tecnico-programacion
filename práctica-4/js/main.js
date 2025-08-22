import { renderTable } from "./dom.js";
import {
  generateId,
  saveToLocalStorage,
  loadFromLocalStorage,
  validateDuplicateInfo,
} from "./utils.js";

let employees = loadFromLocalStorage() || [];
let editingEmployeeId = null;

const tableBody = document.getElementById("employee-table-body");
const form = document.getElementById("employee-form");
const formTitle = document.getElementById("form-title");
const cancelBtn = document.getElementById("cancel-btn");
const resetBtn = document.getElementById("reset-btn");

const nameInput = document.getElementById("name");
const positionInput = document.getElementById("position");
const departmentInput = document.getElementById("department");

renderTable(employees, tableBody);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const position = positionInput.value.trim();
  const department = departmentInput.value.trim();

  if (!name || !position || !department) return;

  if (editingEmployeeId) {
    const emp = employees.find((emp) => emp.id === editingEmployeeId);
    const isValid = validateDuplicateInfo({ name, position, department }, emp);

    if (isValid) {
      emp.name = name;
      emp.position = position;
      emp.department = department;
      saveToLocalStorage(employees);
    } else {
      alert("This register already exists");
    }

    editingEmployeeId = null;
    formTitle.textContent = "Add Employee";
    cancelBtn.hidden = true;
  } else {
    const newEmployee = {
      id: generateId(employees),
      name,
      position,
      department,
    };
    employees.push(newEmployee);
    saveToLocalStorage(employees);
  }

  form.reset();
  renderTable(employees, tableBody);
});

cancelBtn.addEventListener("click", () => {
  form.reset();
  editingEmployeeId = null;
  formTitle.textContent = "Add Employee";
  cancelBtn.hidden = true;
});

resetBtn.addEventListener("click", () => {
  if (employees.length === 0) {
    alert("No employees to reset");
    return;
  }

  if (confirm("This will reset all employee data. Are you sure?")) {
    localStorage.removeItem("employees");
    employees = loadFromLocalStorage() || [];
    renderTable(employees, tableBody);
    form.reset();
    formTitle.textContent = "Add Employee";
    cancelBtn.hidden = true;
    editingEmployeeId = null;
  }
});

tableBody.addEventListener("click", (event) => {
  const action = event.target.getAttribute("data-action");
  const id = parseInt(event.target.getAttribute("data-id"));

  if (action === "edit") {
    const emp = employees.find((e) => e.id === id);
    nameInput.value = emp.name;
    positionInput.value = emp.position;
    departmentInput.value = emp.department;
    editingEmployeeId = id;
    formTitle.textContent = "Edit Employee";
    cancelBtn.hidden = false;
    return;
  }

  if (action === "delete") {
    if (confirm("are you sure you want to delete this employee?")) {
      employees = employees.filter((e) => e.id !== id);
      saveToLocalStorage(employees);
      renderTable(employees, tableBody);
    }
  }
});
