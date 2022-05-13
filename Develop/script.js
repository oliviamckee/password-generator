// Assignment code here

//array for each password criteria 
 var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 
 var numberCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
 var specialCharacters = ['!', '"', '#', '$', '%', '&', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '@', '^', '_', '`', '|', '~'];


function generatePassword() {
  var finalPassword = "";
 
//ask user what character types to include and validate input
  var passwordLength= window.prompt("How many characters would you like your password to have?");
  window.alert("You have requested a password that is " + passwordLength + " characters in length.");
  var lowercase = window.confirm("Would you like to include lowercase letters?");
    if(lowercase) {
      window.alert("Your password will contain lowercase characters.");
    }
    else {
      window.alert("Your password will NOT contain lowercase characters.");
    }
  var uppercase = window.confirm("Would you like to include uppercase letters?");
    if(uppercase) {
      window.alert("Your password will contain uppercase characters.");
    }
    else {
      window.alert("Your password will NOT contain uppercase characters.");
    }
  var numbers = window.confirm("Would you like to include numbers?");
    if(numbers) {
      window.alert("Your password will contain numbers.");
    }
    else {
      window.alert("Your password will NOT contain numbers.");
    }
  var special = window.confirm("Would you like to include special characters?");
    if(special) {
      window.alert("Your password will contain special characters.");
    }
    else {
      window.alert("Your password will NOT contain special characters.");
    }
    
  for (let i = 0; i < passwordLength; i++) {
    //pick random category thats available

    
  }

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
