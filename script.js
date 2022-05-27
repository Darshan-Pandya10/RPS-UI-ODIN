gameRound = 0;
playerPoint = 0;
computerPoint = 0;

function playGame() {
  for (i = gameRound; i < 5; i++) {

    let playerChoice = prompt("Enter Your Choice!");

    let playerSelection = playerChoice.toLowerCase();

    console.log(`You choose :  ${playerSelection}`)

    choices = ["rock", "paper", "scissor"];

    let chooseindex = Math.floor(Math.random() * choices.length);

    let computerSelection = choices[chooseindex];

    // function to choose random choices for computer

    function computerPlay() {
      return console.log(`Computer choose : ${computerSelection}`);

    }

    computerPlay();

    if (playerSelection === "rock" && computerSelection === "rock") {
      console.log("Game is tie!");
    } else if (playerSelection === "paper" && computerSelection === "paper") {
      console.log("Game is tie!");
    } else if (
      playerSelection === "scissor" &&
      computerSelection === "scissor"
    ) {
      console.log("Game is tie!");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      console.log("You Lose! Paper beats rock.");
      computerPoint++;
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
      console.log("You win! rock beats scissor.");
      playerPoint++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      console.log("You win! Paper beats rock.");
      playerPoint++;
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
      console.log("You Lose! scissor beats paper.");
      computerPoint++;
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
      console.log("You Lose! rock beats scissor.");
      computerPoint++;
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
      console.log("You win! scissor beats paper.");
      playerPoint++;
    } else {
      console.log("Please Choose your input currectly!");
    }
  }

  console.log(`Player scored  ${playerPoint} and Computer scored ${computerPoint}`);

  if (playerPoint > computerPoint) {
    console.log("Congrats! You won");
  } else if (playerPoint < computerPoint) {
    console.log("You lose! Better luck next time");
  } else if (playerPoint == computerPoint) {
    console.log("Game is tied!");
  }
}

playGame();
