/*
Write a function that takes an array and reverses it in place. That is, return the same array with the elements reverse. Don't create a new array.
Sample Input:
[1, 2, 3, 4, 5]
Sample Output:
[5, 4, 3, 2, 1]
*/

// input array
// determine its length
//  swap elements in the array based on position
// return array
// array[array.length -1] => array[0]
// array[0] => array[array.length - 1]
// slice to retrieve the value
//array[0] = value
// temp = 0
// [0] = a
// i = 1
// array[i] = 1
// array[length] = 3

const reverseArray = (array) => {
  let boundary = Math.ceil(array.length / 2);

  for (let i = 0; i < boundary; i++) {
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
}

let result = reverseArray([0, 1, 2, 3, 'a']);
result = reverseArray([0, 1, 2, 3]);
console.log('result', result);

