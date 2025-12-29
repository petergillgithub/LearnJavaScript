// getter = special method that makes a property readable.
// setter = special method that makes a property writeable.

// validate and modify a value when reading/writing a property.

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.log("First name must be a non-empty string");
    }
  }

  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.log("Last name must be a non-empty string");
    }
  }

  set age(newage) {
    if (typeof newage === "string" && newage.length > 0) {
      this._age = newage;
    } else {
      console.log("age must be a non-negative number");
    }
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }
  get age() {
    return this._age;
  }
}

const person = new Person("Peter", "Gill", 29);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.fullName);
