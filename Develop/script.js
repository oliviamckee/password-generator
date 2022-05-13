// Assignment code here

//question prompts 
function generatePassword() {
  var finalPassword = "";
  var lowercase = window.confirm("Would you like to include lowercase letters?");
  var uppercase = window.confirm("Would you like to include uppercase letters?");
  var numbers = window.confirm("Would you like to include numbers?");
  var specialCharacters = window.confirm("Would you like to include special characters?");
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
