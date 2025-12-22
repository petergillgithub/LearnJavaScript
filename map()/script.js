// .map() = accepts a callback and applies that function
//          to each element of an array, then return a new array

/* const numbers = [1, 2, 3, 4, 5];

const squarnumber = numbers.map(square);
console.log(squarnumber);

function square(element) {
  return Math.pow(element, 3);
} */

// **********************************************************

/* const students = ["Peter", "John", "Alice"];

const studentsUpper = students.map(lowerCase);

console.log(studentsUpper);

function capitalized(element) {
  return element.charAt(0) + element.slice(1);
}

function upperCase(element) {
  return element.toUpperCase();
}

function lowerCase(element) {
  return element.toLowerCase();
} */

const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];

const formatedDates = dates.map(formatDates);

console.log(formatedDates);

function formatDates(element) {
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
