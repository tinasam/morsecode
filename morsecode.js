// Alert to ask for user to enter TEXT only in display box 

// User enters  text in English
   
// Translate text into Morse code

// Display Morse code under English text in display box

const morseConvert = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--.."
 }

const entryBoxTranslator = document.querySelector(".text_entry");
const clearMorse = document.querySelector("#clear");
const engTranslator = document.querySelector("#translator-button");

clearMorse.addEventListener("click", (event) => {
    entryBoxTranslator.innerHTLM = " ";
});

engTranslator.addEventListener("click", (event) => {
     const morseConversion = (str) => {
    return str.toUpperCase().split("").map(el => {
       return morseConvert[el] ? morseConvert[el] : el;
    }).join("");
 };
});
// const morseConversion = (str) => {
//     return morseConvert;
// };

//  const morseConversion = (str) => {
//     return str.toUpperCase().split("").map(el => {
//        return morseConvert[el] ? morseConvert[el] : el;
//     }).join("");
//  };

// const morseConversion = (str) => {
//     return (el => {
//        return morseConvert[el];
//     // });
//  });
// }



//  const morseConversion = (str) => {
//     return str.toUpperCase().map(el => {
//         return morseConvert[el];
//     });
//  }
//  console.log(morseConversion("Hello My Friend"));
//  console.log(morseConversion('hey there!'));