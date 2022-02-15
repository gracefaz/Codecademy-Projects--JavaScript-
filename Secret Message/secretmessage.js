// Task: Using array methods, you will transform an array of strings into a secret message!
// You should consult the Mozilla Developer Network (MDN) for reference on any method with
// which you are not familiar.

let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

// Start by checking the length of the array. (24).
// console.log(secretMessage.length);

// Using the .pop() method removes the last element.
secretMessage.pop();
// Print the new array and check that its length is one less than before. (23).
// console.log(secretMessage);
// console.log(secretMessage.length);

// Use the .push() method to add two words to the array.
secretMessage.push("to", "Program");
// console.log(secretMessage);

// Change the word 'easily' to 'right' by accessing the index and replacing it.
secretMessage[7] = "right";
// console.log(secretMessage);

// Use the .shift() method to remove the first element of the list.
secretMessage.shift();
// console.log(secretMessage);

// Use the .unshift() method to add the word 'Programming' to the beginning of the array.
secretMessage.unshift("Programming");
// console.log(secretMessage);

// Use the .splice() method to remove the words 'get', 'right', 'the', 'first', 'time' and replace them with the word 'know'.
secretMessage.splice(6, 5, "know");
// console.log(secretMessage);

// Use console.log() and .join() to print the secret message as a sentence.
console.log(secretMessage.join(" "));
