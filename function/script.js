// function = A Section of reusable code.
//            Declare code once, use it whenever you want.
//            call the function to execute that code.

// function HappyBday() {
//   console.log("Happy Birthday to you !!");
// }
// HappyBday();

//================================================================

/* function add(x, y) {
  let result = x + y;
  return result;
}

let answer = add(2, 2);
console.log(answer); */

//=========================

function isEven(number) {
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

console.log(validEmail("peter@gmail.com"));
