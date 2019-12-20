/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let solution = [];
  if (nums1.length < nums2.length) {
    return intersect(nums2, nums1);
  }
  const obj = nums1.reduce((acc, num) => {
    acc[num] = acc[num] + 1 || 1;
    return acc;
  }, {});
  for (let i = 0; i < nums2.length; i++) {
    if (obj[nums2[i]] !== undefined && obj[nums2[i]] > 0) {
      obj[nums2[i]] = obj[nums2[i]] - 1;
      solution.push(nums2[i]);
    }
  }

  return solution;
};

let result = intersect([4, 9, 5, 4, 4], [4, 9, 5]);
console.log(result);
result = intersect([1, 1], [1, 2]);
console.log(result);
