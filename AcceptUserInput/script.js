// How to accept user input

//1. Easy Way = window prompt
//2. Professional = HTML textbox

// 1. Easy Way

// let username;
// username = window.prompt("What is your username");
// console.log(username);

let username;

document.getElementById("submit").onclick = function () {
  username = document.getElementById("mytext").value;
  document.getElementById("myh1").textContent = `Hello ${username}`;
};
