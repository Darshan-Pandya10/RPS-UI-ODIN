const pChoice = document.querySelector(".player-choice");
const cChoice = document.querySelector(".computer-choice");

const round = document.querySelector(".round");
const result = document.querySelector(".result");

let playerPoint = document.querySelector(".player-score");
let computerPoint = document.querySelector(".computer-score");

gameRound = 1;
playerScore = 1;
computerScore = 1;

const finalResult = document.querySelector('.final-result')

const choices = document.querySelectorAll(".choice");

let Options = ["rock", "paper", "scissor"];




choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    for(i = gameRound ; i <= 5 ; i++) {

    playerSelection = choice.getAttribute("id");
    console.log(playerSelection);

    pChoice.textContent = `Player Choice : ${playerSelection}`;

    function playGame() {
      let chooseindex = Math.floor(Math.random() * Options.length);

      let computerSelection = Options[chooseindex];

      round.textContent = `Game Round : ${gameRound++}`;

      function computerPlay() {
        cChoice.textContent = `Computer Choice : ${computerSelection}`;
      }
      computerPlay();

      if (playerSelection === "rock" && computerSelection === "rock") {
        result.textContent = "Game is tie!";
      } else if (playerSelection === "paper" && computerSelection === "paper") {
        result.textContent = "Game is tie!";
      } else if (
        playerSelection === "scissor" &&
        computerSelection === "scissor"
      ) {
        result.textContent = "Game is tie!";
      } else if (playerSelection === "rock" && computerSelection === "paper") {
        result.textContent = "You Lose! Paper beats rock.";
        computerPoint.textContent = `Computer Point : ${computerScore++}`;
      } else if (
        playerSelection === "rock" &&
        computerSelection === "scissor"
      ) {
        result.textContent = "You win! rock beats scissor.";
        playerPoint.textContent = `Player Point : ${playerScore++}`;
      } else if (playerSelection === "paper" && computerSelection === "rock") {
        result.textContent = "You win! Paper beats rock.";
        playerPoint.textContent = `Player Point : ${playerScore++}`;
      } else if (
        playerSelection === "paper" &&
        computerSelection === "scissor"
      ) {
        result.textContent = "You Lose! scissor beats paper.";
        computerPoint.textContent = `Computer Point : ${computerScore++}`;
      } else if (
        playerSelection === "scissor" &&
        computerSelection === "rock"
      ) {
        result.textContent = "You Lose! rock beats scissor.";
        computerPoint.textContent = `Computer Point : ${computerScore++}`;
      } else if (
        playerSelection === "scissor" &&
        computerSelection === "paper"
      ) {
        result.textContent = "You win! scissor beats paper.";
        playerPoint.textContent = `Player Point : ${playerScore++}`;
      } else {
        result.textContent = "Please Choose your input currectly!";
      }
     
    }
    if(gameRound === 5){
      if (playerScore === computerScore){
        finalResult.textContent = 'game is tie!';
      }
    
      else if (playerScore > computerScore){
        finalResult.textContent = 'Congrats! You are a Winner';
      }
    
      else if (playerScore < computerScore){
        finalResult.textContent = 'You Lost the Game, Better Luck Next Time.'
      }
      
    }

  }
  
  

    playGame();

  });
});

function Restart() {
gameRound = 1;
playerScore = 0;
computerScore = 0;

finalResult.textContent = "";
result.textContent = "";

}










