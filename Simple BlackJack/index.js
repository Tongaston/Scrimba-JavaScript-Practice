let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackJack = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("cards-el");
let newCardBtn = document.getElementById("new-card-btn");
let startBtn = document.getElementById("start-btn");
let playerEl = document.getElementById("player-el");

let player = {
  name: prompt("Enter your name: "),
  chips: 100,
};

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard === 1) {
    return 11;
  } else if (randomCard > 10) {
    return 10;
  } else {
    return randomCard;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;

  if (sum < 21) {
    message = "Do you want to draw a new card?";
    newCardBtn.style.display = "block";
    startBtn.textContent = "RESTART GAME";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
    startBtn.textContent = "NEW GAME";
    newCardBtn.style.display = "none";
  } else {
    message = "You're out of the game!";
    isAlive = false;
    startBtn.textContent = "NEW GAME";
    newCardBtn.style.display = "none";
  }
  messageEl.textContent = message;
}

function newCardFn() {
  if (isAlive === true && hasBlackJack === false) {
    let newcard = getRandomCard();
    cards.push(newcard);
    sum += newcard;
    renderGame();
  }
}
