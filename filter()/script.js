// .filter() = creates a new array by filtering out elements.

/* const users = [
  {
    name: "Alice",
    age: 11,
  },
  {
    name: "Peter",
    age: 22,
  },
  {
    name: "Raman",
    age: 29,
  },
];

const adults = users.filter((users) => users.age >= 18);

console.log(adults); */

/* let numbers = [1, 2, 3, 4, 5];

let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(evenNums);
console.log(oddNums);

function isEven(e) {
  return e % 2 === 0;
}
function isOdd(e) {
  return e % 2 !== 0;
} */

/* const ages = [16, 24, 34, 14, 40, 60];

const agefilter = ages.filter(oldage);
console.log(`These ages people are good for war ${agefilter}`);

function oldage(e) {
  return e >= 18;
} */

// *******************************************

const words = ["apple", "banana", "carrot", "coconut", "kiwi"];

const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(shortWords);
console.log(longWords);

function getShortWords(element) {
  return element.length <= 6;
}
function getLongWords(element) {
  return element.length >= 4;
}
