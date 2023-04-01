let player = 0
let computer = 0


const RockButton = document.querySelector(".rock")
const PaperBtn = document.querySelector(".paper")
const ScissorsBtn = document.querySelector(".scissors")

const outcomeC = document.querySelector(".score-computer")
const outcomeP = document.querySelector(".score-player")

const Log = document.querySelector(".Log")
const Outcomegen = document.querySelector(".Outcomegen")

const computerplay = () => {
    const array = ["Rock", "Paper", "Scissors"]
    const randomNum = Math.floor(Math.random() * 3    )
    const compChoice = array[randomNum]
    return compChoice
    
    
}

const playround = (playerSelection, computerSelection) => {
        if (playerSelection === computerSelection) {
            
            const para = document.createElement("para")
            para.innerText = "Tie"
            Log.appendChild(para)
        } else if ( 
        (playerSelection === "Rock" && computerSelection == "Scissors") ||
        (playerSelection === "Scissors" && computerSelection == "Paper") ||
        (playerSelection === "Paper" && computerSelection =="Rock") 
        )  {
        
        player++
        const para = document.createElement("para")
            para.innerText = "You won"
            Log.appendChild(para)
        }
        else {
        
        computer++
        const para = document.createElement("para")
            para.innerText = "You Lost"
            Log.appendChild(para)
    }

}


const checkWin = (computer,player) => {
    if (player === 5) {
        const h2 = document.createElement("h2")
        h2.innerText = "Congrats, You Won  "
        Outcomegen.append(h2)
        
    } else if (computer === 5) {
        const h2 = document.createElement("h2")
        h2.innerText = "You Lost, Computer Won  "
        Outcomegen.append(h2)
        
    }
}

const updateScore = (player,computer) => {
    
    outcomeC.innerText =  `${computer}`
    
    outcomeP.innerText = `${player}`


}

RockButton.addEventListener("click", ()  => 
{
    const computerSelection = computerplay()
    const playerSelection = "Rock"
    playround(playerSelection,computerSelection)
    updateScore(player,computer)
    checkWin(computer,player)
} )

PaperBtn.addEventListener("click", ()  => 
{
    const computerSelection = computerplay()
    const playerSelection = "Paper"
    playround(playerSelection,computerSelection)
    updateScore(player,computer)
    checkWin(computer,player)
} )

ScissorsBtn.addEventListener("click", ()  => 
{
    const computerSelection = computerplay()
    const playerSelection = "Scissors"
    playround(playerSelection,computerSelection)
    updateScore(player,computer)
    checkWin(computer,player)
} )






/* const game = () => {
     for( let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose")
        
        let computerSelection = computerplay()
        console.log(playround(playerSelection, computerSelection))
    }

    if(player > computer) {
        return "You Won"
    } else if (computer > player) {
        return "You Lost"
    } else {
        return "It is a Tie"
    }


}  */


