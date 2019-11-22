/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let lastNonZeroFoundAt = 0;
  for (let cur = 0; cur < nums.length; cur++) {
    if (nums[cur] != 0) {
      nums[lastNonZeroFoundAt++] = nums[cur];
    }
  }
  return nums;
};
let result = moveZeroes([0, 1, 0, 3, 12]);
console.log(result);
