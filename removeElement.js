/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
}
let result = removeElement([3, 2, 2, 3], 3);
console.log('result', result);
/*
for(var i = nums.length - 1; i >= 0; i--){
		if(nums[i] === val) {
			nums.splice(i, 1);
		}
	}
  return nums.length;
  */
/*
var removeElement = function(nums, val) {
 while(nums.indexOf(val) > -1) {
     nums.splice(nums.indexOf(val), 1)
 }
 return nums.length;
};
*/
/*
const removeElement = (nums, val) {
    int i = 0;
    int n = nums.length;
    while (i < n) {
        if (nums[i] == val) {
            nums[i] = nums[n - 1];
            // reduce array size by one
            n--;
        } else {
            i++;
        }
    }
    return n;
}*/