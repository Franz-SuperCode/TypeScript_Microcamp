"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greetEveryone(greeting, participants) {
    let message = "";
    //Jeder der nicht in der Blacklist ist, bekommt ein console.log()
    participants.forEach((participant) => {
        if (!blacklist.includes(participant)) {
            message += greeting + " " + participant + "\n";
        }
    });
    return message;
}
let welcomeText = "Willkommen im TypeScript-Kurs";
let participants = ["Lars", "Sophie", "Ahmed", "Marzio", "Brigitte"];
let blacklist = ["Ahmed", "Brigitte"];
console.log(greetEveryone(welcomeText, participants));
function addToParticipants(name, participants) {
    participants.push(name);
    return participants;
}
function removeFromParticipants(name, participants) {
    const index = participants.indexOf(name);
    if (index > -1) {
        participants.splice(index, 1);
    }
    return participants;
}
participants = addToParticipants("Chad", participants);
console.log(greetEveryone("Hi", participants));
participants = removeFromParticipants("Marzio", participants);
console.log(greetEveryone("Hi", participants));
//# sourceMappingURL=uebung3_types.js.map