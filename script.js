
var newPassword = document.querySelector("#password");
var generateButton = document.querySelector("#generate");
var copyButton = document.querySelector("#copy");


var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "~", ">", "<", "?", "{", "}", "[", "]", ".", ",", " "];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var randomCharacter = "";
// var characeterSet = specialCharacter + number + lowerCase + upperCase;
var randomText = "";
// var ranNum = Math.floor(Math.random() * 128) + 8;



function randomGenerator() {
    randomText = "";

    var pwLength = prompt("how long do you want your password? (Please type number only)")
    if (isNaN(pwLength) === true) {
        length = prompt("Numbers only");
        console.log(pwLength);

    } else {
        console.log(pwLength);
        var userAnswer = prompt("Choose either Number, Alphabet, or Special Character to create random password")
        userAnswer = userAnswer.toLowerCase();

        console.log(userAnswer);

        if (userAnswer == "number" || userAnswer == "numbers") {
            for (var i = 0; i < pwLength; i++) {
                randomCharacter = number[Math.floor(Math.random() * number.length)];
                randomText += randomCharacter;
            }
        }

        else if (userAnswer == "alphabet" || userAnswer == "alphabets") {
            for (var i = 0; i < pwLength; i++) {
                randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
                randomText += randomCharacter;
            }
        }

        else if (userAnswer == "special case" || userAnswer == "special case") {
            for (var i = 0; i < pwLength; i++) {
                randomCharacter = specialCharacter[Math.floor(Math.random() * specialCharacter.length)];
                randomText += randomCharacter;
            }
        }

        else {
             userAnswer = prompt("Please type out again (Number, Alphabet, or Special Case)")
            userAnswer = userAnswer.toLowerCase();       
        
        }

        newPassword.innerText = randomText;
    }
}

function copyNewPW() {
    newPassword.select();
    newPassword.setSelectionRange(0, 99999);
    document.execCommand("copy");

}

generateButton.addEventListener("click", randomGenerator);
copyButton.addEventListener("click", copyNewPW);









