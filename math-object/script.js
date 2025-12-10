//Math = built-in object that provides a collection of properties and methods...

// let x = 10.12;
// let y = 12;
// let z = 1;

// // z = Math.floor(y);
// // z = Math.round(x);
// // z = Math.max(x, y, z);
// z = Math.min(x, y, z);

// console.log(z);

let random = document.getElementById("randomnumber");
let btn = document.getElementById("btn");
let max = 6;
let min = 1;

let number;

btn.addEventListener("click", () => {
  number = Math.floor(Math.random() * max) + min;
  random.textContent = number;
});
