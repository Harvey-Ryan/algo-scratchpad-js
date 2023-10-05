
let arr = [2, 7, 11, 15];

const doubleSum = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
        for (let a = i + 1; a < arr.length; a++) {
            if (arr[i] + arr[a] === val)
                console.log([i, a]);
            return [i, a];
        }
    }
};

doubleSum(arr, 9);


let nums = [-1, -3, -2, 0, 1, 2, 3, 6, 7];
var twoSum = function (nums, target) {
    const sortedNums = [...nums].sort((a, b) => a - b);
    let left = 0;
    let right = sortedNums.length - 1;

    while (left < right) {
        const sum = sortedNums[left] + sortedNums[right];

        if (sum === target) {
            return [
                nums.indexOf(sortedNums[left]),
                nums.lastIndexOf(sortedNums[right]),
            ];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
};

twoSum(nums, 9);

const n = 10;

const climbingStairs = (n) => {
    const combinations = [];
    const backtrack = (remaining, currentCombination) => {
        if (remaining === 0) {
            combinations.push(currentCombination.slice()); // Add a copy of the current combination
        } else if (remaining > 0) {
            // Take a one-step
            currentCombination.push("1 Step");
            backtrack(remaining - 1, currentCombination);
            currentCombination.pop(); // Backtrack

            // Take a two-step
            currentCombination.push("2 Step");
            backtrack(remaining - 2, currentCombination);
            currentCombination.pop(); // Backtrack
        }
    };

    backtrack(n, []);

    // Print the combinations
    combinations.forEach((combination, index) => {
        console.log(`Combination ${index + 1}: ${combination.join(" + ")}`);
    });

    return combinations.length;
};

console.log(`Total ways: ${climbingStairs(n)}`);
