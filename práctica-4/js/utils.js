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
