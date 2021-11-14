//The event will trigger once the button is clicked
document.querySelector("#generate").addEventListener("click", writePassword);

// Assignment Code
var lowercaseCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];

// Declaring a variable
var confirmPasswordLength = "";
var confirmLowercaseCharacter;
var confirmUppercaseCharacter;
var confirmNumberCharacter;
var confirmSpecialCharacter;

// Generate the password by considering the random characters based on users criteria
function generatePassword() {
  var confirmPasswordLength = (prompt("How many characters would you like your password to contain?"));

  // Loop: if answer is outside the parameters or false
  while (confirmPasswordLength <= 7 || confirmPasswordLength > 128) {
    alert("Password length must be between 8-128 characters. Please try again");
    var confirmPasswordLength = (prompt("How many characters would you like your password to contain?"));
  }

  // Repeat back how many charactes the user will have
  alert(`Your password will have ${confirmPasswordLength} characters`);

  // Determine parameters of password
  var confirmLowercaseCharacter = confirm("Click OK to confirm if you would like to include lowercase characters.");
  var confirmUppercaseCharacter = confirm("Click OK to confirm if you would like to include uppercase characters.");
  var confirmNumberCharacter = confirm("Click OK to confirm if you would like to include numeric characters.");
  var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters.");

  // Loop: if answer is outside the parameters or false
  while (confirmUppercaseCharacter === false && confirmLowercaseCharacter === false && confirmSpecialCharacter === false && confirmNumberCharacter === false) {
    alert("You must choose at least one parameter");
    var confirmLowercaseCharacter = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUppercaseCharacter = confirm("Click OK to confirm if you would like to include uppercase characters");
    var confirmNumberCharacter = confirm("Click OK to confirm if you would like to include numeric characters");
    var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
  }

  // Assigning an action
  var passwordCheck = []

  if (confirmLowercaseCharacter) {
    passwordCheck = passwordCheck.concat(lowercaseCharacter)
  }

  if (confirmUppercaseCharacter) {
    passwordCheck = passwordCheck.concat(uppercaseCharacter)
  }

  if (confirmNumberCharacter) {
    passwordCheck = passwordCheck.concat(numberCharacter)
  }

  if (confirmSpecialCharacter) {
    passwordCheck = passwordCheck.concat(specialCharacter)
  }

  console.log(passwordCheck)

  // An empty string will be filled based on the selection by generating the random character from the array.
  var randomPassword = ""

  for (var i = 0; i < confirmPasswordLength; i++) {
    randomPassword = randomPassword + passwordCheck[Math.floor(Math.random() * passwordCheck.length)];
    console.log(randomPassword)
  }
  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
