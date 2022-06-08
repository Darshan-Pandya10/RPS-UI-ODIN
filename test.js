const pChoice = document.querySelector(".player-choice");
const cChoice = document.querySelector(".computer-choice");
const round = document.querySelector(".round");
const result = document.querySelector(".result");
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const restart = document.querySelector('.restart');
let playerPoint = document.querySelector(".player-score");
let computerPoint = document.querySelector(".computer-score");
const choiceDiv = document.querySelector('.choice-div');
const finalResult = document.querySelector('.final-result')
const choices = document.querySelectorAll(".choice");

let Options = ["rock", "paper", "scissor"];

let gameRound = 1;
let playerScore = 0;
let computerScore = 0;



choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    result.classList.add('result-show')
    playerSelection = choice.getAttribute("id");
    result.classList.add('.result-show')

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
      } 
      
      else if (playerSelection === "paper" && computerSelection === "paper") {
        result.textContent = "Game is tie!";
      }   
      
      else if (
        playerSelection === "scissor" && computerSelection === "scissor") {
        result.textContent = "Game is tie!";
      } 
      
      else if (playerSelection === "rock" && computerSelection === "paper") {
        result.textContent = "You Lose! Paper beats rock.";
        computerPoint.textContent = `Computer Point : ${++computerScore}`;
        
      } 
      
      else if (
        playerSelection === "rock" && computerSelection === "scissor") {
        result.textContent = "You win! rock beats scissor.";
        playerPoint.textContent = `Player Point : ${++playerScore}`;
        
      }
       
      else if (playerSelection === "paper" && computerSelection === "rock") {
        result.textContent = "You win! Paper beats rock.";
        playerPoint.textContent = `Player Point : ${++playerScore}`;
        
      } 
      
      else if (
        playerSelection === "paper" && computerSelection === "scissor") {
        result.textContent = "You Lose! scissor beats paper.";
        computerPoint.textContent = `Computer Point : ${++computerScore}`;
        
      } 
      
      else if (
        playerSelection === "scissor" && computerSelection === "rock") {
        result.textContent = "You Lose! rock beats scissor.";
        computerPoint.textContent = `Computer Point : ${++computerScore}`;
        
      } 
      
      else if (
        playerSelection === "scissor" && computerSelection === "paper") {
        result.textContent = "You win! scissor beats paper.";
        playerPoint.textContent = `Player Point : ${++playerScore}`;
        
      }

      if(playerScore === 5 || computerScore === 5){
    
        if (playerScore > computerScore){
          finalResult.textContent = "Congrats! You are a Winner";
        }
      
        else if (playerScore < computerScore){
          finalResult.textContent = "You Lost the Game, Better Luck Next Time.";
        }
  
        else if (playerScore === computerScore){
          finalResult.textContent = "game is tie!";
        }
  
        restart.classList.add('restart-button-show')
        finalResult.classList.add('final-result-show')
        choiceDiv.classList.add('choice-div-dontshow')

      }
     
    }
    
    playGame();

  })
})


restart.addEventListener('click',() => {

  Restart();

  restart.classList.remove('restart-button-show')
  
  })


function Restart() {

gameRound = 1;
playerScore = 0;
computerScore = 0;

round.textContent = "Game Round : 0 "
playerPoint.textContent = "Player Point :  0 ";
computerPoint.textContent = "Computer Point :  0 ";
result.textContent = " ";
pChoice.textContent = " Player Choice : Click on one of these tiles  ";
cChoice.textContent = " Computer Choice : ";
result.classList.remove('result-show')
finalResult.classList.remove('final-result-show')
choiceDiv.classList.remove('choice-div-dontshow')

}










