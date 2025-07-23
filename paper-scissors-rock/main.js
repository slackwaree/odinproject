function playRound() {
  function playGame() {
    let getHumanChoice = prompt("Type 'rock', 'paper', or 'scissors'");
    getHumanChoice = getHumanChoice.toLowerCase();

    if (getHumanChoice !== "paper" && getHumanChoice !== "scissors" && getHumanChoice !== "rock") { // if input invalid
        roundNumber--;
        return; // Adds another game if the player input is invalid
    }
    let computerResponses = ["rock", "paper", "scissors"];
    let getComputerChoice = computerResponses[Math.floor(Math.random()*computerResponses.length)];
    
    switch (true) { // holy fuck thats a lot of switch statements :sob:
      case getHumanChoice == "rock" && getComputerChoice == "rock": // rock on rock
        console.log("User chose ROCK. Computer chose ROCK.\n The result is a Draw.");
        return;
      case getHumanChoice == "rock" && getComputerChoice == "paper": // rock on paper
        console.log("User chose ROCK. Computer chose PAPER.\n Computer Wins.");
        computerScore++;
        return;
      case getHumanChoice == "rock" && getComputerChoice == "scissors": // rock on scissors
        console.log("User chose ROCK. Computer chose SCISSORS.\n User wins.");
        humanScore++;
        return;
      case getHumanChoice == "paper" && getComputerChoice == "rock": // paper on rock
        console.log("User chose PAPER. Computer chose ROCK.\n User wins.");
        humanScore++;
        return;
      case getHumanChoice == "paper" && getComputerChoice == "paper": // paper on paper
        console.log("User chose PAPER. Computer chose PAPER.\n The result is a draw.");
        return;
      case getHumanChoice == "paper" && getComputerChoice == "scissors": // paper on scissors
        console.log("User chose PAPER. Computer chose SCISSORS.\n Computer wins.");
        computerScore++;
        return;
      case getHumanChoice == "scissors" && getComputerChoice == "rock": // scissors on rock
        console.log("User chose SCISSORS. Computer chose ROCK.\n Computer wins.");
        computerScore++;
        return;
      case getHumanChoice == "scissors" && getComputerChoice == "paper": // scissors on paper
        console.log("User chose SCISSORS. Computer chose PAPER.\n User wins.");
        humanScore++;
        return;
      case getHumanChoice == "scissors" && getComputerChoice == "scissors": // scissors on scissors (lesbian refernc)
        console.log("User chose SCISSORS. Computer chose SCISSORS.\n The result is a draw.");
        return;
    }
  }
    let computerScore = 0;
    let humanScore = 0;
    let roundNumber = 0;
    
    while (roundNumber != 5) { // game loop
      playGame(computerScore, humanScore);
      console.log("Computer score: " + computerScore + "\n Human score: " + humanScore);
      roundNumber++;
    }
    if (computerScore > humanScore) {
        console.log("Game over. Computer wins!");
    }
    else if (computerScore < humanScore) {
        console.log("Game over. Human wins!");
    }
    else {
        console.log("Game over. It's a tie!");
    }
}
playRound();