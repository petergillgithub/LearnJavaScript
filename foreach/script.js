// forEach() =  method used to iterate over the elements
//              of an array and apply a specified function (callback) to each ellement.

//!              array.forEach(callback)
//!               element,index,array are provided
/* 
      Basic Syntax

      array.forEach(function(item) {
    // Do something with each item
});

*/

//  Example 1: Print Each Item

/* let fruits = ["Apple", "Banana", "Orange"];

fruits.forEach((fruit) => {
  console.log(fruit);
}); */

//Example 2: With Index (Position)

/* let colors = ["Red", "Green", "Blue"];

colors.forEach(function (color, index) {
  console.log(index + " : " + color);
}); */

// 👉 forEach() takes each fruit one by one and prints it.

/* let fruits = ["apple", "banana", "orange"];

fruits.forEach((fruit) => {
  console.log(fruit);
}); */

//
/* let colors = ["Red", "pink", "yellow"];

colors.forEach((color, index) => {
  console.log(index + " : " + color);
}); */

/* let numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
  console.log(num * 2);
});
//2 ,4 ,6 ,8 */

// let fruits = ["apple", "mango", "orange"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits.indexOf);
// }

// ************************************************************

/* let numbers = [1, 2, 3, 4, 5];

numbers.forEach(triple);
numbers.forEach(double);
numbers.forEach(display);

function triple(element, index, array) {
  array[index] = element * 3;
}

function double(element, index, array) {
  array[index] = element * 2;
}

function display(element) {
  console.log(element);
} */

let fruits = ["apple", "orange", "banana", "lemon"];

// fruits.forEach(capitalize);

fruits.forEach(capitalize);
fruits.forEach(display);

function upperCaseelement(element, index, array) {
  array[index] = element.toUpperCase();
}

function capitalize(element, index, array) {
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element) {
  console.log(element);
}
