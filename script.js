function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    let i = Math.floor(Math.random() * 3);
    return choice[i];
  }
  
  let playerScore = 0;
  let computerScore = 0;
  
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
  
    let message;
  
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) {
      playerScore += 1;
      message = "You won this round!";
    } else if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "scissors" && computerSelection === "rock") ||
      (playerSelection === "paper" && computerSelection === "scissors")
    ) {
      computerScore += 1;
      message = "You lost this round!";
    } else if (
      (playerSelection === "rock" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "paper")
    ) {
      message = "It's a tie! Do you want to go again?";
    }
  
    console.log("playerscore: ", playerScore);
    console.log("computerscore: ", computerScore);
  
    return message;
  }
  
  function game() {
    for (let i = 0; i < 5; i++) {
      let playerSelection = prompt("Pick");
      let computerSelection = getComputerChoice();
      let round = playRound(playerSelection, computerSelection);
      console.log(round);
    }
  
    if (playerScore > computerScore) {
      console.log(`Game Master
          Congratulations! You win!
          Score: ${playerScore} ${computerScore}`);
    } else if (playerScore < computerScore) {
      console.log(`Sorry! You lose!
          Score: ${playerScore} ${computerScore}`);
    } else {
      console.log(`It's a close one
          Score: ${playerScore} ${computerScore}`);
    }
  }
  
  game();
  