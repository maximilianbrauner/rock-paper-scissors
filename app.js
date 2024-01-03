let playerScore = 0;
let computerScore = 0;
let tieCounter = 0;
const div = document.createElement("div");
const scoreDiv = document.createElement("div");
const resultDiv = document.querySelector(".result");
div.setAttribute(
  "style",
  "display: flex; justify-content: center; align-items: center; font-size: 28px; padding: 15px;"
);
scoreDiv.setAttribute(
  "style",
  "display: flex; justify-content: center; align-items: center; font-size: 28px; padding: 15px;"
);
function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}
function playRound(playerSelection) {
  computerSelection = getComputerChoice();
  if (
    (playerSelection == "rock" && computerSelection == "scissor") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissor" && computerSelection == "paper")
  ) {
    playerScore += 1;
    div.textContent = `You win. ${playerSelection.slice()} beats ${computerSelection}.`;
    updateScore();
  } else if (playerSelection == computerSelection) {
    tieCounter += 1;
    div.textContent = `It's a tie.. again... You both choose ${playerSelection}`;
  } else {
    computerScore += 1;
    div.textContent = `Computer wins. ${computerSelection} beats ${playerSelection}.`;
    updateScore();
  }
  resultDiv.appendChild(div);
}
function updateScore() {
  scoreDiv.textContent = `Player score: ${playerScore} Computer score: ${computerScore} `;
  resultDiv.appendChild(scoreDiv);
}
const button = document.querySelectorAll(".buttons");
// querySelectorAll returns a Nodelist which is an array that's why i have to to loop over the array with forEach()
button.forEach((inp) =>
  inp.addEventListener("click", () => {
    playRound(inp.value);
  })
);
