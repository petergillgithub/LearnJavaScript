let count = 0;

const dice = document.getElementById("dice");
const result = document.getElementById("result");
const btn = document.getElementById("btn");
const totalResult = document.getElementById("totalResult");

const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

btn.addEventListener("click", rollDice);

function rollDice() {
  const number = Math.floor(Math.random() * 6) + 1;

  dice.textContent = diceFaces[number - 1];
  result.textContent = "You rolled a " + number + "!";
  if (number == 6) {
    result.textContent = "Congratulation for 6 Number";
  } else {
    result.textContent = ` "Good Job "` + number;
  }

  count++;
  totalResult.textContent = count;
}
