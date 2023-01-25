function getComputerChoice() {
    //round off random value multiplied by 3 then add one
    const value = Math.floor(Math.random() * 3) + 1;
    if (value === 1) {
        return "Rock";
    }else if (value === 2) {
        return "Paper";
    }else {
        return "Scissors";
    }
}