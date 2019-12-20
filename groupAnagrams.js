

const groupAnagrams = (array) => {

  if (array.length === 0) return [];
  let obj = {};
  array.forEach(str => {
    let sorted = str.split("").sort().join("");

    if (!obj[sorted]) {
      obj[sorted] = [str];
    } else {
      obj[sorted].push(str);
    }
  })
  let result = [];
  for (let [key, value] of Object.entries(obj)) {
    result.push(value);
  }

  return result;
}

let result = groupAnagrams(['car', 'arc', 'coffee']);
console.log(result)