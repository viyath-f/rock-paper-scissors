

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

let score = 0;
let computerScore = 0;

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

function game(choice) {
    
    // for (let i=0; i<5; i++) {

        // choice = prompt("Enter a move");

        outcome = playRound(choice, computerPlay());

        if (outcome.substring(4,7) == "won") 
        {score++;} 
        else 
        {
            computerScore++;
        }
        

        results.innerHTML = outcome;
        updateGameState()

    // }

    

    

   


}

const results = document.querySelector(".results");
results.innerHTML = "You haven't played yet.";
document.body.appendChild(results);

const scores = document.querySelector(".scores");



function updateScores() {
    scores.innerHTML = `Your score: ${score} Computer Score ${computerScore}`;
}

updateScores();

function updateGameState() {
    updateScores();
    if (score  >= 5 || computerScore >= 5)
    {
    if (score >computerScore) {
        results.innerHTML = "You won the game!";
    } 
    else if (score == computerScore){

        results.innerHTML = "It's a tie overall!";

    }
    else {
        results.innerHTML = "You lost the game!";
    }

    score = 0;
    computerScore = 0;

    setTimeout(() => {
        score = 0;
        computerScore = 0;
        updateScores();
        results.innerHTML = "Press rock, paper, or scissors to play again.";
    }, 1000);

    }
}

document.body.appendChild(scores);

const rockBtn = document.createElement('button');
rockBtn.addEventListener("click", () => {
    game("rock");
});
rockBtn.innerHTML = "Rock";
document.body.appendChild(rockBtn);

const paperBtn = document.createElement('button');
paperBtn.addEventListener("click", () => {
    game("rock");
});
paperBtn.innerHTML = "Paper";
document.body.appendChild(paperBtn);

const scissorsBtn = document.createElement('button');
scissorsBtn.addEventListener("click", () => {
    game("scissors");
});
scissorsBtn.innerHTML = "Scissors";
document.body.appendChild(scissorsBtn);