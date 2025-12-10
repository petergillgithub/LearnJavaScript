// ternary operator = a shortcut to if{} and else{} statments helps to assign a variable based on a condition
//                    condition? codeIfTrue : codeIfFalse

// let age = 1;

// let message = age >= 18 ? "You are adult" : "You are minor";

// console.log(message);

let purchaseAmount = 1000;
let discount = purchaseAmount >= 100 ? 20 : 0;

console.log(
  `your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`
);
