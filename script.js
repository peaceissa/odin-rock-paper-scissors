function getcomputerchoice(){
    const choice = ["Rock","paper","scissors"];
    let i = Math.floor(Math.random() * 3)
    return choice[i]
}
console.log(getcomputerchoice())
console.log(getcomputerchoice())