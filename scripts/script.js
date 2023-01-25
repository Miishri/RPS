function getComputerChoice() {
    //round off random value multiplied by 3 then add one
    const value = Math.floor(Math.random() * 3) + 1;
    if (value === 1) {
        return "rock";
    }else if (value === 2) {
        return "paper";
    }else {
        return "scissors";
    }
} 

function playRound(playerSelection = prompt("Choose a sign!"), randomChoice = getComputerChoice()) {
    let player = playerSelection.toLowerCase();
    let bot = randomChoice.toLowerCase();

    if (player === "rock") {

        if (bot === "scissors") {
            return "You win! Rock beats Scissors"; 
        }

    }else if (player === "paper") {
        
        if (bot === "rock") {
            return "You win! Paper beats Rock"
        }

    }else if (player == "scissors") {

        if (bot === "paper") {
            return "You win! Scissors beats Paper";
        }
    }

    return "You Lose! " + bot + " beats " + player;
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }
}