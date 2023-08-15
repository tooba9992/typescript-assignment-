"use strict";
function isArrayorNot(item) {
    if (Array.isArray(item)) {
        console.log(`the item is an array`);
    }
    else {
        console.log(`the item is not array`);
    }
}
let item1 = [1, 2, 3];
let item2 = `string`;
let item3 = { key: `value` };
isArrayorNot(item1);
isArrayorNot(item2);
isArrayorNot(item3);
//second conditional test
let string1 = "hello";
let string2 = "world";
if (string1 === string2) {
    console.log(`"${string1}" and "${string2}" are equal.`);
}
else {
    console.log(`"${string1}" and "${string2}" are not equal.`);
}
//third conditional test
let userIn = "yes";
if (userIn.toLowerCase() === "yes") {
    console.log("user confirmed");
}
else {
    console.log("user not confirmed");
}
