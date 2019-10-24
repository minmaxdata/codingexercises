/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
  for (let i = k; i > 0; i--) {
    nums.reverse();
  }
  return nums;
};
let result = rotate([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(result);