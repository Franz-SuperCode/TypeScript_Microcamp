"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello = "Hallo Welt";
console.log(hello);
//!-------------------------------Tag 2 - Aufgabe 1------------------------------------------------
function concat(charac1, charac2) {
    let result = charac1 + charac2;
    return result;
}
let message1 = concat("Hallo ", "Kevin");
console.log("Message1", message1);
//!-------------------------------Tag 2 - Aufgabe 2------------------------------------------------
function toNumber(word) {
    let result = Number(word);
    return result;
}
let message2 = toNumber("5");
console.log("Message2:", message2);
//!-------------------------------Tag 2 - Aufgabe 3------------------------------------------------
function chain(word1, much) {
    let result = "";
    for (let i = 0; i < much; i++) {
        result += word1;
    }
    return result;
}
let message3 = chain("Wort", 4);
console.log("Message3:", message3);
//!-------------------------------Tag 2 - Aufgabe 4------------------------------------------------
function isVowel(char) {
    let result = true;
    let vowel = ["a", "e", "i", "o", "u"];
    vowel.includes(char) ? (result = true) : (result = false);
    return result;
}
let message4 = isVowel("e");
console.log("Message4", message4);
//!-------------------------------Tag 2 - Aufgabe 5--------Nur Vokale im Wort wiederholen----------------------------------------
function onlyVowel(inputString, repeatCount) {
    const vowels = ["a", "e", "i", "o", "u"];
    let result = "";
    //EIne Schleife über alle Buchstaben
    for (let i = 0; i < inputString.length; i++) {
        //Jeden Buchstaben klein
        const currentChar = inputString[i].toLowerCase();
        //Falls der Buchstabe ein Vokal ist, soll dieser wiederholt werden
        if (vowels.includes(currentChar)) {
            result += currentChar.repeat(repeatCount);
        }
        else {
            result += inputString[i];
        }
    }
    return result;
}
const message5 = onlyVowel("The World", 10);
console.log("message5:", message5); // outputs "Woooort"
//!-------------------------------Tag 2 - Aufgabe 6--------Würfel----------------
let random = Math.random(); //Generiert zufällige Zahl zwischen 0 - 0,9999
let randomFullNumber = random * 6; // Zahl wischen 0 - 5,9999
let randomFullNumberFloor = Math.floor(randomFullNumber); //Abrunden. Zwischen 0-5
let randomFullNumberFloorSix = randomFullNumberFloor + 1; // Zahl wischen 1-6
console.log("Zufällige Zahl:", randomFullNumberFloorSix);
//!-------------------------------Tag 2 - Aufgabe 7--------Würfel Spiel----------------
let random1 = Math.random(); //Generiert zufällige Zahl zwischen 0 - 0,9999
let randomFullNumber1 = random1 * 6; // Zahl wischen 0 - 5,9999
let randomFullNumberFloor1 = Math.floor(randomFullNumber1); //Abrunden. Zwischen 0-5
let randomFullNumberFloorSix1 = randomFullNumberFloor1 + 1; // Zahl wischen 1-6
console.log("Würfel1:", randomFullNumberFloorSix1);
let random2 = Math.random(); //Generiert zufällige Zahl zwischen 0 - 0,9999
let randomFullNumber2 = random2 * 6; // Zahl wischen 0 - 5,9999
let randomFullNumberFloor2 = Math.floor(randomFullNumber2); //Abrunden. Zwischen 0-5
let randomFullNumberFloorSix2 = randomFullNumberFloor2 + 1; // Zahl wischen 1-6
console.log("Würfel2:", randomFullNumberFloorSix2);
console.log("Würfelergebnis:", randomFullNumberFloorSix1 + randomFullNumberFloorSix2);
//# sourceMappingURL=day2_task1-7.js.map