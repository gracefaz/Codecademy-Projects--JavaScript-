// Function to input how many hours of sleep you got every night of the past week.
const getSleepHours = (day) => {
  day = day.toLowerCase();
  switch (day) {
    case "monday":
      return 6;
    case "tuesday":
      return 7;
    case "wednesday":
      return 8;
    case "thursday":
      return 10;
    case "friday":
      return 7;
    case "saturday":
      return 10;
    case "sunday":
      return 9;
  }
};

// Test the function by calling it multiple times with different inputs for the day argument.
// console.log(getSleepHours('Sunday'));

// Function to add up all of the hours sleep from the past week. Returns the sum.
const getActualSleepHours = () => {
  return (
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday")
  );
};

// Test the function.
// console.log('This week you slept for ' + getActualSleepHours() + ' hours!');

// Function to calculate the ideal number of hours sleep per week that you should be getting, based on your input. For example if you wanted to get 8 hours sleep per night, your ideal number of hours per week would be 8 * 7 = 56.
const getIdealSleepHours = (num) => {
  return num * 7;
};
// Test the function.
// console.log(getIdealSleepHours(8));

// Main function which calculates how much sleep you're getting, and lets you know whether you need more or less, based on the comparisons of actualSleepHours and idealSleepHours.
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours) {
    return (
      "You got the perfect amount of sleep! You slept for " +
      getActualSleepHours() +
      " hours!"
    );
  } else if (
    actualSleepHours > idealSleepHours &&
    getActualSleepHours() - getIdealSleepHours(8) !== 1
  ) {
    return (
      "You got more than enough sleep! You slept for " +
      (getActualSleepHours() - getIdealSleepHours(8)) +
      " hours over the recommended amount."
    );
  } else if (getActualSleepHours() - getIdealSleepHours(8) === 1) {
    return (
      "You got more than enough sleep! You slept for " +
      (getActualSleepHours() - getIdealSleepHours(8)) +
      " hour over the recommended amount."
    );
  } else if (getIdealSleepHours(8) - getActualSleepHours() === 1) {
    return (
      "You didn't get enough sleep! You need " +
      (getIdealSleepHours(8) - getActualSleepHours()) +
      " more hour. Get some rest."
    );
  } else {
    return (
      "You didn't get enough sleep! You need " +
      (getIdealSleepHours(8) - getActualSleepHours()) +
      " more hours. Get some rest."
    );
  }
};

// Prints results to the console.
console.log(calculateSleepDebt());
