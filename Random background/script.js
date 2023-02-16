//Define functions
const rgb = document.querySelector("#rgbValue");
const container = document.querySelector(".container");
const btn = document.querySelector(".button");
const savedValue = document.querySelector(".saved");
const savedButton = document.querySelector(".savedButton");
const colorBlock = document.querySelector(".colorBlock");

let saved = "";

random = () => Math.trunc(Math.random() * 255);

function RGB() {
  let firstNum = random();
  let secondNum = random();
  let thirdNum = random();

  return `rgb(${firstNum}, ${secondNum}, ${thirdNum})`;
}

// container.addEventListener("click", function () {
//   document.body.style.backgroundColor = RGB();
//   rgb.innerHTML = document.body.style.backgroundColor;
// });

btn.addEventListener("click", function () {
  document.body.style.backgroundColor = RGB();
  rgb.innerHTML = document.body.style.backgroundColor;
});

savedButton.addEventListener("click", function () {
  saved = document.body.style.backgroundColor;
  savedValue.classList.remove("hidden");
  colorBlock.classList.remove("hidden");
  savedValue.innerHTML = `You really liked ${saved}`;
  colorBlock.style.backgroundColor = saved;
});
