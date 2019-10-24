var containsDuplicate = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    console.log(obj[nums[i]]);
    // if (obj[nums[i]] !== undefined) {
    //   return true;
    // } else {
    //   obj[nums[i]] = null;
    // }

    obj[nums[i]] = obj[nums[i]] + 1 || 1;
    if (obj[nums[i]] > 1) return true;
  }
  return false;
};
let result = containsDuplicate([1, 2, 3, 1]);
console.log(result);