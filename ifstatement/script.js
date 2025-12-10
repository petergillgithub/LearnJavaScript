// if statement = if a condition is true, excecute some code if not, do something else.

let input = document.getElementById("input");
let submitbtn = document.getElementById("submitbtn");
let result = document.getElementById("result");

let time;
let suggestion = true;

submitbtn.addEventListener("click", () => {
  time = input.value;
  time = Number(time);

  if (time <= 12) {
    result.textContent = "Good Morning";
    if (suggestion) {
      result.textContent = "You have to take your breakfast and juice";
    } else {
      result.textContent = "You have to take tea before hit the work";
    }
  } else if (time >= 12 && time <= 15) {
    result.textContent = "Good Afternoon";
  } else if (time >= 16 && time <= 20) {
    result.textContent = "Good Evening";
  } else {
    result.textContent = "Good Night";
  }
});
