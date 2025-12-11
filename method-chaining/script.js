// Method Chaining = Calling one method after another in one continuous line of code.

// ------- NO METHOD CHAINING---------

let username = window.prompt("Enter your username: ");

username = username.trim();
let letter = username.charAt(1);
letter = letter.toUpperCase();

let extrachart = username.slice(1);
extrachart = extrachart.toLowerCase();
username = letter + extrachart;

console.log(username);

// -------------- METHOD CHAINING

username = username.trim().charAt(0).toUpperCase() + 1;
