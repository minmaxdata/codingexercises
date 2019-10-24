/**
 * @param {number[]} nums
 * @return {number}
 * var singleNumber = function(nums) {
    for(var i=0;i<nums.length;i++) {
        if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) return nums[i];
    }
};
 */
var singleNumber = function (nums) {
  const obj = nums.reduce((acc, num) => {
    if (acc[num]) {
      acc[num] = acc[num] + 1
    } else {
      acc[num] = 1;
    }
    return acc;
  }, {});
  for (let [k, v] of Object.entries(obj)) {
    if (v === 1) {
      return k;
    }
  }
};
let result = singleNumber([4, 1, 2, 1, 2]);
console.log('result', result);