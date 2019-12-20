/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function (arr1, arr2, arr3) {
  const object = {};
  arr1.reduce((acc, num) => {
    if (!acc[num]) {
      acc[num] = 0;
    }
    acc[num]++;
    return acc;
  }, object);
  arr2.reduce((acc, num) => {
    if (!acc[num]) {
      acc[num] = 0;
    }
    acc[num]++;
    return acc;
  }, object);
  arr3.reduce((acc, num) => {
    if (!acc[num]) {
      acc[num] = 0;
    }
    acc[num]++;
    return acc;
  }, object);
  console.log(object);
  const result = [];
  for (let [key, value] of Object.entries(object)) {
    if (value === 3) {
      result.push(key)
    }
  }
  return result;

};
let result = arraysIntersection([1, 2, 3, 4, 5], [1, 2, 5, 7, 9], [1, 3, 4, 5, 8]);

const objectFromPairs = arr => arr.reduce((a, [key, val]) => ((a[key] = val), a), {});
result = objectFromPairs([['a', 1], ['b', 2]]); // {a: 1, b: 2}
console.log(result);