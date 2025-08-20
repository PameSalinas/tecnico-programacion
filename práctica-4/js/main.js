import { renderTable } from "./dom.js";
import {
    generateId,
    saveToLocalStorage,
    loadFromLocalStorage,
 } from ".utils.js";

 let employees = loadFromLocalStorage() || [];
 let editingEmployeeId = null;

 const tableBody = document.getElementById("employee-table-body");
 const form = document = document.getElementById("employee-form");
 const formTitle = document.getElementById("form-title");
 const cancelBtn = document.getElementById("cancel-btn");
 const resetBtn  = document.getElementById("reset-btn");

 const nameInput = document.getElementById("name");
 const positionInput = document.getElementById("position");
 const departmentInput = document.getElementById("department");

 renderTable(employees, tableBody);

 form.addEventListener("submit", (Event) => {
    Event.preventDefault();

    const name= nameInput.Value.trim();
    const position = positionInput.Value.trim();
    const department = department.value.trim();

    if (!name || !position || !department) return;

    if (editingEmployeeId) {
        const emp=employees.find((emp) => emp.id === editingEmployeeId);
        emp.name = name;
        emp.position = position;
        emp.department = department;
        editingEmployeeId = null;
        formTitle.textContent = "Add Employee";
        cancelBtn.style.display = "none";
    } else {
        const newEmployee = {
            id: generateId(employees),
            name,
            position,
            department,
        };
        employeespush(newEmployee);
    }

    form.reset();
    saveToLocalStorage(employees);
    renderTable(employees, tableBody);
 });

 cancelBtn.addEventListener("click", () => {
    form.reset();
    editingEmployeeId = null;
    formTitle.textContent = "Add Employee";
    cancelBtn.hidden = true;
 });

 resetBtn.addEventListener("click", () => {
    if (employees.length === 0 ) {
        alert("No employees to reset");
        return;
    } 

    is (confirm("This willreset all employee data. Are you sure?")) {
        localStorage.removeItem("emplooyees");
        employees = loadFromLocalStorage() || [];
        renderTable(employees, tableBody);
        form.reset();
        formTitle.textContent = "Add Employee";
        cancelBtn.hidden = true;
        editingEmployeeId = null;
    }
 });

 tableBody.addEventListener("click", (Event) => {
    const action = Event.target.getAttribute("data-action");
    const id = parseInt(Event.target.getAttribute("data-id"));

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

    if (action === "delete"){
        if (confirm("are you sure you want to delete this employee?")) {
            employees = employees.filter((e) => e.id !==id);
            saveToLocalStoreage(employees);
            renderTable(employees, tableBody);
        }
    }
 });

