// spread operator = ...allows an iterable such as an array or string to be expanded into sperate eleements (unpacks the elements).

// | Use case          | Name   | What it does           |
// | ----------------- | ------ | ---------------------- |
// | Expanding values  | Spread | Breaks items apart     |
// | Collecting values | Rest   | Gathers items together |

/* let numbers = [1, 2, 3, 4, 5];

let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum); */

/* let fruit = "petergill";
let name = [...fruit].join("-");

console.log(name); */

//============================

let fruit = ["apple", "mango", "peach"];
let vagetables = ["carrorts", "celery", "tomato"];

let foods = [...fruit, ...vagetables, "eggs", "milk"];

console.log(foods);

const user = { name: "Alex", age: 25 };
const updatedUser = { ...user, age: 26 };

console.log(updatedUser);
