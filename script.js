// Assignment code here
// Promt user for first criteria
var lowChar = window.prompt ("Do you want to include lowercase letters in the password?");
var upperChar = window.prompt ("Do you want to include uppercase letters in the password?");
var numChar = window.prompt ("Do you want to include numeric characters  in the password?");
var specChar = window.prompt ("Do you want to include numeric characters  in the password?");
// log user selections
console.log (lowChar, upperChar, numChar, specChar);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
