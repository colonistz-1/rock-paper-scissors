// Game Script
let wins = 0;

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
  const computer = computerChoice();
  const rock = document.getElementById("rock");
  const scissors = document.getElementById("scissors");
  const paper = document.getElementById("paper");

  rock.removeEventListener("click", handleRockClick);
  scissors.removeEventListener("click", handleScissorsClick);
  paper.removeEventListener("click", handlePaperClick);

  function handleRockClick() {
    const user = "rock";
    const result = compare(user, computer);
    displayResult(result);
  }

  function handleScissorsClick() {
    const user = "scissors";
    const result = compare(user, computer);
    displayResult(result);
  }

  function handlePaperClick() {
    const user = "paper";
    const result = compare(user, computer);
    displayResult(result);
  }

  rock.addEventListener("click", handleRockClick);
  scissors.addEventListener("click", handleScissorsClick);
  paper.addEventListener("click", handlePaperClick);
}

function compare(user, computer) {
  if (user === computer) {
    return "tie";
  } else if (user === "rock") {
    if (computer === "scissors") {
      wins += 1;
      return "win";
    } else {
      return "lose";
    }
  } else if (user === "scissors") {
    if (computer === "paper") {
      wins += 1;
      return "win";
    } else {
      return "lose";
    }
  } else if (user === "paper") {
    if (computer === "rock") {
      wins += 1;
      return "win";
    } else {
      return "lose";
    }
  }
}

function displayResult(result) {
  document.getElementsByClassName("score")[0].innerHTML = `Wins: ${wins}`;
}

window.addEventListener("load", function () {
  playGame();
});
