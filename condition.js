"use strict";
//firsr conditional test
const num1 = 50;
const num2 = 40;
if (num1 > num2) {
    console.log("Test: Is num1 greater than num2?");
    console.log("Prediction: Yes, num1 is greater than num2.");
}
else {
    console.log("Test: Is num1 greater than num2?");
    console.log("Prediction: No, num1 is not greater than num2.");
}
//second conditional test
let temp = 28;
let israining = true;
if (temp > 25 && israining) {
    console.log(`Test:- "Should I Take an Umbrella"`);
    console.log(`Prediction :- Yes The Temperature Is Above 25 And It Is Also Raining`);
}
else if (temp > 25 && !israining) {
    console.log(`Test:- "Should I Wear An Off Top Shirt"`);
    console.log(`Prediction :- Yes The Temperature Is Above 25C And It Is Also Not Raining`);
}
else {
    console.log(`Test:- "How Should I Dress Today"`);
    console.log(`Prediction :- Yes The Temperature Is Above 25 But Just Dress Normally`);
}
//third conditional test
let isWeekend = false;
const timeOfDay = "morning";
if (isWeekend) {
    if (timeOfDay === "morning") {
        console.log("Test: Weekend morning routine");
        console.log("Prediction: Enjoy a leisurely breakfast and relax.");
    }
    else {
        console.log("Test: Weekend routine");
        console.log("Prediction: Engage in your favorite weekend activities.");
    }
}
else {
    if (timeOfDay === "morning") {
        console.log("Test: Weekday morning routine");
        console.log("Prediction: Get ready for work or school.");
    }
    else if (timeOfDay === "afternoon") {
        console.log("Test: Weekday afternoon routine");
        console.log("Prediction: Focus on tasks and responsibilities.");
    }
    else {
        console.log("Test: Weekday evening routine");
        console.log("Prediction: Wind down and prepare for the next day.");
    }
}
//fourth conditional test
let age = 17;
if (age >= 18) {
    console.log("Test: Voting Eligibility Check");
    console.log("Prediction: You are eligible to vote!");
}
else {
    console.log("Test: Voting Eligibility Check");
    console.log("Prediction: You are not eligible to vote yet.");
}
//fifth conditional test
let favoriteColor = "blue";
if (favoriteColor === "red") {
    console.log("Test: Favorite Color Choice");
    console.log("Prediction: You have a passionate personality!");
}
else if (favoriteColor === "blue") {
    console.log("Test: Favorite Color Choice");
    console.log("Prediction: You are calm and peaceful.");
}
else if (favoriteColor === "green") {
    console.log("Test: Favorite Color Choice");
    console.log("Prediction: You appreciate nature and harmony.");
}
else {
    console.log("Test: Favorite Color Choice");
    console.log("Prediction: Your favorite color is unique!");
}
//sixth conditional test
let sides = 4;
if (sides === 3) {
    console.log("Test: Shape Type");
    console.log("Prediction: It's a triangle.");
}
else if (sides === 4) {
    console.log("Test: Shape Type");
    console.log("Prediction: It's a quadrilateral, possibly a square or rectangle.");
}
else if (sides === 5) {
    console.log("Test: Shape Type");
    console.log("Prediction: It's a pentagon.");
}
else if (sides === 6) {
    console.log("Test: Shape Type");
    console.log("Prediction: It's a hexagon.");
}
else {
    console.log("Test: Shape Type");
    console.log("Prediction: It's a shape with a unique number of sides.");
}
//seventh conditional test
let number = 7;
if (number % 2 === 0) {
    console.log(`Test: Even or Odd`);
    console.log(`Prediction: ${number} is an even number.`);
}
else {
    console.log(`Test: Even or Odd`);
    console.log(`Prediction: ${number} is an odd number.`);
}
//eigth conditional test
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`Test: Leap Year Check`);
    console.log(`Prediction: ${year} is a leap year.`);
}
else {
    console.log(`Test: Leap Year Check`);
    console.log(`Prediction: ${year} is not a leap year.`);
}
