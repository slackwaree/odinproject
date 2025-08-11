let wrapper = document.getElementById('flex-container');

let getHumanChoice;
let computerChoice = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

const computerScoreHTML = document.getElementById("computer-score");
const humanScoreHTML = document.getElementById("human-score");

wrapper.addEventListener('click', (e) => {
    const isButton = e.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }

    getHumanChoice = e.target.id;
    getComputerChoice = computerChoice[Math.floor(Math.random()*computerChoice.length)];

    const results = document.getElementById("results").classList.remove("hidden");
    document.getElementById("player-choice").textContent = getHumanChoice;
    document.getElementById("computer-choice").textContent = getComputerChoice;

    switch (true) { // holy fuck thats a lot of switch statements :sob:
        case getHumanChoice == "rock" && getComputerChoice == "rock": // rock on rock
            break;
        case getHumanChoice == "rock" && getComputerChoice == "paper": // rock on paper
            computerScore++;
            computerScoreHTML.textContent = computerScore;
            break;
        case getHumanChoice == "rock" && getComputerChoice == "scissors": // rock on scissors
            humanScore++;
            humanScoreHTML.textContent = humanScore;
            break;
        case getHumanChoice == "paper" && getComputerChoice == "rock": // paper on rock
            humanScore++;
            humanScoreHTML.textContent = humanScore;
            break;
        case getHumanChoice == "paper" && getComputerChoice == "paper": // paper on paper
            break;
        case getHumanChoice == "paper" && getComputerChoice == "scissors": // paper on scissors
            computerScore++;
            computerScoreHTML.textContent = computerScore;
            break;
        case getHumanChoice == "scissors" && getComputerChoice == "rock": // scissors on rock
            computerScore++;
            computerScoreHTML.textContent = computerScore;
            break;
        case getHumanChoice == "scissors" && getComputerChoice == "paper": // scissors on paper
            humanScore++;
            humanScoreHTML.textContent = humanScore;
            break;
        case getHumanChoice == "scissors" && getComputerChoice == "scissors": // scissors on scissors (lesbian refernc)
            break;
    }
    if (humanScore == 5 || computerScore == 5) {
        wrapper.classList.add("hidden");
        roundResults = document.getElementById("round-results");

        if (computerScore > humanScore) {
            roundResults.textContent = "Computer wins.";
        }
        else {
            roundResults.textContent = "Player wins.";
        }
    }
})