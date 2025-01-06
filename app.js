let myScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const my =document.querySelector ("#my")
const computer =document.querySelector ("#computer")

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})

const playGame = (userChoice)=>{
    //Generate computer choice
    const computerChoice = genComputerChoice()

    if(userChoice === computerChoice){
        //Draw Game
        msg.innerText = "Game was Draw. Play Again"
        msg.style.backgroundColor = "gray"
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = computerChoice === "paper" ? false: true;
        }
        else if(userChoice === "paper"){
            //rock, scissoors
            userWin = computerChoice === "scissors" ? false : true;
        }
        else{
            //rock, paper
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice)
    }
}

const genComputerChoice = () =>{
    const options = ["rock","paper","scissors"]
    //generat rock, paper, scissors
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex]
}

const showWinner= (userWin, userChoice, computerChoice)=>{
    if (userWin === true){
        myScore++;
        my.innerText = myScore;
        msg.innerText = `You win! Your ${userChoice} beats ${computerChoice} `;
        msg.style.backgroundColor = "green" 
    }
    else{
        computerScore++;
        computer.innerText = computerScore;
        msg.innerText = `You Lose. ${computerChoice} beats Your ${userChoice} `;
        msg.style.backgroundColor = "red" ;
    }
}

