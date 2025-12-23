// arrow functions = a concise way to write function expressions
//                   good for simple function the you use only  once (parameters) => some code.

/* const hello = (name, age, profession) => {
  console.log(`Hello ${name}`);
  console.log(`You are  ${age} years old`);
  console.log(`You are ${profession}`);
};

hello("Peter", 20, "software Engineer"); */

// **************************************************

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((e) => {
  return Math.pow(e, 2);
});

const cubes = numbers.map((e) => {
  return Math.pow(e, 3);
});

const oddNumbers = numbers.filter((e) => {
  return e % 2 !== 0;
});

const evenNumbers = numbers.filter((e) => {
  return e % 2 === 0;
});

const total = numbers.reduce((accumulater, element) => {
  return accumulater + element;
});

console.log(total);
