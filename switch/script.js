// switch = can be an efficient replacement to many else if statements

// IF Else Example

/* let day = 4;

if (day == 1) {
  console.log("It is Monday");
} else if (day == 2) {
  console.log("It is tuesday");
} else if (day == 3) {
  console.log("It is wedensday");
} else if (day == 4) {
  console.log("It is thursday");
} else if (day == 5) {
  console.log("It is friday");
} else if (day == 6) {
  console.log("It is saturday");
} else if (day == 7) {
  console.log("It is Sunday");
} else {
  console.log("It is not a day");
} */

let day = 2;

switch (day) {
  case 1:
    console.log("It is Monday");
    break;
  case 2:
    console.log("It is Tuesday");
    break;
  case 3:
    console.log("It is wednesday");
    break;
  case 4:
    console.log("It is thursday");
    break;
  case 5:
    console.log("It is friday");
    break;
  case 6:
    console.log("It is saturday");
    break;
  case 7:
    console.log("It is sunday");
    break;
  default:
    console.log("It is not day");
}
