// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

function listFavourites(myarray){
  arrayLength = myarray.length;
  for (i = 0; i < arrayLength; i++){
    elementNum = (i + 1);
    if (elementNum % 100 === 11){
      suffixIndex = 11;
    }else if (elementNum % 100 === 12){
      suffixIndex = 12;
    }else if (elementNum % 100 === 13){
      suffixIndex = 13;
    }else if (elementNum < 10) {
       suffixIndex = elementNum;
    }else{
     suffixIndex = elementNum % 10;
    }
    if (suffixIndex === 1){
      suffix = "st";
    }else if (suffixIndex === 2){
        suffix = "nd";
    }else if (suffixIndex === 3){
        suffix = "rd";
    }else{
        suffix = "th";
    }
    returnElement = "My " + elementNum + suffix + " choice is " + myarray[i];
    console.log(returnElement);
  } 
}

listFavourites(["Morya", "Lanto", "Paul the Venetian", "Serapis Bey", "Hilarion", "Nada", "Saint Germain", "Michael", "Jophiel", "Chamuel", "Gabriel", "Raphael", "Uriel", "Zadkiel","Hercules", "Apollo", "Eros", "Purity", "Cyclopea", "Peace", "Arcturus","Kuan Yin", "Pallas Athena", "Liberty"]);


