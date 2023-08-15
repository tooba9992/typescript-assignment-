//frist comparison test
let fruit1 = "apple";
let fruit2 = "banana";

if (fruit1 === fruit2) {
    console.log(`Test: Fruit Comparison`);
    console.log(`Prediction: The two fruits are the same.`);
} else if (fruit1 !== fruit2) {
    console.log(`Test: Fruit Comparison`);
    console.log(`Prediction: The two fruits are different.`);
}
//second comparison test
const userInput = "Hello";
const secretWord = "hElLo";

if (userInput.toLowerCase() === secretWord.toLowerCase()) {
    console.log(`Test: String Comparison (Case Insensitive)`);
    console.log(`Prediction: The two strings are equal (case-insensitive).`);
} else {
    console.log(`Test: String Comparison (Case Insensitive)`);
    console.log(`Prediction: The two strings are not equal (case-insensitive).`);
}
//third comparison test
let age1 = 25;
let hasDriverLicense = true;

if (age1 >= 18 && hasDriverLicense) {
    console.log(`Test: Driving Eligibility Check`);
    console.log(`Prediction: You are eligible to drive.`);
} else if (age1 >= 18 || hasDriverLicense) {
    console.log(`Test: Driving Eligibility Check`);
    console.log(`Prediction: You are either of driving age or have a driver's license.`);
} else {
    console.log(`Test: Driving Eligibility Check`);
    console.log(`Prediction: You are not eligible to drive.`);
}