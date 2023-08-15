let userName1 = ["admin", "eric", "tooba", "hanan", "ali"];

for (let i = 0; i < userName1.length; i++) {
    if (userName1[i] === "admin") {
        console.log(`Hello ${userName1[i]}, would you like to see a status report?`);
    } else {
        console.log(`Hello ${userName1[i]}, thank you for logging in again.`);
    }
}

let userName2 = ["admin", "eric", "tooba", "hanan", "ali"];

if (userName2.length === 0) {
    console.log("We need to find some users.");
} else {
    for (let i = 0; i < userName2.length; i++) {
        if (userName2[i] === "admin") {
            console.log(`Hello ${userName2[i]}, would you like to see a status report?`);
        } else {
            console.log(`Hello ${userName2[i]}, thank you for logging in again.`);
        }
    }

    // Remove all usernames from the array
    userName2.length = 0;
}

if (userName2.length === 0) {
    console.log("All usernames have been removed.");
}




let currentUsers: string[] = ["user1", "user2", "user3", "user4", "user5"];


let newUsers: string[] = ["user2", "user6", "user7", "user8", "user9"];

function isUsernameTaken(username: string) {
    return currentUsers.indexOf(username) !== -1;
}

for (let i = 0; i < newUsers.length; i++)
 {
    let newUser = newUsers[i];
    if (isUsernameTaken(newUser)) {
        console.log(`Username '${newUser}' is already taken. Please enter a new username.`);
    } else {
        console.log(`Username '${newUser}' is available.`);
    }
}



























