/*
 Bucles, Ciclos, Loops

 For loop
 for (let i = 0; i < 5; i = i + 2) {
   console.log(i)
   console.log("Hola");
 }

 While loop
 let counter = 5;
 while (counter > 0) {
   console.log(counter)
   console.log("Hola");
   counter = counter - 1;
 }

Do-While Loop
 let i = 0;
 do {
   console.log("Hola");
   i++;
} while(i < 7);
*/

const students = [
  { name: "Ana", note: 4.5 },
  { name: "Juan", note: 8 },
  { name: "Gabriela", note: 7 },
  { name: "Gerardo", note: 5.1 },
  { name: "Francisco", note: 6.0 },
  { name: "Jennifer", note: 4.5 },
  { name: "Yesenia", note: 9 },
  { name: "Fernando", note: 10 },
  { name: "Julieta", note: 3 },
  { name: "Maria", note: 8.5 },
];

const studentsAproovedList = document.querySelector("#students-approved-list");
const studentsDisapprovedList = document.querySelector(
  "#students-disapproved-list"
);

// for (let i = 0; i < students.length; i++) {
//   const studentCurrent = students[i];
//   const li = document.createElement("li");
//   li.textContent =
//     "Nombre: " + studentCurrent.name + ". Nota: " + studentCurrent.note;

//   if (studentCurrent.note >= 8) {
//     studentsAproovedList.append(li);
//   } else {
//     studentsDisapprovedList.append(li);
//   }
// }

// Arrow function
// const validateNote = (studentCurrent) => {
//   const li = document.createElement("li");
//   li.textContent =
//     "Nombre: " + studentCurrent.name + ". Nota: " + studentCurrent.note;

//   if (studentCurrent.note >= 8) {
//     studentsAproovedList.append(li);
//   } else {
//     studentsDisapprovedList.append(li);
//   }
// };

// Normal function
// function validateNote() {

// }

students.forEach((studentCurrent) => {
  const li = document.createElement("li");
  li.textContent =
    "Nombre: " + studentCurrent.name + ". Nota: " + studentCurrent.note;

  if (studentCurrent.note >= 8) {
    studentsAproovedList.append(li);
  } else {
    studentsDisapprovedList.append(li);
  }
});
