function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissor"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}
function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerSelection.toLowerCase();
  if (playerChoice === computerChoice) {
    return `Ìt's a tie. You both choose ${playerChoice}`;
  }
  switch (playerChoice) {
    case "rock":
      return computerChoice === "scissors"
        ? "You win! Rock beats Scissors"
        : "You lose! Paper beats Rock";
    case "paper":
      return computerChoice === "rock"
        ? "You win! Paper beats Rock"
        : "You lose! Scissors beats Paper";
    case "scissors":
      return computerChoice === "paper"
        ? "You win! Scissors beats Paper"
        : "You lose! Rock beats Scissors";
  }
}
function game() {
  userChoice = prompt("What's your input?").toLowerCase();
  for (let i = 0; i < 5; i++) {
    console.log(playRound(userChoice, getComputerChoice()));
  }
}
