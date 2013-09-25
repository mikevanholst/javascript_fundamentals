// Exercises: The DOM

// EXERCISE: The Logo Hijack

// No homepage is safe from the logo bandit!

// Open up www.google.com in Chrome or Firefox, and open up the console.
// Find the Google logo and store it in a variable.
// Modify the source of the logo IMG so that it's a Yahoo logo instead.
// Find the Google search button and store it in a variable.
// Modify the text of the button so that it says "Yahooo!" instead.

// yahooLogo = http://l.yimg.com/rz/d/yahoo_frontpage_en-CA_s_f_p_101x50_frontpage.png
// googleButton = <button class="gbqfba" aria-label="Google Search" id="gbqfba" name="btnK"><span id="gbqfsa">Google Search</span></button>
// see 






// EXERCISE: About Me

// Cuz every webpage needs an "About" section.

// Start with this HTML and save it as "aboutme.html":

  
// Add a script tag to the bottom.
// Change the body style so it has a font-family of "Arial, sans-serif".
// Replace each of the spans (nickname, favorites, hometown) with your own information.
// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8"/>
//   <title>About Me</title>
//   <style type="text/css">
//     .listitem {
//       color: red;
//     }

//   </style>
// </head>
// <body>
//   <h1>About Me</h1>
  
//   <ul>
//     <li >Nickname: <span id="nickname">x</span>
//     <li>Favorites:  <span id="favorites">y</span>
//     <li>Hometown: <span id="hometown">z</span>
//    </ul>
  
//  </body>
// <script type="text/javascript">
//   document.getElementsByTagName("body")[0].style.fontFamily = "Arial, sans-serif";
//   document.getElementById("nickname").innerHTML = "Spiderman";
//   document.getElementById("favorites").innerHTML = "Sushi" ;
//   document.getElementById("hometown").innerHTML = "London";

//   listArray = document.getElementsByTagName("li");
//   for (var i = listArray.length - 1; i >= 0; i--) {
//     listArray[i].className = "listitem"
//   };

//   var mikeImage = document.createElement("img");
//   mikeImage.src = "mike_avatar.jpg";
//   document.getElementsByTagName("body")[0].appendChild(mikeImage);

// </script>

// </html>


// EXERCISE: The Book List

// Keep track of which books you read and which books you want to read!

// Create a webpage with an h1 of "My Book List".
// Add a script tag to the bottom of the page, where all your JS will go.
// Copy the array of books from the previous exercise.
// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// Bonus: Use a ul and li to display the books.
// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// Bonus: Change the style of the book depending on whether you have read it or not.



