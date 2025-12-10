//.checked = property that determine the checked state of an HTML checkbox or radio button element.
const myCheckBox = document.getElementById("myCheckBox");
const visabtn = document.getElementById("visabtn");
const mastercardbtn = document.getElementById("mastercardbtn");
const mysubmitbtn = document.getElementById("mysubmitbtn");
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");

mysubmitbtn.addEventListener("click", () => {
  if (myCheckBox.checked) {
    subresult.textContent = "You are subscribed";
  } else {
    subresult.textContent = "You are Not Subscribed";
  }

  if (visabtn.checked) {
    paymentresult.textContent = "You have payed by visa Button";
  } else if (mastercardbtn.checked) {
    paymentresult.textContent = "You have payed by master card button";
  } else if (paypalbtn.checked) {
    paymentresult.textContent = "You have payed by paypal button";
  } else {
    paymentresult.textContent = "You must select payment type.";
  }
});
