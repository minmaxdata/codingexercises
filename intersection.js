/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const firstSet = new Set(nums1);

  const result = new Set();
  for (let num of nums2) {
    if (firstSet.has(num)) {
      result.add(num);
    }
  }

  return Array.from(result);


};
const result = intersection([4, 9, 5], [9, 4, 9, 8, 4]);
console.log(result)