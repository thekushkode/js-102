// Ceasar Cipher 2
// Doesnt work yet...

function cipher(string) {
    let alph = "abcdefghijklmnopqrstuvwxyz";
    let newString = string;
    for (let i = 0; i < string.length; i++) {
        let char = string.charAt(i);
        let charIndex = alph.indexOf(char);
        let cipherIndex = charIndex - 13;
        console.log(newString);
        if (cipherIndex <= 0) {
            cipherIndex += 26
            newString = newString.replace(string.charAt(i), alph[cipherIndex]);
        } else if (string.charAt(i) === " ") {
            newString += " ";
        } else {
            newString = newString.replace(string.charAt(i), alph[cipherIndex]);
        }
    }
    console.log(newString);
}

cipher("travhf jvgubhg rqhpngvba");