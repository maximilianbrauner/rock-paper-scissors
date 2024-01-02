function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissor"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}
function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerSelection.toLowerCase();
  if (playerChoice === computerChoice) {
    return `Ìt's a TIIEE. You both choose ${computerChoice}`;
  } else if (playerChoice === "scissor" && computerChoice === "rock") {
    return `You lose :(! ${computerChoice} beats ${playerChoice}`;
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    return `You lose :(! ${computerChoice} beats ${playerChoice}`;
  } else {
    return `Yay you win! ${playerChoice} beats ${computerChoice}`;
  }
}
myChoice = "scissOr";

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(myChoice, getComputerChoice()));
  }
}
