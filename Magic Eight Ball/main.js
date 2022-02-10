// Variable which allows user to input their name.
let userName = "Grace";

// Add greeting to the user.
userName
  ? console.log(`Hello, ${userName}! What's your question?`)
  : console.log("Hello! What is your quesion?");

// Question the user wants to ask the game.
let userQuestion = "Will I be a software engineer?";

console.log();
console.log(userQuestion);

// Generate random numbers.
let randomNumber = Math.floor(Math.random() * 8);

// Start with the eightBall variable being an empty string.
let eightBall = "";

// Make switch statement with Magic Eight Ball's responses.
switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try agian";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}

// Print the answer to the question.
console.log();
console.log(`Answer: ${eightBall}.`);
