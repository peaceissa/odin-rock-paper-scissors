// function to get comuter choice
function getcomputerchoice(){
    const choice = ["Rock","paper","scissors"];
    let i = Math.floor(Math.random() * 3)
    return choice[i]
}
// // texting the getcomputerchoice function
// console.log(getcomputerchoice())
// console.log(getcomputerchoice())

// function to pay a single round 
function playround(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    let playerscore;
    let computerscore;
    
    if (playerSelection === "rock"&& computerSelection==="scissors"){
        playerscore = ++playerscore; 
        console.log("playerscore: ",playerscore)
        console.log("computerscore: ", computerscore)
        return "You won! Rock beats scissors";
    } 
    else if (playerSelection==="rock" && computerSelection === "paper"){
        computerscore = ++playerscore;
        console.log("playerscore: ",playerscore)
        console.log("computerscore: ", computerscore)
        return "You lose! paper beats rock";
    } 
    else if(playerSelection==="rock" && computerSelection === "rock"){
        return "It's a tie you wanna go again";
    } 
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        playerscore++;
        console.log("playerscore: ",playerscore)
        console.log("computerscore: ", computerscore)
        return "You won! Scissors beats paper"
    } 
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        computerscore = ++computerscore;
        console.log("playerscore: ",playerscore)
        console.log("computerscore: ", computerscore)
        return "You lose! rock beats scissors"
    } 
    else if (playerSelection === "scissors" && computerSelection === "scissors"){
        return "It's a tie you wanna go again"
    } 
    else if (playerSelection ==="paper" && computerSelection === "rock"){
        playerscore = ++playerscore;
        console.log("playerscore: ",playerscore)
        console.log("computerscore: ", computerscore)
        return "You won! paper beats rock"
    } 
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        computerscore = ++computerscore 
        console.log("playerscore: ",playerscore)
        console.log("computerscore: ", computerscore)
        return "You lose!  scissor beats shop"
    }
    else if (playerSelection === "paper" && computerSelection === "paper"){
        return "It's a tie You wanna go again"
    }
   
} 
    
// // debugging the playround function
// const playerSelection  = "rock";
// const computerSelection = getcomputerchoice();
// console.log(playround(playerSelection, computerSelection))


// function to play the game for 5 rounds
function game(){
    let playerscore;
    let computerscore;
    for (let i=0; i<5; i++){
        let playerSelection = prompt("pick")
        let computerSelection = getcomputerchoice()
        let round = playround(playerSelection,computerSelection)
        console.log(round)
    }
    if (playerscore > computerscore){
        console.log("playerscore", playerscore)
        console.log("You win")
    } else {
        console.log("computerscore", computerscore)
        console.log("You lose!")
    }
}
// calling the game function
game()