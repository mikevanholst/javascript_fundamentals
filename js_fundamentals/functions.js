// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

// function tellFortune(numberOfChildren, partnersName, geographicLocation, jobTitle) {
//   console.log("You will be a " + jobTitle + " in " + geographicLocation  + " and married to " + partnersName + " with " + numberOfChildren + " kids.");
// }

// tellFortune(2,"Morgan", "London", "teacher");
// tellFortune(3,"Shannon", "Hyde Park", "Singer");
// tellFortune(4,"Bill", "Toronto", "coder");




// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

// function calculateAge(birthYear, currentYear) {
//   age1 = currentYear - birthYear;
//   age2 = currentYear - birthYear - 1;
//  console.log("They are either " + age1 + " or " + age2 + ".");
// }

// calculateAge(1975, 2013);
// calculateAge(1962, 2000);
// calculateAge(1962, 2050);

// function calculateAge(birthYear) {

//  age1 = new Date().getFullYear() - birthYear;
//   age2 = new Date().getFullYear() - birthYear - 1;
//  console.log("They are either " + age1 + " or " + age2 + ".");
// }

// calculateAge(1975);
// calculateAge(1962);
// calculateAge(2012);



// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

// function calculateSupply(age, amountPerDay) {
//   maximumAge = 100;
//  lifetimeQuantity = amountPerDay * (maximumAge - age) * 365;
//  lifetimeQuantity = Number(lifetimeQuantity.toFixed(0));
//  console.log("You will need " + lifetimeQuantity + " to last you until the ripe old age of " + maximumAge);
//  }

// calculateSupply(50, 3.5);
// calculateSupply(25, 1.5);
// calculateSupply(35, 2.35);


// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

// function callCircumference(radius) {
//   circumference = 2 * Math.PI * radius;
//   circumference = Number(circumference.toFixed(1));
//   console.log("The circumference is " + circumference + ".");
// }

// function calcArea(radius) {
//   area =Math.PI * Math.pow(radius,2);
//   area = Number(area.toFixed(0);
//   console.log("The area is " + area + ".");
// }


// callCircumference(10);
// calcArea(10);

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

// function  celsiusToFahrenheit(celsiusTemperature) {
//   fahrenheitTemperature = celsiusTemperature * 9/5+ 32;
//   console.log(celsiusTemperature +"°C is " + fahrenheitTemperature + "°F");
// }

// function fahrenheitToCelsius(fahrenheitTemperature) {
//   celsiusTemperature = (fahrenheitTemperature - 32) * 5/9;
//   console.log(fahrenheitTemperature + "°F is " + celsiusTemperature +"°C");
// }

// celsiusToFahrenheit(100);
// fahrenheitToCelsius(212);
