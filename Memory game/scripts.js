const cards = document.querySelectorAll(".memory-card");
const total = document.querySelector(".score");
const gender = document.querySelector(".gender");
const verb = document.querySelector(".verb");
const sentence = document.querySelector(".sentenceStrip");
const info = document.querySelector(".info");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const winner = document.querySelector(".modal-winner");
const wReset = document.querySelector(".winner-reset");
const terms = document.querySelector(".termsOfUse");
const strip = document.querySelector(".strip");
const settings = document.getElementById("settings");
const settingsModal = document.querySelector(".settings");
const settingsInput = document.querySelector("#settingsInput");
const update = document.querySelector("#settingsUpdate");
const action = document.querySelector(".action");
const pronoun = document.querySelector(".pronoun");
const incorrectUpdate = document.querySelector("#incorrectUpdate");
const incorrectInput = document.querySelector("#incorrectInput");
const fullUpdate = document.querySelector("#fullUpdate");
const verbObject = document.querySelector(".verb-object");
const pronounObject = document.querySelector(".pronoun-object");

incorrectTime = 3000;
cardTime = 5000;
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

let score = 0;

fullUpdate.addEventListener("click", () => {
  if (
    settingsInput.value === "0" ||
    incorrectInput.value === "0" ||
    incorrectInput.value === "" ||
    settingsInput.value === ""
  ) {
    cardTime = 5000;
    incorrectTime = 3000;
    settingsModal.classList.add("hidden");
  } else {
    cardTime = settingsInput.value + "000";
    incorrectTime = incorrectInput.value + "000";
    settingsModal.classList.add("hidden");
  }
});

document.querySelector(".winner-home").addEventListener("click", function () {
  document.location.href = "menu.html";
});

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.img === secondCard.dataset.img;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  lockBoard = true;
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  firstCard.removeEventListener("touchend", flipCard);
  secondCard.removeEventListener("touchend", flipCard);
  if (document.URL.includes("subject.html")) {
    strip.src = `images/strip-${firstCard.dataset.img}.png`;
    strip.classList.remove("hidden");
  } else if (document.URL.includes("single.html")) {
    action.src = `images/${firstCard.dataset.img}.png`;
    action.classList.remove("hidden");
  } else if (document.URL.includes("pronoun.html")) {
    pronoun.src = `images/${firstCard.dataset.gender}-${firstCard.dataset.img}.png`;
    pronoun.classList.remove("hidden");
  } else if (document.URL.includes("subjectVerbObject.html")) {
    verbObject.src = `images/${firstCard.dataset.object}.png`;
    verbObject.classList.remove("hidden");
  } else if (document.URL.includes("pronounVerbObject.html")) {
    pronounObject.src = `images/${firstCard.dataset.gender}-${firstCard.dataset.object}.png`;
    pronounObject.classList.remove("hidden");
  }
  setTimeout(() => {
    firstCard.classList.add("hidden");
    secondCard.classList.add("hidden");
    // Change this for sentence strip
    strip.classList.add("hidden");
    action.classList.add("hidden");
    pronoun.classList.add("hidden");
    verbObject.classList.add("hidden");
    pronounObject.classList.add("hidden");

    resetBoard();
  }, `${cardTime}`);
  score++;
  total.textContent = score;
  setTimeout(() => {
    if (score === 8) {
      winner.classList.remove("hidden");
    }
  }, `${cardTime}`);
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, `${incorrectTime}`);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));
// touch end
cards.forEach((card) => card.addEventListener("touchend", flipCard));

// document.getElementById("reset").addEventListener("click", function () {
//   location.reload();
//   score = 0;
//   total.textContent = 0;
// });

document.querySelector(".reset").addEventListener("click", function () {
  location.reload();
  score = 0;
  total.textContent = 0;
  cardTime = 5000;
  incorrectTime = 3000;
});
// touch end
document.querySelector(".reset").addEventListener("touchend", function () {
  location.reload();
  score = 0;
  total.textContent = 0;
  cardTime = 5000;
  incorrectTime = 3000;
});

// touch end

// document.querySelector(".conditions").addEventListener("click", function () {
//   terms.classList.remove("hidden");
// });

close.addEventListener("click", function () {
  modal.classList.add("hidden");
});
close.addEventListener("touchend", function () {
  modal.classList.add("hidden");
});
document.querySelector(".winner-close").addEventListener("click", function () {
  winner.classList.add("hidden");
});
document
  .querySelector(".winner-close")
  .addEventListener("touchend", function () {
    winner.classList.add("hidden");
  });

wReset.addEventListener("click", function () {
  location.reload();
  score = 0;
  total.textContent = 0;
  cardTime = 5000;
  incorrectTime = 3000;
});
wReset.addEventListener("touchend", function () {
  location.reload();
  score = 0;
  total.textContent = 0;
  cardTime = 5000;
  incorrectTime = 3000;
});

info.addEventListener("click", function () {
  modal.classList.remove("hidden");
});

info.addEventListener("touchend", function () {
  modal.classList.remove("hidden");
});

settings.addEventListener("click", function () {
  settingsModal.classList.remove("hidden");
});

document
  .querySelector(".settings-close")
  .addEventListener("click", function () {
    settingsModal.classList.add("hidden");
  });
