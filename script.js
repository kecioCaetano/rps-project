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

function playRound(computerChoice, humanChoice){

    let winner = 0;
    if (computerChoice != humanChoice){ 
        if ((computerChoice === 0) && (parseInt(humanChoice) === 2))
        computerScore += 1;
        else if ((computerChoice === 1) && (parseInt(humanChoice) === 0))
        computerScore += 1;
        else if ((computerChoice === 2) && (humanChoice === 1))
        computerScore += 1;
        else
        humanScore +=1; winner = 1;

        displayResults(computerChoice, humanChoice, winner);
        return winner;
    }
    else{  
        displayResults(computerChoice, humanChoice, 2)
        return 2;
    }

    
}

function displayResults (computerChoice, humanChoice, winner){
    const div = document.querySelector("#display");
    const h4 = document.createElement("h4");
    h4.textContent = `Computer choice: ${String(computerChoice)} and your choice: ${String(humanChoice)}`;
    const h4Winner = document.createElement("h4");
    let strWinner = "Winner: ";
    if (winner === 0) strWinner += 'Computer';
    if (winner === 1) strWinner += 'Human';
    if (winner === 2) strWinner += 'Tied';
         
    h4Winner.textContent = strWinner;
    div.appendChild(h4);
    div.appendChild(h4Winner);
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

rock.addEventListener("click", () =>{
    playRound(getComputerChoice(), 0);
})

paper.addEventListener("click", () => {
    playRound(getComputerChoice(), 1);
})

scissor.addEventListener("click", () =>{
    playRound(getComputerChoice(), 2);
})