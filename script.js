
var newPassword = document.querySelector("#password");
var generateButton = document.querySelector("#generate");
var copyButton = document.querySelector("#copy");

var randomCharacter = "";

var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "~", ">", "<", "?", "{", "}", "[", "]", ".", ",", " " ];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var characeterSet = specialCharacter + number + lowerCase + upperCase;


var randomText = "";



   var ranNum = Math.floor(Math.random() * 128) + 8;





function randomGenerator() {



    for ( var i = 0; i < ranNum; i++)
    { 
        randomCharacter = characeterSet[Math.floor(Math.random()*characeterSet.length)];
        randomText += randomCharacter;
    }
        

        newPassword.innerText = randomText;
    }


function copyNewPW() {

    newPassword.select();
    newPassword.setSelectionRange(0, 99999);

    document.execCommand("copy");
   

}




generateButton.addEventListener("click", randomGenerator);
copyButton.addEventListener("click", copyNewPW);




// for ( var i = 0; i < 8; i++){

//     var random = Math.floor(Math.random() * 9);
  
//      randomNumber = random + randomNumber; 
//     }; 

// newPassword.innerText = randomNumber;
