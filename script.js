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
let playerscore = 0
let computerscore = 0

function playround(playerSelection, computerSelection)
{
    // let playerscore = 0
    // let computerscore = 0
    playerSelection = playerSelection.toLowerCase()
    
    if (playerSelection === "rock" && computerSelection==="scissors" || 
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection ==="paper" && computerSelection === "rock")
    {
        playerscore += 1
        console.log("playerscore: ",playerscore)
        console.log("computerscore: ", computerscore)
        let message = "You won this round!"
        return message 
    } 
    else if (playerSelection==="rock" && computerSelection === "paper" ||
            playerSelection === "scissors" && computerSelection === "rock" ||
            playerSelection === "paper" && computerSelection === "scissors")
    {
        computerscore += 1;
        console.log("playerscore: ",playerscore)
        console.log("computerscore: ", computerscore)
        message = "You lost this round!"
        return message 
    } 
    else if (playerSelection==="rock" && computerSelection === "rock" ||
            playerSelection === "scissors" && computerSelection === "scissors" ||
            playerSelection === "paper" && computerSelection === "paper")
    {
        console.log("playerscore: ",playerscore)
        console.log("computerscore: ",computerscore)
        message =  "It's a tie you wanna go again";
        return message
    } 
    else{
        return "invalid choice"
    }
     
} 
    
// debugging the playround function
// const playerSelection  = "rock";
// const computerSelection = getcomputerchoice();
// console.log(playround(playerSelection, computerSelection))


// function to play the game for 5 rounds
function game(){

    for (let i=0; i<5; i++){
        let playerSelection = prompt("pick")
        let computerSelection = getcomputerchoice()
        let round = playround(playerSelection,computerSelection)
        console.log(round)
    }
    if (playerscore > computerscore){
        console.log(`Game Master
        Congratulations! You win!
        Score: ${playerscore} ${computerscore}`)
    }
    else if(playerscore < computerscore){
        console.log(`Sorry! You lose!
        score: ${computerscore} ${playerscore}`)
    } else (playerscore === computerscore){
        console.log(`It's a close one
        Score: ${playerscore} ${computerscore}`)
    }
}
// calling the game function
game()