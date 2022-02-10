let raceNumber = Math.floor(Math.random() * 1000);

// Begin by checking that a random number between 0 and 1000 is generated.
// console.log(raceNumber);

let earlyArrival = true;

let runnerAge = 7;

// For a runner who is over 18 and arrives early, add 1000 to their number.
if (runnerAge > 18 && earlyArrival === true) {
  raceNumber += 1000;
}

// Use if, else if, and else statements to tell the runner when their race starts.
if (runnerAge > 18 && earlyArrival === true) {
  console.log(`Runner ${raceNumber}, you will run at 09:30am.`);
} else if (runnerAge > 18 && earlyArrival !== true) {
  console.log(`Runner ${raceNumber}, you will run at 11:00am.`);
} else if (runnerAge < 18) {
  console.log(`Runner ${raceNumber}, you will run at 12:30pm.`);
} else {
  console.log(
    `Runner ${raceNumber}, you are exactly 18! Please see the registration desk.`
  );
}
