let firstCard = 1;
let secondCard = 11;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let isAlive = true;
let hasBlackJack = false;
let message = '';
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardEl = document.getElementById('cards-el');
let newCardBtn = document.getElementById('new-card-btn');
let startBtn = document.getElementById('start-btn');

function startGame() {
    renderGame();
}

function renderGame() {
    cardEl.textContent = 'Cards: ' + cards[0] + ' + ' + cards[1];
    sumEl.textContent = 'Sum: ' + sum;
    
    if (sum < 21) {
        message = 'Do you want to draw a new card?';
        newCardBtn.style.display = 'block';
        startBtn.textContent = 'RESTART GAME';
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
        startBtn.textContent = 'RESTART GAME';
    } else {
        message = "You're out of the game!";
        isAlive = false;
        startBtn.textContent = 'RESTART GAME';
    }
    messageEl.textContent = message;
}

function newCardFn() {
    let newcard = 6;
    
    sum += newcard;
    renderGame();
    // cardEl.textContent += ' + ' + newcard;
    // sumEl.textContent = 'Sum: ' + sum;
    
}




	