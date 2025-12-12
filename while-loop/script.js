// while loop = repeat some code WHILE some condition is true.

// let username = "";

// while (username === "" || username === null) {
//   username = window.prompt("Enter your name !");
// }

// console.log(`Hello ${username}`);

//do while   loop Runs at least once, even if the condition is false.

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// ========================================================

let loggedIn = false;
let username;
let password;

while (!loggedIn) {
  username = window.prompt("Enter your username");
  password = window.prompt("Enter your password");

  if (username === "myUsername" && password === "myPassword") {
    loggedIn = true;
    console.log("You are logged in ");
  } else {
    console.log("Invalid credentials . Please try again");
  }
}
