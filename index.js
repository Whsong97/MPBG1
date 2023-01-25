let playerSelection;
let computerSelection;
let result;

function playGame(playerSelection) {
  computerSelection = Math.random();
  if (computerSelection < 0.34) {
    computerSelection = "rock";
  } else if (computerSelection <= 0.67) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }

  if (playerSelection == computerSelection) {
    result = "tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    result = "win";
  } else {
    result = "lose";
  }
  document.getElementById("result").innerHTML = `You ${result}! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
}
