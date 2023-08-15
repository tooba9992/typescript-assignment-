"use strict";
let myName = "tooba";
let lowercase = myName.toLowerCase();
let uppercase = myName.toUpperCase();
let titlecase = myName.replace(/\b\w/g, (char) => char.toUpperCase());
console.log("original name:-", myName);
console.log("lower case:-", lowercase);
console.log("upper case:-", uppercase);
console.log("title case:-", titlecase);
