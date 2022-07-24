// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
    //if 'max' is not defined, assume we want range from 0 to min
    if (!max) {
        max = min
        min = 0
    }

    //for random value
    var rand = Math.random()
    return Math.floor(min + (1 - rand) + rand*max)
}

function getRandomItem(list) {
    return list[randomInt(list.length)]
}

var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbolList = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "?"]
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var optionsCart = []



//Here I'm adding the generate password function
function generatePassword() {
    var userInput = window.prompt("How many characters do you want your password to be?")
    var passwordLength = parseInt(userInput)

    if (isNaN(passwordLength)) {
        window.alert("Please specify a unit between 8 and 128")
        return
    }

    if (passwordLength < 8 || passwordLength > 128) {
        window.alert("Password must be between 8 and 128 characters")
        return
    }

//Random numbers
var userWantsNumbers = window.confirm("Would you like to include numbers in your password?")
    if (userWantsNumbers === true) {
     optionsCart.push(numberList)
    }


//Random lowercase letters
var userWantsLowercase = window.confirm("Would you like to include lowercase letters in your password?")
    if (userWantsLowercase === true) {
    optionsCart.push(lowercaseList)
    }


//Random uppercase letters
var userWantsUppercase = window.confirm("Would you like to include uppercase letters in your password?")
    if (userWantsUppercase === true) {
        optionsCart.push(uppercaseList)
    }



//Random symbol
var userWantsSymbols = window.confirm("Would you like to include symbols in your password?")
    if (userWantsSymbols === true) {
        optionsCart.push(symbolList)
    }


    var generatedPassword = ""

    for (var i = 0; i < passwordLength; i++) {
        var randomList = getRandomItem(optionsCart)
        var randomChar = getRandomItem(randomList)
    }

}



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
