/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*
var twoSum = function (nums, target) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (obj[diff] !== undefined && obj[diff] !== i) {
      return [i, obj[diff]];
    }
  }
  return []
};
*/
var twoSum = function (nums, target) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (obj[diff] !== undefined && obj[diff] !== i) {
      return [obj[diff], i];
    }
    obj[nums[i]] = i
  }
  return []
};
let result = twoSum([2, 7, 11, 15], 9);
console.log(result);
result = twoSum([3, 3], 6);
console.log(result);
result = twoSum([3, 2, 3], 6);
console.log(result);
/*
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/