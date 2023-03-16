//!--------Aufgabe 1-------------------
// Type String wurde in "myString umbenannt"
type myString = string;
const aString: myString = "Hallo";
console.log("Aufgabe1:", aString);

//!--------Aufgabe 2-------------------
// Type String oder Number
type StringOrNumber = string | number;
let theNumber: number = 1;
const test: StringOrNumber = theNumber;
console.log("Aufgabe2:", test);

//!--------Aufgabe 3-------------------
function introduction(param1: StringOrNumber) {
  console.log(`Aufgabe3: Hallo, mein Inhalt ist: ${param1}`);
}

introduction("Kevin");

//!--------Aufgabe 4-------------------
function showContent(param1: string | undefined) {
  if (param1 === undefined) {
    console.log("Aufgabe4: Ich habe keinen Inhalt");
  }

  if (typeof param1 === "string") {
    console.log("Aufgabe4: Hallo, mein Inhalt ist " + param1);
  }
}

showContent("Test");
showContent(undefined);


//!--------Aufgabe 5-------------------
function keepPlaying(param: boolean | number): boolean {
  let result = false;
  if (param === true || param < 10) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

console.log("Aufgabe5: ", keepPlaying(5));

//!--------Aufgabe 6-------------------
//links = 0
// rechts = 1
// oben = 2
// unten = 3

function move(input: string): number | undefined {
  let result: number | undefined = 0;

  switch (inputLow) {
    case "links":
      result = 0;
      break;

    case "rechts":
      result = 1;
      break;

    case "oben":
      result = 2;
      break;

    case "unten":
      result = 3;
      break;

      default:
        result = undefined;
  }

  return result;
}

let input: string = "uNten";
let inputLow = input.toLowerCase();
console.log(move(input));

//Ausrufezeichen sagt ihm ,dass es aufjedenfall da ist
let theInput = document.querySelector("input")!;
//noch nicht fertig
//theInput.addEventListener("change")
let theValue = document.querySelector("input")!.value;

console.log(theValue);
let dasP = document.querySelector(".dasP")!;
dasP.textContent = theValue;



export {};