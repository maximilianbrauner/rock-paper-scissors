let playerScore = 0;
let computerScore = 0;
let tieCounter = 0;

const div = document.createElement("div");
const scoreDiv = document.createElement("div");
const finalScore = document.createElement("div");
const finalBtn = document.createElement("href");
const resultDiv = document.querySelector(".result");

div.setAttribute(
  "style",
  "display: flex; flex-direction: column; justify-content: center; align-items: center; font-size: 28px; gap: 15px;"
);
scoreDiv.setAttribute(
  "style",
  "display: flex; justify-content: center; align-items: center; font-size: 28px; padding: 15px;"
);
finalBtn.setAttribute(
  "style",
  "font-size: 15px; border-radius: 6px; border-style: none; color: #fca311; background: #22223b; padding: 10px; cursor: pointer;"
);
function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}
function updateScore() {
  scoreDiv.textContent = `Player: ${playerScore} Computer: ${computerScore} `;
  resultDiv.appendChild(scoreDiv);
}
function playRound(playerSelection) {
  computerSelection = getComputerChoice();
  if (
    (playerSelection == "rock" && computerSelection == "scissor") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissor" && computerSelection == "paper")
  ) {
    playerScore += 1;
    updateScore();
    div.textContent = `${playerSelection.slice()} beats ${computerSelection}. you win. `;
    if (playerScore == 5) {
      gameOver();
    }
  } else if (playerSelection == computerSelection) {
    tieCounter += 1;
    div.textContent = `it's a tie. for the ${tieCounter} time. you both choose ${playerSelection}`;
  } else {
    computerScore += 1;
    updateScore();
    div.textContent = `${computerSelection} beats ${playerSelection}. computer wins. `;
    if (computerScore == 5) {
      gameOver();
    }
  }
  resultDiv.appendChild(div);
}

function gameOver() {
  finalScore.textContent = `the game is over. the final score is ${playerScore}:${computerScore}`;
  finalBtn.textContent = "Play again!";
  div.appendChild(finalScore);
  div.appendChild(finalBtn);
  button.forEach((elem) => {
    elem.disabled = true;
  });
  finalBtn.addEventListener("click", () => {
    window.location.reload();
  });
}

const button = document.querySelectorAll(".buttons");
// querySelectorAll returns a Nodelist which is an array that's why i have to to loop over the array with forEach()
button.forEach((inp) =>
  inp.addEventListener("click", () => {
    playRound(inp.value);
  })
);
