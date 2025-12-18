// ! callback - a function that is passed as a an argument
//            to another function.
//            ! used to handle asynchronous operations:
//            1. Reading a file.
//            2. Network requests
//            3. Interacting with databases.

//            ! "Hey, when you're done, call this next"

/* function sayHello() {
  console.log("Hello");
}

function doSomething(callback) {
  console.log("Doing Something");
  callback();
}

doSomething(sayHello); */
// Doing Something
// Hello

function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  callback("Alex");
}

processUser(greet);

// Hello Alex
