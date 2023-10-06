
// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 


const removeBlanks = (str) => {
    // Store the chars
    let newString = "";
    // Loop through the string
    for (let i = 0; i < str.length; i++) {
        // If the char is not a space
        if (str[i]!== " ") {
            // Add the char to the new string
            newString += str[i];
        }
    }
    console.log(newString);
    return newString;
};
// Examples:
removeBlanks(" Pl ayTha tF u nkyM usi c ")
// Expected Output => "PlayThatFunkyMusic"
removeBlanks("I can not BELIEVE it's not BUTTER")
// Expected Output => "IcannotBELIEVEit'snotBUTTER"


// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().

const getDigits = (str) => {
    // Store the digits as a string to avoid math
    let digits = "";
    // Loop through the string
    for (let i = 0; i < str.length; i++) {
        // Is char a number?
        if (!isNaN(str[i])) {
            // Add the char to the digits string
            digits += str[i];
        }
    }
    console.log(digits);
    return Number(digits);
};

// Examples:

getDigits("abc8c0d1ngd0j0!8")
// Expected Output => 801008

getDigits("0s1a3y5w7h9a2t4?6!8?0")
// Expected Output => 1357924680


// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().

const acronym = (str) => {
    // Split the string into an array ommiting spaces
    let splitString = str.split(" ");
    // console.log(splitString);
    // Store acronym
    let acronymString = "";
    // Loop through the array
    for (let i = 0; i < splitString.length; i++) {
        // Add first letter of each string to the acronym string
        acronymString += splitString[i].charAt(0);
        // console.log(acronymString);
    }
    console.log(acronymString.toUpperCase());
    return acronymString.toUpperCase();
};

acronym(" there's no free lunch - gotta pay yer way. ")
// Expected Output => "TNFL-GPYW". 

acronym("Live from New York, it's Saturday Night!")
// Expected Output => "LFNYISN".

acronym("Only Martians want to fly your battlecruiser.")
// Expected Output => "OMWTFYB"



// Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string.

const countNonSpaces = (str) => {
    removeBlanks(str).length;
    // Store the chars
    let newString = "";
    // // Loop through the string
    // for (let i = 0; i < str.length; i++) {
    //     // If the char is not a space
    //     if (str[i]!== " ") {
    //         // Add the char to the new string
    //         newString += str[i];
    //     }
    // }
    // console.log(newString);
    console.log(removeBlanks(str).length);
    return removeBlanks(str).length;
};

// Examples:

countNonSpaces("Honey pie, you are driving me crazy") 
// Expected Output => 29
countNonSpaces("Hello world !") 
// Expected Output => 11




// Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

const removeShorterStrings = (arr, value) => {
    let newArr = [];
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // If the string is longer than the value
        if (arr[i].length >= value) {
            // Add the string to the new array
            newArr.push(arr[i]);
            // console.log(arr[i]);
        }
    }
    console.log(newArr);
    return newArr;
};

// Examples:

removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4)
// Expected Output => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3)
// Expected Output => ['There', 'bug', 'the', 'system']