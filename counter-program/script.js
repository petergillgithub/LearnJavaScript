let increase = document.getElementById("increase");
let reset = document.getElementById("reset");
let decrease = document.getElementById("decrease");
let counter = document.getElementById("counter");

let count = 0;

increase.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
reset.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});
decrease.addEventListener("click", () => {
  count--;
  counter.textContent = count;
});
