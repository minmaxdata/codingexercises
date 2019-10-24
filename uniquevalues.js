
const getUniqueValuesInArray = (arr) => {
  const uniqueList = {};

  for(let i = 0; i < arr.length; i++){
    uniqueList[arr[i]] = arr[i];
  }
  const sortedUniqueValues = Object.values(uniqueList);
  return sortedUniqueValues;
};

const results = getUniqueValuesInArray([1, 1, 2, 2, 3, 3, 4, 4, 5]);
console.log('results', results);
// get them to offer feedback do you see any issues with my feedback