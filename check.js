"use strict";
function checkEvenOdd(num) {
    if (num % 2 == 0) {
        return "Even";
    }
    else {
        return "odd";
    }
}
let numToCheck = 7;
let result = checkEvenOdd(numToCheck);
console.log(`the reult of the following checking is ${result}`);
