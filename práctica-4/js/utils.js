export const generateId = (employees) => {
  return employees.length ? Math.max(...employees.map((e) => e.id)) + 1 : 1;
};

export const saveToLocalStorage = (employees) => {
  localStorage.setItem("employees", JSON.stringify(employees));
};

export const loadFromLocalStorage = () => {
  const stored = localStorage.getItem("employees");
  return JSON.parse(stored);
};

export const validateDuplicateInfo = (currentEmployee, registeredEmployee) => {
  const {name: currentName, position: currentPosition, department: currentDepartment} = currentEmployee
  const {name: registeredName, position: registeredPosition, department: registeredDepartment} = registeredEmployee

  if (currentName === registeredName || currentPosition === registeredPosition || currentDepartment === registeredDepartment) {
    return false;
  }

  return true;
}