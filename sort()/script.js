// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order,not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings

// let fruits = ["apple", "orange", "banana", "carrot", "jam"];

// let numbers = [1, 10, 2, 6, 8, 3, 5, 7, 9, 4];
// numbers.sort((a, b) => a - b);

// console.log(numbers);

const people = [
  { name: "Peter", age: 10, gpa: 1.2 },
  { name: "John", age: 20, gpa: 1.3 },
  { name: "Lukus", age: 30, gpa: 1.4 },
];

people.sort((a, b) => b.age - a.age);

console.log(people);
