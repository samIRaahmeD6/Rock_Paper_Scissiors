let userScore = 0;
let comScore = 0;
const msg = document.querySelector("#msg");
let colors = document.querySelector(".msg-container");
let uScore = document.querySelector("#user-score");
let cScore = document.querySelector("#comp-score");
const drawGame = () =>{
    msg.innerText = "Draw";
    colors.style.backgroundColor= "#081b31";
}

const showWinner = (userWin, compChoice) =>{
    if(userWin){
        msg.innerText = `You Win! comp chose ${compChoice}`;
    colors.style.backgroundColor = "green";
    colors.style.width = "20rem";
        userScore++;
        uScore.innerText = userScore;
    }
    else{
        msg.innerText = `You Lose! comp chose ${compChoice}`;
        colors.style.backgroundColor = "red";
        comScore++;
        cScore.innerText = comScore;
    }
}
const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
 const options = ["rock", "paper", "scissors"];
 let randIdx =Math.floor( Math.random() * 3);

 return options[randIdx];
};

const playGame = (userChoice) =>{
  const compChoice = genCompChoice();
  
  if(userChoice === compChoice){
    drawGame();
  }
  else{
    let userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice === "paper" ? false : true;
        showWinner(userWin, compChoice);

    }
    else if (userChoice === "paper"){
       userWin = compChoice === "scissors" ? false : true;
       showWinner(userWin, compChoice);
    }
    else {
        userWin = compChoice === "rock" ? false :true;
        showWinner(userWin, compChoice);
    }

  }

};

choices.forEach((choice) =>{
 choice.addEventListener("click", () =>{
  const userChoice = choice.getAttribute("id");
  playGame(userChoice);
 });
});


