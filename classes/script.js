// class = (ES6 feature) provides a more structured and cleaner way to work object compared to traditional constructor function
// ex. static, keyword,encapsulation, inheritance

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  displayProduct() {
    console.log(`Product: ${this.name}`);

    console.log(`Price: $${this.price}`);
  }

  calculateTotal(salesTax) {
    return this.price + this.price * salesTax;
  }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 99.99);
const product2 = new Product("Coat", 199.99);
const product3 = new Product("Jacket", 209.99);

/* product1.displayProduct();
product2.displayProduct();
product3.displayProduct(); */

product1.displayProduct();
// product2.displayProduct();
// product3.displayProduct();

const total1 = product1.calculateTotal(salesTax);
// const total2 = product2.calculateTotal(salesTax);
// const total3 = product3.calculateTotal(salesTax);

console.log(`Total Price (with tax): $${total1.toFixed(2)}`);
// console.log(`Total Price (with tax): $${total2.toFixed(2)}`);
// console.log(`Total Price (with tax): $${total3.toFixed(2)}`);
