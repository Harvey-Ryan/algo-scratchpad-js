

// //- Capitalize: Given a string, capitalize the first letter of each word in the sentence ex: "the man in spain is red" -> "The Man In Spain Is Red"

// const algoString = "the man in spain is red";

// const words = algoString.split(" ");

// const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

// let exclude = ["in", "of", "and", "the", "a", "an", "is"];


// //- ::Bonus:: Exclude words like in, of, and, the (if not the first word of the title)
// const capitalizeWords = words.map((word, index) => {
//     if (index == 0) {
//         return word.charAt(0).toUpperCase() + word.slice(1);

//     } else {
//         if (exclude.includes(word)) {
//             return word;
//         } else
//             return word.charAt(0).toUpperCase() + word.slice(1);
//     }
// });
// console.log(capitalizeWords.join(" "));


// //- isPalindrome
// const palindrome = "racecar";

// const reverse = palindrome.split("").reverse().join("");

// console.log(palindrome === reverse);


// let palindromeLoop = () => {
//     let palindromeArr = palindrome.split("");

//     for (let i = 0; i < palindromeArr.length; i++) {
//         if (palindromeArr[i] !== palindromeArr[palindromeArr.length - 1 - i]) {
//             console.log("Not a palindrome");
//             return false;
//         }
//     }

//     console.log("Palindrome");
// };
// palindromeLoop();


let exampleArray = [];
const exampleArr = [];

const names = ["John", "Paul", "George", "Ringo"];


// Slice
function sliceArray(arr, start, end) {
const paulGeorge = names.slice(1, 3);

console.log(paulGeorge);
return paulGeorge;
};
sliceArray(names, 1, 3);

let numbers = [1, 2, 3, 4, 5, 6];
// Reduce => takes a sequence of data in an array and returns a single value.
const sum = numbers.reduce((num, sum) => num + sum, 0);

console.log(sum);


arr = [1, 2, 3, 4, 5, 6];
// Unshift add to the first element of an array.
let reversedArr = arr.reverse();
reversedArr.push(11);
let newArr = reversedArr.reverse();

console.log(newArr);

// Shift remove the first element of an array.



