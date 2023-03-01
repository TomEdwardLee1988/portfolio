const letterAmount = document.querySelector("#letter-amount");
const password = document.querySelector("#password-span");

let passwordString = "";

let characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "!",
  "£",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "@",
  "#",
];

letterAmount.addEventListener("change", () => {
  passwordString = "";
  for (let i = 0; i < letterAmount.value; i++) {
    let random = characters[Math.floor(Math.random() * characters.length)];
    console.log(random);
    passwordString += random;
  }

  password.textContent = passwordString;
});
