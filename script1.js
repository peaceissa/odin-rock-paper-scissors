// function to get computer selection
function getComputerChoice() 
{
    const choice = ["rock", "paper", "scissors"];
    let i = Math.floor(Math.random() * 3);
    const cSelect = document.getElementById("cSelect");
    cSelect.textContent = choice[i];
    return choice[i];
}
let playerSelection;
// function to get playerchoice

const buttons = document.getElementsByClassName("btnS");
  for(let i= 0; i < buttons.length; i++){
  buttons[i].addEventListener("click",function(){
    playerSelection = buttons[i].value;
    const pSelect = document.getElementById("pSelect");
    pSelect.textContent = playerSelection;
  });
}

//   function to play a single round
  let playerScore = 0;
  let computerScore = 0;
  
  function playRound(playerSelection, computerSelection)
   {
        let message;
          
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) 
    {
      playerScore += 1;
      const pScore = document.getElementById("pScore");
      pScore.textContent = playerScore;
      message = "You won this round!";
      const pMessage = document.getElementById("roundMessage");
      pMessage.textContent = message;
    } 
    else if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "scissors" && computerSelection === "rock") ||
      (playerSelection === "paper" && computerSelection === "scissors")
    ) 
    {
      computerScore += 1;
      const cScore = document.getElementById("cScore");
      cScore.textContent =computerScore;
      message = "You lost this round!";
      const pMessage = document.getElementById("roundMessage");
      pMessage.textContent = message;
    } 
    else if (
      (playerSelection === "rock" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "paper")
    )
     {
      message = "It's a tie! Do you want to go again?";
      const pMessage = document.getElementById("roundMessage");
      pMessage.textContent = message;
    }
  
    console.log("playerscore: ", playerScore);
    console.log("computerscore: ", computerScore);
  
    return message;
  }
//   const rounds = document.getElementById("rounds");
//   const noRound = rounds.value;
  const playbtn = document.getElementById("playround");
  playbtn.addEventListener("click",function(){
    const rounds = document.getElementById("rounds");
    const noRound = rounds.value;
    if (noRound > 0){
        for(let i= 0; i<noRound; i++){
        setTimeout(game,5000);
        }
    }
    else{
            message = "please enter the no of roumds";
            const pMessage = document.getElementById("roundMessage");
            pMessage.textContent = message;
        }
        winner();
    
  });

//   function to play game for 5 rounds
  function game() {
      let computerSelection = getComputerChoice();
      let round = playRound(playerSelection, computerSelection);
      console.log(round);
  }
    
  function winner(){
    if (playerScore > computerScore) {
        const pMessage = document.getElementById("message");
        pMessage.textContent = 'Game Master Congratulations! You win!';
          
    } else if (playerScore < computerScore) {
        const pMessage = document.getElementById("message");
        pMessage.textContent = 'Sorry! You lose!';
    } else {
        const pMessage = document.getElementById("message");
        pMessage.textContent = "It's a close one";
    }
  }

