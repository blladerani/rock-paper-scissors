const option = document.querySelectorAll(".option");
const scoreComputer = document.querySelector(".score-computer");
const scoreUser = document.querySelector(".score-user");

let userScore = 0;
let computerScore = 0;
let userChoose;
displayScores();
option.forEach((element) => {
  element.addEventListener("mousedown", (e) => {
    e.currentTarget.classList.add("option-clicked");
  });
});

option.forEach((element) =>
  element.addEventListener("mouseup", (e) => {
    e.currentTarget.classList.remove("option-clicked");
  })
);
const choices = ["rock", "paper", "scissors"];

function computerPlay() {
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(userChoice, computerChoice) {
  if (userChoice == "rock") {
    switch (computerChoice) {
      case "rock":
        return "tie";
      case "paper":
        return "computer";
      case scissors:
        return "user";
    }
  }
  if (userChoice == "paper") {
    switch (computerChoice) {
      case "rock":
        return "user";
      case "paper":
        return "tie";
      case "scissors":
        return "computer";
    }
  }
  if (userChoice == "scissors") {
    switch (computerChoice) {
      case "rock":
        return "computer";
      case "paper":
        return "user";
      case "scissors":
        return "tie";
    }
  }
}

function displayScores() {
  scoreComputer.textContent = computerScore;
  scoreUser.textContent = userScore;
}

option.forEach((element) => {
  element.addEventListener("click", (e) => {
    userChoose = e.currentTarget.classList[0];
    let winner = playRound(userChoose, computerPlay());
    if (winner == "tie") console.log("tie");
    if (winner == "user") userScore++;
    if (winner == "computer") computerScore++;
    displayScores();
    if (computerScore == 3 || userScore == 3) {
      alert(computerScore == 3 ? "Computer won!" : "User won!");
      userScore = 0;
      computerScore = 0;
      displayScores();
    }
  });
});
