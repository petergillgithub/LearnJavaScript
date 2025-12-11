// string method = allow you to manipullate and work with text(strings)

let username = "Peter gill";

// console.log(username.charAt(1)); //e
// console.log(username.indexOf("t")); //2
// console.log(username.lastIndexOf("e")); //3
// console.log(username.length); //5

// username = username.trim();

// username = username.toUpperCase(); //PETER
// username = username.toLowerCase(); //peter
// username = username.repeat(2); //PeterPeter

// let result = username.startsWith(" ");
// let result = username.endsWith(" ");
/* let result = username.includes(" ");

if (result) {
  console.log("Your username cant begin with ' ' ");
} else {
  console.log(username);
} */

let phonenumber = "123-456-789";

// phonenumber = phonenumber.replaceAll("-", "/");

phonenumber = phonenumber.padStart(15, "0");

console.log(phonenumber);
