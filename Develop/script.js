// Assignment code here

//array for each password criteria 
  //#0
 var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  //#1
 var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 
  //#2
 var numberCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  //#3
 var specialCharacters = ['!', '"', '#', '$', '%', '&', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '@', '^', '_', '`', '|', '~'];

var passwordLength = null;


function generatePassword() {
  var finalPassword = "";

//ask user what character types to include and validate input
  passwordLength = window.prompt("How many characters would you like your password to have? Passwords can contain 8 to 128 characters.");
     lengthChecker();
  var criteria = false; 
  while (criteria === false) {
  var lowercase = window.confirm("Would you like to include lowercase letters?");
    if(lowercase) {
      window.alert("Your password will contain lowercase characters.");
      criteria = true;
    }
    else {
      window.alert("Your password will NOT contain lowercase characters.");
    }
  var uppercase = window.confirm("Would you like to include uppercase letters?");
    if(uppercase) {
      window.alert("Your password will contain uppercase characters.");
      criteria = true;
    }
    else {
      window.alert("Your password will NOT contain uppercase characters.");
    }
  var numbers = window.confirm("Would you like to include numbers?");
    if(numbers) {
      window.alert("Your password will contain numbers.");
      criteria = true;
    }
    else {
      window.alert("Your password will NOT contain numbers.");
    }
  var special = window.confirm("Would you like to include special characters?");
    if(special) {
      window.alert("Your password will contain special characters.");
      criteria = true;
    }
    else {
      window.alert("Your password will NOT contain special characters.");
    }
    while (criteria === false) {
      window.alert("You need to select at least one criteria. Please try again.")
      break;
    }
  }
  
  //password generator
  for (let i = 0; i < passwordLength; i++) {
    //pick random category thats available
    let categoryNumber = Math.floor(Math.random() * 4);
    let categoryLegal = false;
    while (!categoryLegal) {
        if(categoryNumber === 0 && lowercase) {
          categoryLegal = true; 
          break; 
        } 
        if(categoryNumber === 1 && uppercase) {
          categoryLegal = true;
          break;
        }
        if(categoryNumber === 2 && numbers) {
          categoryLegal = true;
          break;
        }
        if(categoryNumber === 3 && special) {
          categoryLegal = true;
          break;
        }
        categoryNumber = Math.floor(Math.random() * 4); 
    } 
    //pick random items in each category
    if(categoryNumber === 0) {
        finalPassword = finalPassword + lowercaseCharacters[Math.floor(Math.random() * lowercaseCharacters.length)];
    }
    if(categoryNumber === 1) {
      finalPassword = finalPassword + uppercaseCharacters[Math.floor(Math.random() * uppercaseCharacters.length)];
    }
    if(categoryNumber === 2) {
      finalPassword = finalPassword + numberCharacters[Math.floor(Math.random() * numberCharacters.length)];
    }
    if(categoryNumber === 3) {
      finalPassword = finalPassword + specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }
    
  }

  return finalPassword;
}

function lengthChecker() {
   if (passwordLength >= 8 && passwordLength <= 128) {
        window.alert("You have requested a password that is " + passwordLength + " characters in length.");
      }
   else {
        window.alert("Your entry is invalid. Please enter a number between 8 and 128.");
        passwordLength = window.prompt("How many characters would you like your password to have? Passwords can contain 8 to 128 characters.");
        lengthChecker();
      }
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
