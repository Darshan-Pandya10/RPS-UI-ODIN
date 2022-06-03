const pChoice = document.querySelector(".player-choice");
const cChoice = document.querySelector(".computer-choice");

const round = document.querySelector(".round");
const result = document.querySelector(".result");

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');



let playerPoint = document.querySelector(".player-score");
let computerPoint = document.querySelector(".computer-score");

let gameRound = 1;
let playerScore = 0;
let computerScore = 0;

const finalResult = document.querySelector('.final-result')

const choices = document.querySelectorAll(".choice");

let Options = ["rock", "paper", "scissor"];




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
  
        finalResult.classList.add('final-result-show')
        rock.classList.add('choice-decline')
        paper.classList.add('choice-decline')
        scissor.classList.add('choice-decline')
        
      }
     
    }
    


  
  
    playGame();

  })
})

// function Restart() {
// gameRound = 0;
// playerScore = 0;
// computerScore = 0;

// finalResult.textContent = " ";
// result.textContent = " ";
// pChoice.textContent = " Player Choice : Click on one of this tile  ";
// cChoice.textContent = " ";



// }










