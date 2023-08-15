let fav_fruits : string[]= ["apple","mango","banana"]
if(fav_fruits.includes("apple"))
{
    console.log(`i love apples`)
}
    else
    {
        console.log(`apples are not in my favourite`)
    }
if(fav_fruits.includes("mango"))
{
    console.log(`i love mangoes`)
}
    else{
        console.log(`mangoes are not in my favourites`)
    }
if(fav_fruits.includes("banana"))
{
    console.log(`i love banana`)
}
    else{
        console.log(`banana is not in my favourite`)
    }
    const favoriteFruits: string[] = ["apple", "banana", "strawberry"];

// Check for certain fruits in the array
if (favoriteFruits.includes("apple")) {
    console.log("I love apples!");
} else {
    console.log("Apples are not in my favorites.");
}

if (favoriteFruits.includes("orange")) {
    console.log("Oranges are delicious!");
} else {
    console.log("Oranges are not in my favorites.");
}

if (favoriteFruits.includes("banana")) {
    console.log("Bananas are fantastic!");
} else {
    console.log("Bananas are not in my favorites.");
}

if (favoriteFruits.includes("grape")) {
    console.log("Grapes are yummy!");
} else {
    console.log("Grapes are not in my favorites.");
}

if (favoriteFruits.includes("strawberry")) {
    console.log("Strawberries are amazing!");
} else {
    console.log("Strawberries are not in my favorites.");
}

let favoriteFruits1: string[] = ["apple", "banana", "strawberry"];

// Check for certain fruits in the array using a loop
function checkFavoriteFruit(fruit: string): boolean {
    for (let favorite of favoriteFruits1) {
        if (favorite === fruit) {
            return true;
        }
    }
    return false;
}

if (checkFavoriteFruit("apple")) {
    console.log("I love apples!");
} else {
    console.log("Apples are not in my favorites.");
}

if (checkFavoriteFruit("orange")) {
    console.log("Oranges are delicious!");
} else {
    console.log("Oranges are not in my favorites.");
}

if (checkFavoriteFruit("banana")) {
    console.log("Bananas are fantastic!");
} else {
    console.log("Bananas are not in my favorites.");
}

if (checkFavoriteFruit("grape")) {
    console.log("Grapes are yummy!");
} else {
    console.log("Grapes are not in my favorites.");
}

if (checkFavoriteFruit("strawberry")) {
    console.log("Strawberries are amazing!");
} else {
    console.log("Strawberries are not in my favorites.");
}
let travel1 = []





