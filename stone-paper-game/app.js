let userScore = 0;
let computerScore = 0;

const choices =document.querySelectorAll(".box");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () =>{
    const options =["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () =>{
    msg.innerText = "Game Draw! Play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "you win!";
        msg.style.backgroundColor = "green";

    }else{
        computerScore++;
        compScorePara.innerText = computerScore;
        msg.innerText = "you lose!";
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice =" ,userChoice);
    //genrate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice =" ,compChoice);


     if(userChoice === compChoice){
        //draw game
       drawGame();
     }else{
        let userWin = true;
        if(userChoice ==="rock"){
            //scissors, paper
            userWin = compChoice === "paper"? false : true ;

        }else if(userChoice === "papeer") {
            //rock, scossors
            userWin = compChoice === "scissors" ? false :true ;
        }else{
            //rock,paper
            userWin = compChoice === "rock" ? false :true ;
        }
        showWinner(userWin);
     }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
     const userChoice = choice.getAttribute("id");  
     playGame(userChoice); 
    })
});