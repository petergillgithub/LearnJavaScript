// object = A collection of related properties and/or methods
//          Can represents real world objects (people, products,places)
//          object = {key: value,
//                    function()}

const person1 = {
  firstName: "Peter",
  lastName: "Gill",
  age: 30,
  isEmployed: true,
  sayHello: () => console.log("Hello I am Peter Gill"),
  eat: () => console.log("I like to eat pizza with cold drink"),
};

const person2 = {
  firstName: "John",
  lastName: "Gill",
  age: 32,
  isEmployed: false,
  sayHello: function () {
    console.log("Hello I am John Gill");
  },
  eat: () => console.log("I like to eat burger with cold drink"),
};

//
/* console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed); */

person1.sayHello();
person1.eat();

person2.sayHello();
person2.eat();
