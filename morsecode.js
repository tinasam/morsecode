// Alert to ask for user to enter TEXT only in display box 

// User enters  text in English
   
// Translate text into Morse code

// Display Morse code under English text in display box

// const morseConvert = {
//     "A": ".-",
//     "B": "-...",
//     "C": "-.-.",
//     "D": "-..",
//     "E": ".",
//     "F": "..-.",
//     "G": "--.",
//     "H": "....",
//     "I": "..",
//     "J": ".---",
//     "K": "-.-",
//     "L": ".-..",
//     "M": "--",
//     "N": "-.",
//     "O": "---",
//     "P": ".--.",
//     "Q": "--.-",
//     "R": ".-.",
//     "S": "...",
//     "T": "-",
//     "U": "..-",
//     "W": ".--",
//     "X": "-..-",
//     "Y": "-.--",
//     "Z": "--.."
//  }

//  const morseConvert = (str) => {
//     return str.toUpperCase().split("").map(el => {
//        return morseCode[el] ? morseCode[el] : el;
//     }).join("");
//  };

const convertToMorse = (str) => {
    return str.toUpperCase().split("").map(el => {
       return morseCode[el];
    });
 };

 console.log(convertToMorse("Hello, My Friend!"));
 console.log(convertToMorse('hey there!'));
 


