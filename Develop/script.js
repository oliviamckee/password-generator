// Assignment code here

//array for each password criteria 
 var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 
 var numberCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
 var specialCharacters = ['!', '"', '#', '$', '%', '&', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '@', '^', '_', '`', '|', '~'];

//question prompts 
function generatePassword() {
  var finalPassword = "";
  var lowercase = window.confirm("Would you like to include lowercase letters?");
  var uppercase = window.confirm("Would you like to include uppercase letters?");
  var numbers = window.confirm("Would you like to include numbers?");
  var special = window.confirm("Would you like to include special characters?");
  return finalPassword;
}


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
