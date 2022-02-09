// Constant variable displaying my age.
const myAge = 22;

// This variable will change and so we use the keywork let.
let earlyYears = 2;
earlyYears *= 10.5;

// Since we already accounted for the first two years, we can subtract two from the myAge variable.
let laterYears = myAge - 2;

// Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years.
laterYears *= 4;

// Now can add earlyYears and laterYears to calculate your age in dog years.
const myAgeInDogYears = earlyYears + laterYears;

// Write your name as a lowercase string and store in a constant variable.
const myName = "Grace".toLowerCase();

// Using a string interpolation print your name and age in human years and dog years.
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
