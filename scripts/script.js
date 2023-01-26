function getComputerChoice() {
    //round off random value multiplied by 3 then add one
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
} 
let scoreBot = 0; //storing score
let scorePlayer = 0;
function winner() {
    if (scorePlayer === 5) {
        scoreBot = 0; 
        scorePlayer = 0;
        return "Player has won!";    
    }

    if (scoreBot == 5) {
        scoreBot = 0; 
        scorePlayer = 0;
        return "Computer has won!";
    }

}
function playRound(playerSelection = prompt("Choose a sign!"), randomChoice = getComputerChoice()) {
    const player = playerSelection.toLowerCase();
    const bot = randomChoice.toLowerCase();

    let returnValue = "";
    switch (player) {
        case "rock":
            if (bot === "scissors") {
                returnValue = "You win! Rock beats Scissors"; 
                scorePlayer++;
                break;
            }
        case "paper":
            if (bot === "rock") {
                returnValue = "You win! Paper beats Rock"; 
                scorePlayer++;
                break;
            }
        case "scissors": 
            if (bot === "paper") {
                returnValue = "You win! Paper beats Rock";
                scorePlayer++;
                break; 
            }
        default :
            scoreBot++;
            returnValue = "You Lose! " + bot + " beats " + player;
    }
    update();
    return returnValue;
}

const body = document.querySelector("body");

const buttonOne = document.createElement("button");
buttonOne.textContent = "rock";
buttonOne.addEventListener('click', () => {
    console.log(playRound("rock"));
});

const buttonTwo = document.createElement("button");
buttonTwo.textContent = "paper";
buttonTwo.addEventListener('click', () => {
    console.log(playRound("paper"));
});


const buttonThree = document.createElement("button");
buttonThree.textContent = "scissors";
buttonThree.addEventListener('click', () => {
    console.log(playRound("scissors"));
});

body.append(buttonOne, buttonTwo, buttonThree);

const scoreDisplay = document.createElement("div");
scoreDisplay.classList.add("display");
body.appendChild(scoreDisplay);

const display = document.querySelector(".display");

let displayPlayer = document.createElement("p");
displayPlayer.textContent = `Player : ${scorePlayer}`;

let displayBot = document.createElement("p");
displayBot.textContent = `Bot : ${scoreBot}`;

let displayWinner = document.createElement("p");

display.append(displayPlayer, displayBot, displayWinner);

function update() {
    displayPlayer.textContent = `Player : ${scorePlayer}`;   
    displayBot.textContent = `Bot : ${scoreBot}`;
    displayWinner.textContent = winner();
}