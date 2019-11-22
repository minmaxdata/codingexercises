/**
 * @param {number[]} nums
 * @return {number}
 */
/*
Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

You need to find the shortest such subarray and output its length.

Example 1:
Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
Note:
Then length of the input array is in range [1, 10,000].
The input array may contain duplicates, so ascending order here means <=.
*/
/*
split array  and search from first to last
take last and first value and companre

compare values from front to back
when it is located that the last number is smaller that the first,
extract and sort?
*/
const findUnsortedSubarray = (nums) => {
  if (nums.length === 0) {
    return 0;
  }
  let targetArr = new Array(...nums).sort((a, b) => a - b);
  let start = 0;
  let end = nums.length - 1;
  while (nums[start] === targetArr[start] && start < nums.length) {
    ++start;
  }
  if (start === nums.length) return 0;
  while (end >= start && nums[end] === targetArr[end]) {
    --end;
  }
  if (end === start) return 0;
  return end - start + 1;

};

let result = findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]);
console.log(result);
result = findUnsortedSubarray([1, 3, 2, 4, 5]);
console.log(result);
result = findUnsortedSubarray([1, 3, 2, 2, 2]);
console.log(result);