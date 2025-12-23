// this = referece to the object where THIS is used
//        (this object depends on the immediate contact)
//         person.name = this.name

const person1 = {
  name: "John",
  favfood: "Burger",
  sayhello: function () {
    console.log(`Hello ${this.name}`); // person1.name
  },
  eat: function () {
    console.log(`I like to eat ${this.favfood}`);
  },
};
const person2 = {
  name: "Peter",
  favfood: "Burger",
  sayhello: function () {
    console.log(`Hello ${this.name}`); // person1.name
  },
  eat: function () {
    console.log(`I like to eats ${this.favfood}`);
  },
};

person1.sayhello();
person1.eat();
person2.sayhello();
person2.eat();
