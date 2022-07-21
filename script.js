// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





//step 1 - click button to generate password
//step 2 - window prompt for password criteria
//step 3 - select criteria
//step 4 - window prompt for length of password
//step 5 - user chooses length of 8 - 128 characters
//step 6 - window prompt for character types to include
//step 7 - user confirms whether or not to include lowercase, uppercase, numeric, and / or special characters
//step 8 - when user answers each prompt, their input should be validated and at least one character type should be selected
//step 9 - when all prompts are answered, a password is generated that matches the selected criteria
//step 10 - when the password is generated, it is either displayed in an alert or written to the page



//add functions

//Random lowercase letters
function generatePassword(){
    getRandomLower();
    
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
//math.random generates a random number (tied to letters of the alphabet), and math.floor returns the values to a specified range (in this case 26, because there are 26 letters in the alphabet)

//Random uppercase letters
function generatePassword(){
    getRandomUpper();
    
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
//same syntax, same idea

//Random numbers
function generatePassword(){
    getRandomNumber();
    
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
//48 through 57 are numbers 0 through 9 in the browser character set, so we need a string of 10 for our range

//Random symbol
var symbols = '!@#$%^&*(){}[]=<>/,.';
function generatePassword(){
    getRandomSymbol();
    return symbols[Math.floor(Math.random() * symbols.length)];
}
//declare the symbols variable string, then use similar math syntax to generate a random one. Instead of using numbers, multiplying by symbols.length will allow access to the entire list of symbols

