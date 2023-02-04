// Clean Code: Variables Challenge 1

/**
 * userNames: string[first, middle, last]
 * return First Middle Initial Last Name
 */
function getUsersFullName(userNames) {
    const [firstName, middleName, lastName] = userNames;
    const middleInitial = middleName[0];

    return `${firstName} ${middleInitial}. ${lastName}`;
}

console.log(getUsersFullName(["Dylan", "Christopher", "Israel"]));
