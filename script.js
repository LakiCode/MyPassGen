// Assignment code here
// create array's for characters
var lowChar = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperChar = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specChar = ["@", "!", "$", "#", "&", "-", "ô"];

// var allChar = lowChar + "," + upperChar + "," + numChar + "," + specChar;
// create var to hold all selected array's
// var allChar = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //
  // Promt user for password criteria
  // yes or no for lowercase
  var promtLowChar = confirm (
    "Do you want to include lowercase characters in the password?");
  if (promtLowChar) {
    // add lowercase characers to var allChar
    var allChar = lowChar; // or var allChar = [].concat(lowChar);
  } else {
    // alert message that lower case characters are mandatory and need to be selected
    alert ("lower case characters are mandatory ");
    writePassword();

    //allChar = "";
  }
  // yes or no for uppercase character
  var promtUpperChar = confirm(
    "Do you want to include UPPERcase characters in the password?");

  if (promtUpperChar) {
    // add lowercase characers to var allChar
    //allChar = allChar + "," + upperChar;
    allChar = [].concat(lowChar, upperChar);
  } else {
    alert ("lower case characters are mandatory ");
    writePassword();
  }
  // yes or no for numeric character
  var promtNumChar = confirm(
    "Do you want to include numeric characters  in the password?");
  if (promtNumChar) {
    // add lowercase characers to var allChar
    allChar = [].concat(lowChar, upperChar, numChar);
  } else {
    alert ("numbers characters are mandatory! ");
    writePassword();
  }
  //yes or no for special caracter
  var promtSpecChar = confirm(
    "Do you want to include special characters  in the password?");
  if (promtSpecChar) {
    // add lowercase characers to var allChar
    allChar = [].concat(lowChar, upperChar, numChar, specChar);
  } else {
    allChar = [].concat(lowChar, upperChar, numChar);
  }
  // log user selections
  console.log(allChar.length);
  for (var i = 0; i < allChar.length; i++) {
    console.log(allChar[i]);
  }

  // generatePassword();
  var password = allChar;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
