// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  //Ask for password length
  let passwordLength = parseInt(prompt("How long should the password be?"));

  //Minimum of 8 characters, max of 128
  if (passwordLength < 8 || passwordLength > 128) {
     alert("Error, invalid password length. \nPlease choose a password greater than 8 and less than 128.");
     return "";
  }


  //Ask for which variables to include in password
  var includeLowercase = confirm("Include lowercase letters in password?");
  var includeUppercase = confirm("Include uppercase letters in password?");
  var includeNumbers = confirm("Include numbers in password?");
  var IncludeSpecialCharacters = confirm("Include special characters?");

  //Validate types of characters
  if (!includeLowercase && !includeUppercase && !includeNumbers && !IncludeSpecialCharacters) {
    alert("Error, invalid character types.\nPlease include at least one type of character.")
    return "";
  }

  //Generate random password
  let passwordCharacters = [];
  const lowercase = "abcdefghijklmnopqrstuvwxyz"
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = "1234567890"
  const specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  //Include lowercase letters
  if (includeLowercase) {
    passwordCharacters = passwordCharacters.concat(lowercase.split(""));
  }

  //Include uppercase
  if (includeUppercase) {
    passwordCharacters = passwordCharacters.concat(uppercase.split(""));
  }

  //Include numbers
  if (includeNumbers) {
    passwordCharacters = passwordCharacters.concat(numbers.split(""));
  }

  //Include special characters
  if (IncludeSpecialCharacters) {
    passwordCharacters = passwordCharacters.concat(specialCharacters.split(""));
  }

  let results = "";
  for (var i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * passwordCharacters.length);
    let randomcharacter = passwordCharacters[randomIndex];
    results+= randomcharacter;
  }


  return results;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

