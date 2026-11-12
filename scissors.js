const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  const humanChoice = prompt("Choose rock, paper, or scissors:");
  return humanChoice ? humanChoice.toLowerCase() : "";
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`Its a tie! Both chose ${humanChoice}`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log(
      `YOU WIN! You chose ${humanChoice}, Computer chose ${computerChoice}`,
    );
    humanScore++;
  } else {
    console.log(
      `You loose. You chose ${humanChoice}, Computer chose ${computerChoice}`,
    );
    computerScore++;
  }
  console.log(`Score -> Human: ${humanScore} | Computer: ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
