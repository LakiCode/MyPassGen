// Assignment code here
// create array's for characters
var lowChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numChar = [0,1,2,3,4,5,6,7,8,9];
var specChar = ["@", "!", "$", "#", "&", "-", "ô"]
console.log (lowChar);
// var allChar = lowChar + "," + upperChar + "," + numChar + "," + specChar;
// crate var to hold all selected array's
var allChar = "";
alert (allChar);
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
// 
// Promt user for password criteria
// yes or no for lowercase
var promtLowChar = window.prompt ("Do you want to include lowercase characters in the password? Enter 'Yes' or 'No' to choose");
  if (promtLowChar === 'yes' || promtLowChar === 'Yes') {
    // add lowercase characers to var allChar
    allChar = lowChar;
  }
  else {
    allChar = "";
  }
// yes or no for uppercase character
var promtUpperChar = window.prompt ("Do you want to include uppercase characters in the password?Enter 'Yes' or 'No' to choose");
  if (promtUpperChar === 'yes' || promtUpperChar === 'Yes') {
    // add lowercase characers to var allChar
    allChar = allChar + "," + upperChar;
  }
  else {
    allChar = allChar;
  };
// yes or no for numeric character
var promtNumChar = window.prompt ("Do you want to include numeric characters  in the password?Enter 'Yes' or 'No' to choose");
if (promtNumChar === 'yes' || promtNumChar === 'Yes') {
  // add lowercase characers to var allChar
  allChar = allChar + "," + numChar;
}
else {
  allChar = allChar;
};
//yes or no for special caracter
var promtSpecChar = window.prompt ("Do you want to include numeric characters  in the password?Enter 'Yes' or 'No' to choose");
if (promtSpecChar === 'yes' || promtSpecChar === 'Yes') {
  // add lowercase characers to var allChar
  allChar = allChar + "," + specChar;
}
else {
  allChar = allChar;
};
// log user selections
console.log (promtLowChar, promtUpperChar, promtNumChar, promtSpecChar);
 // var password = generatePassword();
 var password = allChar;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
