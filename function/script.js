// function = A Section of reusable code.
//            Declare code once, use it whenever you want.
//            call the function to execute that code.

// function declaration = define a reusable block code that perform a specific task.

// function HappyBday() {
//   console.log("Happy Birthday to you !!");
// }
// HappyBday();

// function expressions = a way to define function as values or variables

/* const hello = function () {
  console.log("hello");
};

hello(); */

//================================================================

/* function add(x, y) {
  let result = x + y;
  return result;
}

let answer = add(2, 2);
console.log(answer); */

//=========================

/* function isEven(number) {
  return number % 2 === 0 ? "It's even Number" : "It is Odd Number";
}

console.log(isEven(2));

function validEmail(email) {
  // return email.includes("@") ? "it's valid emai" : "it's not valid email id";
  if (email.includes("@")) {
    console.log("Valid email");
    return;
  } else {
    console.log("Not Valid");
    return;
  }
}

console.log(validEmail("peter@gmail.com")); */

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

/* const numbers = [1, 2, 3, 4, 5, 6, 7];

const oddNumber = numbers.filter(function (element) {
  return element % 2 !== 0;
});

const evenNumber = numbers.filter((e) => {
  return e % 2 === 0;
});

const square = numbers.map(function squares(e) {
  return Math.pow(e, 2);
});

const total = numbers.reduce(function (accumulater, element) {
  return accumulater + element;
});

console.log(`$${total.toFixed(2)}`);
console.log(oddNumber); */

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
