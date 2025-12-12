// variable scope = where a variable is recognized and accessible (local vs global).

// Global variable scope

/* let x = 2;
function2();

function function1() {
  console.log(x);
}

function function2() {
  console.log(x);
} */

// local variable scope

function function1() {
  let x = 2;
  console.log(x);
}

function function2() {
  let x = 4;
  console.log(x);
}

function1();
