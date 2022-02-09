// Constant variable: temp is 293 K today.
const kelvin = 0;
// Celsius is 273 less than Kelvin.
const celsius = kelvin - 273;
// Equation to convert Celsius to Fahrenheit.
let fahrenheit = celsius * (9 / 5) + 32;
// Fahrenheit normally converts to a decimal so here used the .floor() method to round the result.
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Extra challenge: Convert Celsius to the Newton scale.
// Convert to Newton.
let newton = celsius * (33 / 100);
// Round down.
newton = Math.floor(newton);
// Print result in Newton.
console.log(`The temperature in Newton is ${newton}.`);
