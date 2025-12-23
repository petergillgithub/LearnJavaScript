// function expression = a way to define function as values or variables.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squares = numbers.map(function (element) {
  return Math.pow(element, 2);
});

const evenNumbers = numbers.filter(function (element) {
  return element % 2 === 0;
});

const oddNumbers = numbers.filter(function (element) {
  return element % 2 !== 0;
});

const total = numbers.reduce(function (accumulater, element) {
  return accumulater + element;
});

console.log(squares);
