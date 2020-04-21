// Cipher Exercise

// function cipher(string) {
//     let alph = "abcdefghijklmnopqrstuvwxyz";
//     let newString = [];
//     for (let i = 0; i < string.length; i++) {
//         let char = string.charAt(i);
//         let charIndex = alph.indexOf(char);
//         let cipherIndex = charIndex + 13;
//         if (cipherIndex > 26) {
//             cipherIndex -= 26
//             newString.push(alph[cipherIndex]);
//         } else {newString.push(alph[cipherIndex]);
//         }
//     }
//     console.log(newString);
// }

// cipher("hello jackleg");

function cipher(string) {
    let alph = "abcdefghijklmnopqrstuvwxyz";
    let newString = string;
    for (let i = 0; i < string.length; i++) {
        // console.log("Inside 4 loop")
        let char = string.charAt(i);
        let charIndex = alph.indexOf(char);
        let cipherIndex = charIndex + 13;
        // console.log(newString);
        if (cipherIndex >= 26) {
            cipherIndex -= 26
            newString = newString.replace(string.charAt(i), alph[cipherIndex]);
        } else if (string.charAt(i) === " ") {
            newString += " ";
        } else {
            newString = newString.replace(string.charAt(i), alph[cipherIndex]);
        }
    }
    console.log(newString);
}

cipher("genius without education");