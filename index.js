//Object
let player = {
    name: "Om",
    chips: 100
}

//store
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");
// variables
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let messsage = "";

playerEl.textContent = player.name + ": $" + player.chips;
// Random number Generator  

function getRandomNumber() {
    let randomNum = Math.floor(Math.random() * 13) + 1;
    if (randomNum > 10) {
        return 10;        
    } else if (randomNum === 1) {
        return 11;
    } else {
        return randomNum;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " //+ cards[0] + " - " + cards[1];
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
        if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    
    if (isAlive === true && hasBlackJack === false) {
        let drawCard = getRandomNumber()
        sum += drawCard;
        cards.push(drawCard)
        renderGame()
    }
    
}








