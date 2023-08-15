"use strict";
//function
//are primary means of paasing data around typescript
function greet(username, age) {
    console.log(`Hello ${username}, your age is ${age}`);
}
greet("hamza", 22);
//here were are passing arguments
greet("tooba", 18);
function chef(menu, people) {
    let message = `you have to prepare ${menu}, for ${people} people`;
    return message;
}
let retmessage = chef("zinger , salad, tea ", 5);
console.log(retmessage);
console.log(retmessage);
console.log(retmessage);
