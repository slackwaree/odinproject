function playRound() {
  function playGame() {
    let getInput = prompt("Type 'rock', 'paper', or 'scissors'");

    if (getInput != "paper" && "scissors" && "rock") {
        console.log("fail");
        return;
    }

    let computerResponses = ["rock", "paper", "scissors"];
    let randomResult = computerResponses[Math.floor(Math.random()*computerResponses.length)];
    
    switch (true) { // holy fuck thats a lot of switch statements :sob:
      case getInput == "rock" && randomResult == "rock": // rock on rock
        console.log("User chose ROCK. Computer chose ROCK.\n The result is a Draw.");
        return;
      case getInput == "rock" && randomResult == "paper": // rock on paper
        console.log("User chose ROCK. Computer chose PAPER.\n Computer Wins.");
        computerScore++;
        return;
      case getInput == "rock" && randomResult == "scissors": // rock on scissors
        console.log("User chose ROCK. Computer chose SCISSORS.\n User wins.");
        humanScore++;
        return;
      case getInput == "paper" && randomResult == "rock": // paper on rock
        console.log("User chose PAPER. Computer chose ROCK.\n User wins.");
        humanScore++;
        return;
      case getInput == "paper" && randomResult == "paper": // paper on paper
        console.log("User chose PAPER. Computer chose PAPER.\n The result is a draw.");
        return;
      case getInput == "paper" && randomResult == "scissors": // paper on scissors
        console.log("User chose PAPER. Computer chose SCISSORS.\n Computer wins.");
        computerScore++;
        return;
      case getInput == "scissors" && randomResult == "rock": // scissors on rock
        console.log("User chose SCISSORS. Computer chose ROCK.\n Computer wins.");
        computerScore++;
        return;
      case getInput == "scissors" && randomResult == "paper": // scissors on paper
        console.log("User chose SCISSORS. Computer chose PAPER.\n User wins.");
        humanScore++;
        return;
      case getInput == "scissors" && randomResult == "scissors": // scissors on scissors (lesbian refernc)
        console.log("User chose SCISSORS. Computer chose SCISSORS.\n The result is a draw.");
        return;
    }
  }
    let computerScore = 0;
    let humanScore = 0;
    let roundNumber = 1;
    
    for (let i = 0; i < 5; i++) { // game loop.
      playGame(computerScore, humanScore);
      console.log("Computer score: " + computerScore + "\n Human score: " + humanScore);
    }
}
playRound();