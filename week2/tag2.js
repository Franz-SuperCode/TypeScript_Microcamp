"use strict";
//!-----Aufgabe 1----------------
Object.defineProperty(exports, "__esModule", { value: true });
const player = {
    name: "Kevin",
    lastLogin: new Date("2022-12-01"),
    id: 55,
    email: "kevin@gmx.de",
    playedGame: {
        gameName: "Flappy Duck",
        highScore: 80,
    },
};
const admin = {
    name: "Franz",
    lastLogin: new Date("2022-12-02"),
    id: 55,
    email: "franz@gmx.de",
    playedGame: {
        gameName: "Flappy Duck",
        highScore: 100,
    },
};
//!-----Aufgabe 2 & 3----------------
function getEmail(player) {
    return player.email;
}
console.log(getEmail(player));
//Diese Funktion erwartet ein Objekt.
//Mithilfe von {email} wendet man Object Destructering an und kann damit die porperty email von dem objekt direkt verwenden. email wird als neue Variable gepeichert und kann so verwendet werden
//Diese Funktion soll Objekte vom Typen "Player" oder "Admin" akzeptieren
function getEmail2({ email }) {
    return email;
}
console.log(getEmail2(player));
//!-----Aufgabe 5----------------
function evaluateWinner(
//Greifen auf Objekt "playedGame" zu und da drin auf die Eigenschaften und diese speichern wir in die neuen Variablen "adminScore" usw.
{ playedGame: { highScore: adminScore, gameName: adminGame } }, 
//Zweites Objekt dass übergeben wird an die Funktion
{ playedGame: { highScore: playerScore, gameName: playerGame } }) {
    if (adminGame === playerGame) {
        if (adminScore === playerScore) {
            return "It's a tie!";
        }
        else {
            return `The winner is ${adminScore > playerScore ? "Admin" : "Player"}.`;
        }
    }
}
console.log(evaluateWinner(admin, player)); // Output: The winner is Player.
function TEST({ playedGame: neuerName1 }, { playedGame: neuerName2 }) {
    console.log(neuerName1);
    console.log(neuerName2);
}
function evaluateWinner2(admin, player) {
    const adminScore = admin.playedGame.highScore;
    const adminGame = admin.playedGame.gameName;
    const playerScore = player.playedGame.highScore;
    const playerGame = player.playedGame.gameName;
    if (adminGame === playerGame) {
        if (adminScore === playerScore) {
            return "It's a tie!";
        }
        else {
            return `The winner is ${adminScore > playerScore ? "Admin" : "Player"}.`;
        }
    }
}
console.log(evaluateWinner2(admin, player)); // Output: The winner is Player.
//Wenn die Funktion keinen Rückgabewert hat, muss void genommen werden
function leaderboard(scores, gameName) {
    const filteredScores = scores.filter((score) => score.gameName === gameName);
    const sortedScores = filteredScores.sort((a, b) => b.highscore - a.highscore);
    console.log(sortedScores);
}
leaderboard([
    { gameName: "Flappy Duck", highscore: 400 },
    { gameName: "Flappy Duck", highscore: 300 },
    { gameName: "Flappy Bird", highscore: 200 },
    { gameName: "Flappy Duck", highscore: 100 }
], "Flappy Duck");
//# sourceMappingURL=tag2.js.map