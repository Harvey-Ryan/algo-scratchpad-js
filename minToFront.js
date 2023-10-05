

// Given an array of comparable values, move the lowest element to array’s front, 
// shifting backward any elements previously ahead of it. 
// Do not otherwise change the array’s order. 
// Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. 
// As always, do this without using built-in functions.

let arr = [4, 2, 1, 3, 5];


const minToFront = (arr) => {
    // Use a middle man to make the swap
    let tempVal = 0;
    // Loop through the array
    for (let i = 0; i < arr.length - 1; i++) {
        // Compare first loop val with each index val
        for (let j = i + 1; j < arr.length; j++) {
            // Compare the values
            if (arr[i] > arr[j]) {
                // if [i] > [j] store [i] in tempVal
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

minToFront(arr);