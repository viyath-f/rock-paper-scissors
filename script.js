

function computerPlay() {
    choices = ['Rock', 'Paper', 'Scissors'];
    choiceIndex = Math.floor((Math.random()*3));
    return choices[choiceIndex];
}

let capitalize = (str) => {
    part1 = str[0];
    part2 = str.substring(1);
    part1 = part1.toUpperCase();
    part2 = part2.toLowerCase();
    return part1 + part2
}

function playRound(playerSelection, computerSelection) {

    playerSelection = capitalize(playerSelection);
    won = false;

    if (playerSelection == computerSelection) return "It's a tie";
    else {
        if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Rock" ) 
        {
            won = true;
        }

        if (won) {
            return "You won! " + playerSelection + " beats " + computerSelection;
        } else {
            return "You lost! " + computerSelection + " beats " + playerSelection;
        }

    }

}

function game() {
    score = 0;
    computerScore = 0;
    for (let i=0; i<5; i++) {

        choice = prompt("Enter a move");

        outcome = playRound(choice, computerPlay());

        if (outcome.substring(4,7) == "won") score++;

        console.log(outcome);

    }

    if (score >computerScore) {
        console.log("You won the game!");
    } 
    else if (score == computerScore){

        console.log("It's a tie overall!");

    }
    else {
        console.log("You lost the game!");
    }
}