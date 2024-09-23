const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 2);
  if (randomNumber === 0) {
    computerChoice = "Zero";
  }
  if (randomNumber === 1) {
    computerChoice = "One";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === "Zero" && userChoice === "Zero and Odd") {
    result = "You lose!";
  }
  if (computerChoice === "Zero" && userChoice === "Zero and Even") {
    result = "You win!";
  }
  if (computerChoice === "Zero" && userChoice === "One and Odd") {
    result = "You win!";
  }
  if (computerChoice === "Zero" && userChoice === "One and Even") {
    result = "You lose!";
  }

  if (computerChoice === "One" && userChoice === "Zero and Odd") {
    result = "You win!";
  }
  if (computerChoice === "One" && userChoice === "Zero and Even") {
    result = "You lose!";
  }
  if (computerChoice === "One" && userChoice === "One and Odd") {
    result = "You lose!";
  }
  if (computerChoice === "One" && userChoice === "One and Even") {
    result = "You win!";
  }
  resultDisplay.innerHTML = result;
}
