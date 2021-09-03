const flipCardInner = document.querySelectorAll(".flip-card__inner");
const restartBtn = document.querySelector(".res__btn");

let values = [];

// Events
window.addEventListener("load", setValues);
restartBtn.addEventListener("click", restartGame);

flipCardInner.forEach((card) => {
  card.addEventListener("click", turnCard);
});

// Set values in the cards
function setValues() {
  const cardValueDom = document.querySelectorAll(".num");

  cardValueDom.forEach((card) => {
    const num = Math.floor(Math.random() * 6);

    card.innerText = num;
  });
}

// turn the card and show result
function turnCard() {
  if (this.classList.contains("turn")) {
    return this.classList.add('error')
   
  } else {
    this.classList.add("turn");
  }

  const cardValue = this.querySelector(".flip-card__back").innerText;

  values.push(cardValue);

  if (values.length === 2) {
    if (values[0] === values[1]) {
      showRes("Venceu o jogo");
    } else {
      showRes("Perdeu o jogo");
    }
  }
}

// Show the result
function showRes(res) {
  setTimeout(() => {
    const modal = document.querySelector(".res");
    modal.classList.add("show-res");

    const result = modal.querySelector(".res__text");
    result.innerText = res;
  }, 1000);
}

// Restart the game
function restartGame() {
  document.querySelector(".res").classList.remove("show-res");
  values = [];

  flipCardInner.forEach((card) => {
    card.classList.remove("turn");
    card.classList.remove("error");
  });

  setTimeout(() => {
    setValues();
  }, 500);
}
