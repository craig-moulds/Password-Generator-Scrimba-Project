const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];
const passwordEl1 = document.querySelector(".password-el1");
const passwordEl2 = document.querySelector(".password-el2");

function randomChar() {
    let password = "";
    return password += characters[Math.floor(Math.random() * characters.length)];
}

function generatePassword() {
    let passwordOne = "";
    let passwordTwo = "";
    for (let i = 0; i < 16; i++) {
        passwordOne += randomChar();
        passwordTwo += randomChar();
    }
    passwordEl1.value = passwordOne;
    passwordEl2.value = passwordTwo;
}