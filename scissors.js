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
let round = 0;

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

function playGame() {
  if (round < 5) {
    round = round + 1;
    console.log(`Round ${round} of 5`);

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    playGame();
  } else {
    console.log("Game Over! All 5 rounds are complete.");

    if (humanScore > computerScore) {
      console.log("Congrates! You won the match!");
    } else if (computerScore > humanScore) {
      console.log("Computer won the match!");
    } else {
      console.log("The match is a tie!");
    }
  }
}

playGame();
