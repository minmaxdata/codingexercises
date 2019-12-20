/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let sumIfNoneMissing = nums.length;
  let actualSum = 0;

  for (let i = 0; i < nums.length; i++) {
    sumIfNoneMissing += i;
    actualSum += nums[i];
  }
  return sumIfNoneMissing - actualSum;
};

let numbers = [3, 0, 1];
let result = missingNumber(numbers);
console.log(result);
numers = [9, 6, 4, 2, 3, 5, 7, 0, 1];
result = missingNumber(numbers);