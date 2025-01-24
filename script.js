var randomNumber1 = Math.random() * 6 + 1
randomNumber1 = Math.floor(randomNumber1)
var dicePlayerOne = document.getElementsByTagName("img")[0];
var randomNumber2 = Math.random() * 6 + 1
randomNumber2 = Math.floor(randomNumber2)
var dicePlayerTwo = document.getElementsByTagName("img")[1];
var heading = document.querySelector("h1")
var addButton = document.getElementsByTagName("button")[0];
var player1Name = document.querySelector(".player1");
var player2Name = document.querySelector(".player2");

if (randomNumber1 === 1) {
    dicePlayerOne.setAttribute("src", "./images/dice1.png");
}  else if (randomNumber1 === 2) {
    dicePlayerOne.setAttribute("src", "./images/dice2.png");
} else if (randomNumber1 === 3) {
    dicePlayerOne.setAttribute("src", "./images/dice3.png");
} else if (randomNumber1 === 4) {
    dicePlayerOne.setAttribute("src", "./images/dice4.png");
} else if (randomNumber1 === 5) {
    dicePlayerOne.setAttribute("src", "./images/dice5.png");
} else {
    dicePlayerOne.setAttribute("src", "./images/dice6.png");
}

if (randomNumber2 === 1) {
    dicePlayerTwo.setAttribute("src", "./images/dice1.png");
}  else if (randomNumber2 === 2) {
    dicePlayerTwo.setAttribute("src", "./images/dice2.png");
} else if (randomNumber2 === 3) {
    dicePlayerTwo.setAttribute("src", "./images/dice3.png");
} else if (randomNumber2 === 4) {
    dicePlayerTwo.setAttribute("src", "./images/dice4.png");
} else if (randomNumber2 === 5) {
    dicePlayerTwo.setAttribute("src", "./images/dice5.png");
} else {
    dicePlayerTwo.setAttribute("src", "./images/dice6.png");
}

if (randomNumber1 > randomNumber2) {
    heading.textContent = "Player 1 Wins!"
    heading.style.color = "#000957"
} else if (randomNumber1 < randomNumber2) {
    heading.textContent = "Player 2 Wins!"
    heading.style.color = "#8E1616"
} else {
    heading.textContent = "You are both winners!"
}