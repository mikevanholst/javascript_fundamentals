// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

// function greaterNum(a,b) {

//   if (a > b) {
//     maxNum = a;
//   }else{
//     maxNum = b;
//   }
//   console.log("The greater number of " + a + " and " + b + " is " + maxNum);
// }

// greaterNum(5,10);
// greaterNum(9,8);
// greaterNum(5,5);


// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

// function helloWorld(languageCode){
//   if(languageCode === "es"){
//     return "Hola Mundo";
//   }else if(languageCode === "de"){
//     return "Hallo Welt";
//   }else{
//     return "Hello World";
//   }
// }

// console.log(helloWorld("es"));
// console.log(helloWorld("de"));
// console.log(helloWorld());

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

// function assignGrade(numberScore){
//   if (numberScore < 50){
//     result = "F";
//   }else if (numberScore < 60){
//     result = "D";
//   }else if (numberScore < 70){
//     result = "D";
//   }else if (numberScore < 80){
//     result = "B";
//   }else if (numberScore === "Kobayashi Maru"){
//     result = "Cadet Kirk, you have scored an A+";
//   }else{
//     result = "A";
//   }
//   return console.log(result);
// }

// assignGrade(75);
// assignGrade(45);
// assignGrade(95);
// assignGrade("Kobayashi Maru");


// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

// function pluralize(number, noun){
//   if (number === 1){
//     result = ("1 " + noun);
//   }else{
//     result = (number + " " + noun + "s");
//   }
//   console.log(result);
// }

// pluralize(76, "trombone");
// pluralize(1, "Partridge");
// pluralize(95,"Parie dogs");



