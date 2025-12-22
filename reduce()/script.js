// .reduce() = reduce the elements of an array to a single value.

/* const prices = [5, 10, 4, 10, 20, 100];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(accumulater, element) {
  return accumulater + element;
} */

const grades = [10, 20, 30, 40, 50, 100];

const maxgrades = grades.reduce(maxValue);
const mingrades = grades.reduce(minValue);

console.log(`The max Value is $${maxgrades.toFixed(2)}`);
console.log(`The min Value is $${mingrades.toFixed(2)}`);

function maxValue(accumulater, element) {
  return Math.max(accumulater, element);
}
function minValue(accumulater, element) {
  return Math.min(accumulater, element);
}
