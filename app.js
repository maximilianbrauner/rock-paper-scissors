let playerScore = 0;
let computerScore = 0;
let tieCounter = 0;


const finalScore = document.querySelector(".finalscore");
const finalBtn = document.createElement("href");
const resultDiv = document.querySelector(".result");
const button = document.querySelectorAll(".buttons");
const displayInfo = document.querySelector('.info')
const displayScore = document.querySelector('.score')
const playerPoints = document.querySelector('.playerPoints')
const computerPoints = document.querySelector('.computerPoints')
const playersChoices = document.querySelector(".roundIcons");
const playerIcon = document.querySelector(".playerIcon");
const computerIcon = document.querySelector(".computerIcon");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
  startGame('rock');
});
paperBtn.addEventListener("click", () => {
  startGame('paper');
});
scissorsBtn.addEventListener("click", () => {
  startGame('scissors');
});
finalBtn.setAttribute(
  "style",
  "font-size: 15px; border-radius: 6px; border-style: none; color: #fca311; background: #22223b; padding: 10px; cursor: pointer;"
);
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}
function updateScore() {
  playerPoints.textContent = `Player: ${playerScore}`
  computerPoints.textContent = `Computer: ${computerScore}`
}
function playRound(playerSelection) {
  computerSelection = getComputerChoice();
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    playerScore += 1;
    updateSigns(playerSelection, computerSelection)
    updateScore();
    displayInfo.textContent = `${playerSelection} beats ${computerSelection}.`;
    displayScore.textContent = `You win!`
    if (playerScore == 5) {
      gameOver();
    }
  } else if (playerSelection == computerSelection) {
    tieCounter += 1;
    updateSigns(playerSelection, computerSelection)
    displayInfo.textContent = `it's a tie. for the ${tieCounter} time.`;
    displayScore.textContent =  `you both choose ${playerSelection}`
  } else {
    computerScore += 1;
    updateSigns(playerSelection, computerSelection)
    updateScore();
    displayInfo.textContent = `${computerSelection} beats ${playerSelection}.`;
    displayScore.textContent = `You lose!`
    if (computerScore == 5) {
      gameOver();
    }
  }
}

function gameOver() {
  finalScore.textContent = `the game is over. the final score is ${playerScore}:${computerScore}`;
  finalBtn.textContent = "Play again!";
  resultDiv.appendChild(finalBtn);
  button.forEach((elem) => {
    elem.disabled = true;
  });
  finalBtn.addEventListener("click", () => {
    window.location.reload();
  });
}
function updateSigns(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      playerIcon.textContent = "✊";
      break;
    case "paper":
      playerIcon.textContent = "🖐️";
      break;
    case "scissors":
      playerIcon.textContent = "✌️";
      break;
  }
  switch (computerSelection) {
    case "rock":
      computerIcon.textContent = "✊";
      break;
    case "paper":
      computerIcon.textContent = "🖐️";
      break;
    case "scissors":
      computerIcon.textContent = "✌️";
      break;
  }
}
function startGame(playerSelection) {
  playRound(playerSelection);

}