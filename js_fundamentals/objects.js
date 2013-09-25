// Exercises: Objects

// EXERCISE: The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. 
// It should have properties for title (a string), servings (a number), 
// and ingredients (an array of strings).
// On separate lines (one console.log statement for each), 
// log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

// var favoriteRecipie = {
//   servings: 2,
//   title: "Mole",
//   ingredients: ["cinnamon", "cumin", "cocoa"]
// };

// function displayRecipie(anyrecipie) {
//   console.log(anyrecipie.title);
//   console.log("Serves:" + anyrecipie.servings);
//     console.log("Ingredients:");
//   for (i=0; i< anyrecipie.ingredients.length; i++){
//    console.log(anyrecipie.ingredients[i]);
//   }
// }
 
// displayRecipie(favoriteRecipie);

// EXERCISE: The Reading List

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book 
// and has properties for the title (a string), author (a string), 
// and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title
 // and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it
 // yet or not. If you read it, log a string like 
 // 'You already read "The Hobbit" by J.R.R. Tolkien', 
 // and if not, log a string like 
 // 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

// testBookArray = [

//   {title: "Lord of the Rings",
//    author: "J.R.R. Tolkien",
//    read: true},
   
//   {title: "50 Shades of Grey",
//     author: "Somebody",
//     read: false},
  
//   {title: "Climb the Highest Mountian",
//     author: "Mark & Elizabeth Clare Prophet",
//     read: true},

//   {title: "The Sneetches and Other Stories",
//     author: "Dr. Suess",
//     read: true},
// ];

// function bookStatus(bookArray){
//   for (var i = bookArray.length - 1; i >= 0; i--){
//     if (bookArray[i].read === true){
//       var response = "You already read " + bookArray[i].title + " by " +  bookArray[i].author + ".";
//     }else{
//       response = "You still need to read " + bookArray[i].title + " by " + bookArray[i].author + ".";
//     }
//     console.log(response);  
//   }
// }

// bookStatus(testBookArray);







// EXERCISE: The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

// var wifesFavouriteMovie = {
//   name: "5th Element",
//   duration: "140",
//   stars: ["Bruce Willis", "Mila Jovovitch", "Gary Oldman"]
// };

// function talkAboutMoivie(movie){
//   var result = movie.name + " lasts " + movie.duration + " minutes, and stars: " + movie.stars.join(", ");
//     console.log(result);  
// };

// talkAboutMoivie(wifesFavouriteMovie);
