// function to get comuter choice
function getcomputerchoice(){
    const choice = ["Rock","paper","scissors"];
    let i = Math.floor(Math.random() * 3)
    return choice[i]
}
// texting the getcomputerchoice function
console.log(getcomputerchoice())
console.log(getcomputerchoice())
// function to pay a single round 
function playround(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCasse()
    if (playerSelection === "rock"&& computerSelection==="scissors"){
            return "You won! Rock beats scissors"
    } 
    else if (playerSelection==="rock" && computerSelection === "paper"){
        return "You lose! paper beats rock"
    } 
    else if(playerSelection==="rock" && computerSelection === "rock"){
        return "It's a tie you wanna go again"
    } 
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "You won! Scissors beats paper"
    } 
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        return "You lose! rock beats scissors"
    } 
    else if (playerSelection === "scissors" && computerSelection === "scissors"){
        return "It's a tie you wanna go again"
    } 
    else if (playerSelection ==="paper" && computerSelection === "rock"){
        return "You won! paper beats rock"
    } 
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        return "You lose!  scissor beats shop"
    }
    else if (playerSelection === "paper" && computerSelection === "paper"){
        return "It's a tie You wanna go again"
    }
}
// debugging the playround function
const playerSelection  = "rock";
const computerSelection = getcomputerchoice();
console.log(playround(playerSelection, computerSelection))