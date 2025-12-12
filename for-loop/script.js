// for loop = repeat some coded a LIMITED amount of times.

// for (i = 0; i < 100; i++) {
//   if (i == 13) {
//     // break;
//     continue;
//   } else {
//     console.log(i);
//   }
// }

//1. Looping through an array of products

// const products = ["Laptop", "Phone", "Keyboard", "Mouse"];

// for (let i = 0; i < products.length; i++) {
//   console.log("Product:", products[i]);
// }

/* const places = ["Punjab", "Delhi", "Banglore", "Mumbai"];

for (let i = 0; i < places.length; i++) {
  console.log(`I love to live in:`, places[i]);
}
 */

//✅ 2. Updating DOM elements (real-time web example)
//Use case: Changing styles or content for a group of HTML elements.

/* const colorName = document.querySelectorAll(".menu-item");

for (let i = 0; i < colorName.length; i++) {
  colorName[i].style.color = "blue";
} */

// ✅ 3. Sum of all numbers in an array
/* 
const numbers = [10, 20, 30, 40];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log("Total: ", sum);  //result = 100 */

//✅ 4. Printing even numbers only

/* for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
} */

// ✅ 5. Create multiple HTML elements using a loop
/* for (let i = 1; i <= 5; i++) {
  const p = document.createElement("h1");
  p.textContent = "Paragraph " + i;
  p.style.color = "orange";
  document.body.appendChild(p);
}
 */

/* ✅ 5. Loop through an object’s keys
const student = {
  name: "Ali",
  age: 21,
  grade: "A",
};

const keys = Object.keys(student);

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i], ":", student[keys[i]]);
} */
