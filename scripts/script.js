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
//get choice from pc
let playerChoice = "rock"; 

//return number for choice
function choiceNumber(value) {
    const valueCase = value.toLowerCase();
    if (valueCase === "rock") {
        return 1;
    }else if (valueCase === "paper") {
        return 2;
    }else if (valueCase === "scissors") {
        return 4;
    }else {
        return "provide a proper value";
    } 
}

function playRound( playerSelection, randomChoice = getComputerChoice()) {
    //convert sign to value
}