let story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ["really", "very", "basically"];

let unnecessaryWords = ["extremely", "literally", "actually"];

// Splits the string into individual words and saves them in a new array.
const storyWords = story.split(" ");
// Logs how many words are in the new array 'storyWords'.
console.log("The word count is: " + storyWords.length);

// Filter out the unwanted words from the story. If the words are in the unnecessaryWords array, then they need to be taken out of the story.
const betterWords = storyWords.filter((word) => {
  return !unnecessaryWords.includes(word);
});
// console.log(betterWords);

// Count how many times the overused words appear in the story.
let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;

for (word of storyWords) {
  if (word === "really") {
    reallyCount += 1;
  } else if (word === "very") {
    veryCount += 1;
  } else if (word === "basically") {
    basicallyCount += 1;
  }
}

console.log(" ");
console.log("Really count: ", reallyCount);
console.log("Very count: ", veryCount);
console.log("Basically count: ", basicallyCount);

// Count how many sentences are in the story.
let sentences = 0;
storyWords.forEach((word) => {
  if (word[word.length - 1] === "." || word[word.length - 1] === "!") {
    sentences += 1;
  }
});

console.log(" ");
console.log("The sentence count is: " + sentences);

// Print the betterWords array into a string.
console.log(" ");
console.log(betterWords.join(" "));
