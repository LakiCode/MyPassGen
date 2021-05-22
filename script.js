// Assignment code here
// create array's for characters
var lowChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = "0123456789";
var specChar = "@!$#&-ô{}[]%^&*-+";
var allChar = "";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Promt user for password criteria
  var promptLowChar = confirm(
    "Do you want to include lowercase characters in the password?"
  );

  var promptUpperChar = confirm(
    "Do you want to include uppercase characters in the password?"
  );

  var promptNumChar = confirm(
    "Do you want to include numeric characters  in the password?"
  );
  console.log("did hi select char: " + promptNumChar);
  var promptSpecChar = confirm(
    "Do you want to include special characters  in the password?"
  );

  if (
    promptLowChar === false &&
    promptUpperChar === false &&
    promptNumChar === false &&
    promptSpecChar === false
  ) {
    // uh users need to select somethin

    alert("Need to select minimum one group of characters type!");

    // return;
    writePassword();
  }
  if (promptLowChar) {
    // add lowercase characers to var allChar
    allChar += lowChar;
  }
  // yes or no for uppercase character
  if (promptUpperChar) {
    // add lowercase characers to var allChar
    allChar += upperChar;
  }
  // yes or no for numeric character

  if (promptNumChar) {
    // add lowercase characers to var allChar
    allChar += numChar;
  }

  //yes or no for special caracter

  if (promptSpecChar) {
    // add lowercase characers to var allChar
    allChar += specChar;
  }
}

function generatePassword() {
  // Create var for password lenght min 8 max 128
  var passLenght = prompt(
    "Enter number of characters in your password \n (password can hold between 8 and 128 characters only)"
  );
  console.log(passLenght);
  // Check password lenght criteria
  while (isNaN(passLenght) || passLenght < 8 || passLenght > 128) {
    alert(
      "Password lenght cannot be empty.\n Need to be number, and between 8 and 128 characters! \n Try again!");
      console.log (passLenght);
    
    passLenght = prompt(
      "Enter number of characters in your password \n (minimum 8 and maximum 128 characters)"
    );
  }
  writePassword();

  // new user enter desier password length, time to generate some magic :-)
  var passString = "";
  var allCharStrng = allChar.toString();
  // console.log ("array je bio" + allChar + "a sada je string: " + allCharStrng);
  for (var i = 0; i < passLenght; i++) {
    passString += allCharStrng.charAt(
      Math.floor(Math.random() * allChar.length)
    );
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = passString;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
