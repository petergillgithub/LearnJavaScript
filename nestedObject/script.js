/* nested object = Objects inside of other Objects.
                   1. Allows you to represent more complex data structures.
                   2. Child object is enclosed by a Parent Object.

                   Person{Address{}, ContactInfo{}}
                   ShoppingCart{keyboard{}, Mouse{}, Monitor{}}

*/

/* const person = {
  fullName: "Jimmy SherGill",
  age: 30,
  isStudent: true,
  hobbies: ["cricket", "volleyball", "cooking"],
  address: {
    street: "173A Belgrave Gate",
    city: "Leicester",
    country: "United KingDom",
  },
};

// console.log(person.fullName);
// console.log(person.hobbies[0]);
// console.log(person.address.street);

for (const property in person.address) {
  console.log(person.address[property]);
}
 */

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person(
  "PeterGill",
  30,
  "173A Belgrave Gate,United Kingdom"
);
const person2 = new Person(
  "John Gill",
  34,
  "173A Belgrave Gate,United Kingdom"
);
const person3 = new Person(
  "Lukus Gilll",
  40,
  "173A Belgrave Gate,United Kingdom"
);

console.log(person1.name);
