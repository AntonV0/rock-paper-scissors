// Function that takes a single parameter (rock, paper or scissors) from the user.
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error!");
  }
};

//console.log(getUserChoice('Rock'));

// Function where the computer picks either rock, paper or scissors.
function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      return "Error!";
  }
};
//console.log(getComputerChoice());

// Function to determine the winner.
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game is a tie!";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }

  if (userChoice === "bomb") {
    return "BOOM - YOU WIN!";
  }
};

// Testing the Game
//console.log(determineWinner('paper', 'paper'));
//console.log(determineWinner('paper', 'scissors'));
//console.log(determineWinner('paper', 'rock'));

// Playing the game
const playGame = () => {
  const userChoice = getUserChoice("paper"); // Change user choice here
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
