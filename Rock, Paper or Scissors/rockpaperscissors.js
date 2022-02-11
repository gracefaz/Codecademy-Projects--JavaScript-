// Function to get the user's input. Must be either 'rock', 'paper' or 'scissors'.

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
    console.log("User Input must be either rock, paper, scissors or bomb.");
  }
};

// Function which assigns a random number (between 0 and 2 inclusive) to 'rock', 'paper' or 'scissors'.

const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 4);
  switch (randomNum) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    case 3:
      return "bomb";
  }
};

// Main function which compares the user's choice to the computer's choice and determines the winner.

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game resulted in a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper" || computerChoice === "bomb") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors" || computerChoice === "bomb") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock" || computerChoice === "bomb") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
};

// Testing the function.
// Should print 'The user won!'.
// console.log(determineWinner('scissors', 'paper'));

// Function to tie everything together and play the game.
const playGame = () => {
  const userChoice = getUserChoice("rock");
  const computerChoice = getComputerChoice();
  console.log(`You threw ${userChoice}.`);
  console.log(`The computer threw ${computerChoice}.`);
  return determineWinner(userChoice, computerChoice);
};

// Call the playGame function to play and see the results.
console.log(playGame());

// Note that the last step of this project was to go back over the code and edit it so that if either player throws 'bomb', they win automatically.
