// Assignment code here

window.setTimeout(function() {

var charNumber
var charUnique 
var charNumeric 
var charCases 
var password



  button.onclick = function(){startGame()}  


startGame ()
function startGame() {
  button.onclick = function(){startGame()} 
alert("Welcome, please generate your password today!");

// Using a function pointer:

getNumber()
function getNumber() {

  charNumber = (prompt("How many characters would you like in your password? Please choose between 8-128 characters." , ""));
  console.log (charNumber);
  if (charNumber >= 8 && charNumber <= 128) 
      {
      alert("That matches requirements", "");
     }
     else {
      alert("You will need to choose a different number");
      getNumber();
}
}

  //Unique characters
getUnique ()
function getUnique () {
  charUnique=prompt("Would you like to add special characters into your password? Type Y for yes and N for no." , "");
  console.log (charUnique);

  if (charUnique.toLowerCase() === "y")
  {
    alert("Thanks so much.");
  }
  else if (charUnique.toLowerCase() === "n") {
   alert("We have noted your answer.");
  }
  else if (charUnique.toLowerCase() === "null"){
    getCases ();
  }
  else {
    alert("You will need to answer with a Y or N.")
    getUnique ();
  }

}

getNumeric ()
function getNumeric () {
  charNumeric=prompt("Would you like to add numeric characters to your password? Type Y for yes and N for no." , "");
  console.log (charNumeric);

  if (charNumeric.toLowerCase() === "y")
  {
    alert("Thanks so much.");
  }
  else if (charNumeric.toLowerCase() === "n") {
   alert("We have noted your answer.");
  }
  else if (charNumeric.toLowerCase() === "null"){
    getCases ();
  }
  else {
    alert("You will need to answer with a Y or N.")
    getNumeric ();
  }
}

getCases ()
function getCases () {
  charCases=prompt("Would you like to use capital letters in your password? Type Y for yes and N for no." , "");
  console.log (charCases);

  if (charCases.toLowerCase() === "y")
  {
    alert("Thanks so much.");
  }
  else if (charCases.toLowerCase() ==="n") {
   alert("We have noted your answer.");
  }
  else if (charCases.toLowerCase() === "null"){
    getCases ();
  }
  else {
    alert("You will need to answer with a Y or N.")
    getCases ();
  }
}

alert("Please see your password below.")



var charSet = "";
var length = charNumber;
var password


  if (charCases.toLowerCase () == "y" && charNumeric.toLowerCase()  == "y" && charUnique.toLowerCase() == "y") {
  charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
 }

 else if (charCases.toLowerCase () == "y" && charNumeric.toLowerCase()  == "n" && charUnique.toLowerCase() == "y") {
  charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
 }

 else if (charCases.toLowerCase () == "y" && charNumeric.toLowerCase()  == "y" && charUnique.toLowerCase() == "n") {
  charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
 }

 else if (charCases.toLowerCase () == "n" && charNumeric.toLowerCase()  == "y" && charUnique.toLowerCase() == "y") {
  charSet = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
 }
 else if (charCases.toLowerCase () == "y" && charNumeric.toLowerCase()  == "n" && charUnique.toLowerCase() == "n") {
  charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
 }

 else if (charCases.toLowerCase () == "n" && charNumeric.toLowerCase()  == "y" && charUnique.toLowerCase() == "n") {
  charSet = "abcdefghijklmnopqrstuvwxyz0123456789";
 }

 else if (charCases.toLowerCase () == "n" && charNumeric.toLowerCase()  == "n" && charUnique.toLowerCase() == "y") {
  charSet = "abcdefghijklmnopqrstuvwxyz!@#$%^&*";
 }
 else if (charCases.toLowerCase () == "n" && charNumeric.toLowerCase()  == "n" && charUnique.toLowerCase() == "n") {
  charSet = "abcdefghijklmnopqrstuvwxyz";
 }

  var password = "";
  for (var i = 0; i < length; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

console.log (password);
document.getElementById("password").value = password;
}




}, 500);