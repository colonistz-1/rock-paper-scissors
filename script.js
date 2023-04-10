// Game Script
let userwins = 0;
let computerwins =0;
let tie = 0;
let user;
let computer;

function handleRockClick() {
  user = "rock";
  const result = compare(user, computer);
  displayResult(result);
}

function handleScissorsClick() {
  user = "scissors";
  const result = compare(user, computer);
  displayResult(result);
}

function handlePaperClick() {
  user = "paper";
  const result = compare(user, computer);
  displayResult(result);
}

function computerChoice() {
  const x = Math.floor(Math.random() * 3) + 1;
  if (x === 1) {
    return "rock";
  } else if (x === 2) {
    return "scissors";
  } else {
    return "paper";
  }
}

function playGame() {
  computer = computerChoice();

  
  const rock = document.getElementById("rock");
  const scissors = document.getElementById("scissors");
  const paper = document.getElementById("paper");
  
  rock.addEventListener("click", handleRockClick);
  scissors.addEventListener("click", handleScissorsClick);
  paper.addEventListener("click", handlePaperClick);
}

function compare(user, computer) {
  console.log(user, computer)
  if (user === computer) {
    tie += 1;
    return "tie";
  } else if (user === "rock") {
    if (computer === "scissors") {
      userwins += 1;
      return "win";
    } else {
      computerwins +=1;
      return "lose";
    }
  } else if (user === "scissors") {
    if (computer === "paper") {
      userwins += 1;
      return "win";
    } else {
      computerwins +=1;
      return "lose";
    }
  } else if (user === "paper") {
    if (computer === "rock") {
      userwins += 1;
      return "win";
    } else {
      computerwins +=1;
      return "lose";
    }
  }
}

function displayResult(result) {
  document.getElementsByClassName("score")[0].innerHTML = `Wins: ${userwins} Computer Wins: ${computerwins} Draws: ${tie}`;
}

window.addEventListener("load", function () {
  playGame();
});