// destructing = extract values from arrays and objects,
//               then assign them to variables ina convenient way
//              [] = to perform array destructing
//              {} = to perform object destructing
//              5 examples

// --------------------- Example 1 ---------------------------
// SWAP THE VALUE OF TWO VARIABLES

/* let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b); */

// --------------------- Example 2 ---------------------------
// SWAP 2 ELEMENTS IN AN ARRAY

/* const color = ["black", "red", "green", "orange", "blue", "white"];

[color[0], color[5]] = [color[5], color[0]];
console.log(color);
 */

// --------------------- Example 3 ---------------------------
// Assign Array Elements to Variables

/* const color = ["black", "red", "green", "orange", "blue", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = color;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors); */

// --------------------- Example 4 ---------------------------

// Extract Values from Object

const person1 = {
  firstName: "Peter",
  lastName: "Gill",
  age: 30,
  job: "Web Developer",
};
const person2 = {
  firstName: "John",
  lastName: "Gill",
  age: 32,
  job: "Software Developer",
};

const { firstName, lastName, age, job } = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
