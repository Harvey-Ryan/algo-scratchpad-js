
// REVERSE
// Given an array of comparable values, move the highest element to array’s back,
// Given a numerical array, reverse the order of values, in-place. 
// The reversed array should have the same length, 
// with existing elements moved to other indices so that order of elements is reversed. 
// Working 'in-place' means that you cannot use a second 
// array – move values within the array that you are given. 
// As always, do not use built-in array functions such as splice().

// let arr = [14, 22, 1, 37, 5];

const reverseArr = (arr) => {
    // Use a middle man to make the swap
    let tempVal = 0;
    // Loop through the array
    for (let i = 0; i < arr.length - 1; i++) {
        // Compare first loop val with each index val
        for (let j = i + 1; j < arr.length; j++) {
            // Compare the values
            if (arr[i] < arr[j]) {
                // if [i] < [j] store [i] in tempVal
                tempVal = arr[i];
                // Set [i] to [j]
                arr[i] = arr[j];
                // Set [j] to [i] now stored in tempVal
                arr[j] = tempVal;
            }
            // console.log(arr);
        }
        console.log(arr);
    }
    return arr;
};

reverseArr([14, 22, 1, 37, 5]);
// reverseArr([4, 2]);
// reverseArr([4, 2, 1]);



// ROTATE
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 
// 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. 
// Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. 
// Don't use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.

// let rotatingArr = [1, 2, 3, 4, 7];

const rotateArr = (arr, shiftBy) => {
    // Early check against shiftBy being negative
    if (shiftBy < 0) {
        shiftBy = shiftBy * -1;
        console.log("Negative input converted to positive: ", shiftBy);
    }
    // Loop through the array
    for (let i = 0; i < shiftBy; i++) {
        // Use a middle man to make the swap
        let frontVal = arr[arr.length - 1];
        console.log("Index of: ", i, " < ", shiftBy);
        // console.log("Shift By: ", shiftBy);
        // Loop through the array
        for (let j = arr.length - 1; j > 0; j--) {
            // reassign the values
            arr[j] = arr[j - 1];
        }
        arr[0] = frontVal;
        console.log(arr);
    }
    return arr;
};

// rotateArr([1, 2, 3], 1);
// rotateArr([5, 23, 17, 1], 3);
rotateArr([5, 23, 17, 1], -3);
// rotateArr([5, 23, 17, 1], 1);
// rotateArr([5, 23, 17, 1], 0);
// rotateArr([5], 3);








// FILTER RANGE
// Alan is good at breaking secret codes. 
// One method is to eliminate values that lie outside of a specific known range. 
// Given arr and values min and max, retain only the array values between min and max. 
// Work in-place: return the array you are given, with values in original order. 
// No built-in array functions.











//CONCAT
// Replicate JavaScript's concat(). 
// Create a standalone function that accepts two arrays. 
// Return a new array containing the first array's elements, followed by the second array's elements. 
// Do not alter the original arrays. 
// Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].
