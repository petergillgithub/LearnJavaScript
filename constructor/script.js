// constructor = special method for defining the properties and methods of object...

function Car(make, model, color, year) {
  this.make = make;
  this.model = model;
  this.color = color;
  this.year = year;
  this.drive = function () {
    console.log(`You drive the ${this.make}`);
  };
}

const car1 = new Car("Honda", "Ivtec", "Pearl white", 2019);
const car2 = new Car("Chevrolet", "Camaro", "Blue", 2010);

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.color);
// console.log(car1.year);

// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.color);
// console.log(car2.year);

car1.drive();
car2.drive();
