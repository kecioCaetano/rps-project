function getComputerChoice(){
    return  parseInt(Math.random() * 3);
}

function showChoice(computerValue, humanValue){
                document.getElementById("label1").innerText = computerValue
                document.getElementById("label2").innerHTML = humanValue;
             }
function showScore (){
    document.getElementById("humanScore").innerText = humanScore
    document.getElementById("computerScore").innerHTML = computerScore;
}

function getWinner(computerChoice, humanChoice){

if (computerChoice != humanChoice){ 
    if ((computerChoice === 0) && (parseInt(humanChoice) === 2))
    computerScore += 1;
    else if ((computerChoice === 1) && (parseInt(humanChoice) === 0))
    computerScore += 1;
    else if ((computerChoice === 2) && (humanChoice === 1))
    computerScore += 1;
    else
    humanScore +=1;
}
else{  
    return;
}
}