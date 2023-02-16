const square = document.querySelectorAll(".square");
const square1 = document.getElementById("square1");
const square2 = document.getElementById("square2");
const square3 = document.getElementById("square3");
const square4 = document.getElementById("square4");
const square5 = document.getElementById("square5");
const square6 = document.getElementById("square6");
const square7 = document.getElementById("square7");
const square8 = document.getElementById("square8");
const square9 = document.getElementById("square9");
const winner = document.getElementById("winner");

let players = ["X", "O", "Draw", null];
let activePlayer = players[0];
let arr = [];

//Game logic

square.forEach((squares, i) => {
  squares.addEventListener("click", function listener(ev) {
    let target = ev.target;
    let index = i;

    if (target.textContent === "") {
      target.innerHTML = activePlayer;
      arr[index] = activePlayer;
      checkForWinner(arr);
      swapPlayer();
    }
  });
});

//functions

function swapPlayer() {
  if (activePlayer === players[0]) {
    activePlayer = players[1];
  } else if (activePlayer === players[1]) {
    activePlayer = players[0];
  }
}

function checkForWinner(arr) {
  if (
    (arr[0] === "X" && arr[1] === "X" && arr[2] === "X") ||
    (arr[0] === "O" && arr[1] === "O" && arr[2] === "O")
  ) {
    square1.classList.add("winner");
    square2.classList.add("winner");
    square3.classList.add("winner");
    winner.textContent = `${square1.textContent} won!`;
    winner.classList.remove("hide");
    activePlayer = players[3];
  } else if (
    (arr[3] === "X" && arr[4] === "X" && arr[5] === "X") ||
    (arr[3] === "O" && arr[4] === "O" && arr[5] === "O")
  ) {
    square4.classList.add("winner");
    square5.classList.add("winner");
    square6.classList.add("winner");
    winner.textContent = `${square4.textContent} won!`;
    winner.classList.remove("hide");
    activePlayer = players[3];
  } else if (
    (arr[6] === "X" && arr[7] === "X" && arr[8] === "X") ||
    (arr[6] === "O" && arr[7] === "O" && arr[8] === "O")
  ) {
    square7.classList.add("winner");
    square8.classList.add("winner");
    square9.classList.add("winner");
    winner.textContent = `${square7.textContent} won!`;
    winner.classList.remove("hide");
    activePlayer = players[3];
  } else if (
    (arr[0] === "X" && arr[3] === "X" && arr[6] === "X") ||
    (arr[0] === "O" && arr[3] === "O" && arr[6] === "O")
  ) {
    square1.classList.add("winner");
    square4.classList.add("winner");
    square7.classList.add("winner");
    winner.textContent = `${square1.textContent} won!`;
    winner.classList.remove("hide");
    activePlayer = players[3];
  } else if (
    (arr[1] === "X" && arr[4] === "X" && arr[7] === "X") ||
    (arr[1] === "O" && arr[4] === "O" && arr[7] === "O")
  ) {
    square2.classList.add("winner");
    square5.classList.add("winner");
    square8.classList.add("winner");
    winner.textContent = `${square2.textContent} won!`;
    winner.classList.remove("hide");
    activePlayer = players[3];
  } else if (
    (arr[2] === "X" && arr[5] === "X" && arr[8] === "X") ||
    (arr[2] === "O" && arr[5] === "O" && arr[8] === "O")
  ) {
    square3.classList.add("winner");
    square6.classList.add("winner");
    square9.classList.add("winner");
    winner.textContent = `${square3.textContent} won!`;
    winner.classList.remove("hide");
    activePlayer = players[3];
  } else if (
    (arr[0] === "X" && arr[4] === "X" && arr[8] === "X") ||
    (arr[0] === "O" && arr[4] === "O" && arr[8] === "O")
  ) {
    square1.classList.add("winner");
    square5.classList.add("winner");
    square9.classList.add("winner");
    winner.textContent = `${square1.textContent} won!`;
    winner.classList.remove("hide");
    activePlayer = players[3];
  } else if (
    (arr[2] === "X" && arr[4] === "X" && arr[6] === "X") ||
    (arr[2] === "O" && arr[4] === "O" && arr[6] === "O")
  ) {
    square3.classList.add("winner");
    square5.classList.add("winner");
    square7.classList.add("winner");
    winner.textContent = `${square3.textContent} won!`;
    winner.classList.remove("hide");
    activePlayer = players[3];
  } else if (
    square1.textContent != "" &&
    square2.textContent != "" &&
    square3.textContent != "" &&
    square4.textContent != "" &&
    square5.textContent != "" &&
    square6.textContent != "" &&
    square7.textContent != "" &&
    square8.textContent != "" &&
    square9.textContent != ""
  ) {
    winner.textContent = `It's a draw!`;
    winner.classList.remove("hide");
  }
}
