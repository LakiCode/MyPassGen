// Assignment code here
// Promt user for password criteria
// yes or no for lowercase
var promtLowChar = window.prompt ("Do you want to include lowercase letters in the password?");
// yes or no for uppercase character
var promtUpperChar = window.prompt ("Do you want to include uppercase letters in the password?");
// yes or no for numeric character
var promtNumChar = window.prompt ("Do you want to include numeric characters  in the password?");
//yes or no for special caracter
var promtSpecChar = window.prompt ("Do you want to include numeric characters  in the password?");
// log user selections
console.log (promtLowChar, promtUpperChar, promtNumChar, promtSpecChar);

// create array's for characters
var lowChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numChar = [0,1,2,3,4,5,6,7,8,9];
var specChar = ["@", "!", "$", "#", "&", "-", "ô"]
console.log (lowChar);
var allChar = lowChar + "," + upperChar + "," + numChar + "," + specChar;
alert (allChar);
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 // var password = generatePassword();
 var password = allChar;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
