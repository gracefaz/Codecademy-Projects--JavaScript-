// Task: Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.
// There are a few simple rules for translating text to whale language:
// There are no consonants. Only vowels excluding “y”.
// The u‘s and e‘s are extra long, so we must double them in our program.
// Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.

// String you want to input and translate into whale talk.
const input = "I am a blue whale";

// Array containing the vowels.
const vowels = ["a", "e", "i", "o", "u"];

// Empty array ready to fill in a later step.
const resultArray = [];

// Loop iterates through each letter of the input variable text and compares with each letter in our vowels array. All of the 'e' and 'u' characteres are doubled.
for (i = 0; i < input.length; i++) {
  if (input[i] === "e") {
    resultArray.push(input[i]);
  }
  if (input[i] === "u") {
    resultArray.push(input[i]);
  }
  for (j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j]);
    }
  }
}

// console.log(resultArray);

// Joins our resultArray into a single sting and capitalizes.
const resultString = resultArray.join(" ");
console.log(resultString.toUpperCase());
