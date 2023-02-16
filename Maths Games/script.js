const check = document.querySelectorAll("#answer");
const main = document.querySelector(".main");

// We're creating 2 random numbers (between 1 and 10 in this case), then working out their sum. We're then passing all the info to another function which will add them to the DOM.
function randomNumber() {
  let first = Math.floor(Math.random() * 10 + 1);
  let second = Math.floor(Math.random() * 10 + 1);
  let answer = first + second;

  updateDom(first, second, answer);
}

// This function is used to update the DOM. We're creating a div, adding a class of question to it, then adding the literal question text (with number input) to it.

function updateDom(first, second, answer) {
  const element = document.createElement("div");
  element.classList.add("question");
  element.innerHTML = `<strong>${first} + ${second}</strong> = <input id="answer" type="number">`;
  //adding the answer to the dataset in HTML, so we can access it later.
  element.dataset.answer = `${answer}`;

  //We're then putting it in the "main" section of the page, the "main" would change if we wanted it elsewhere.
  main.appendChild(element);
}
//Calls the function to generate the sums. 15 is the number that fits.
randomNumber();
randomNumber();
randomNumber();
randomNumber();
randomNumber();
randomNumber();
randomNumber();
randomNumber();
randomNumber();
randomNumber();
randomNumber();
randomNumber();
randomNumber();
randomNumber();
randomNumber();

//Attaching event listeners to the inputs, waiting for the "change" event.
document.querySelectorAll("#answer").forEach((box) => {
  box.addEventListener("change", () => {
    let childAnswer = box.value;
    let dataAnswer = box.parentElement.dataset.answer;
    let element = box;
    box.classList.remove("correct");
    box.classList.remove("incorrect");
    //Check to see if child has changed the answer.
    if (box.value === "") {
      box.classList.remove("correct");
      box.classList.remove("incorrect");
    } else {
      //passing values to another function.
      checkValue(childAnswer, dataAnswer, element);
    }
  });
});

//take the answer the child gave, checks it against the dataset answer.
function checkValue(value1, value2, element) {
  if (value1 === value2) {
    element.classList.add("correct");
  } else {
    element.classList.add("incorrect");
  }
}
