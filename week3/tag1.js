"use strict";
//!-----------Aufgabe 1----------------------
Object.defineProperty(exports, "__esModule", { value: true });
function sum(elements) {
    let result = 0;
    elements.map((element) => {
        return (result += element);
    });
    return result;
}
console.log(sum([1, 2, 3, 2]));
//!-----------Aufgabe 2----------------------
function sum2(elements) {
    let sum = "";
    elements.forEach((element) => {
        sum += element;
    });
    return sum;
}
console.log(sum2([1, "test", 3]));
//!-----------Aufgabe 4----------------------
//Nimm ein Array von jedem Typ und gib eine Zahl zurück
function genericLength(elements) {
    return elements.length;
}
console.log(genericLength([1, 2, 3, 4, "A"]));
//!-----------Aufgabe 5----------------------
function genericLast(elements) {
    if (elements.length > 0) {
        let theIndex = (elements.length - 1);
        return elements[theIndex];
    }
    else {
        return undefined;
    }
}
console.log(genericLast([1, 2, 5]));
//!-----------Aufgabe 6----------------------
function genericLast2(elements) {
    const array = Array.isArray(elements) ? elements : [elements];
    if (array.length > 0) {
        return array[array.length - 1];
    }
    else {
        return undefined;
    }
}
console.log("Aufgabe6:", genericLast2([1, 2, 5]));
//!-----------Aufgabe 7----------------------
function getRange(array, start, end) {
    if (array.length === 1) {
        return array[0];
    }
    else {
        return array.slice(start, end + 1);
    }
}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["apple"];
console.log(getRange(arr1, 1, 3)); // [2, 3, 4]
console.log(getRange(arr2, 0, 0)); // "apple"
//# sourceMappingURL=tag1.js.map