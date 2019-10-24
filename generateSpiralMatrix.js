/**
 * @param {number} n
 * @return {number[][]}

Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

Example:

Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
  // console.log(JSON.stringify(matrix))
  // let count = 1;
  // for (let i = 0; i < n; i++) {
  //   for (let j = 0; j < n; j++) {
  //     matrix[i][j] = count;
  //     count++;
  //   }
  // }
  // return matrix;
    // let matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));


  */
const generateMatrix = function (n) {
  if (n === 0) {
    return [];
  }
  if (n === 1) {
    return [[1]];
  }
  let tl = 0;
  let tr = n - 1;
  let bl = 0;
  let br = n - 1;
  let arr = [];
  let num = 1;
  let i = 0;

  for (; i < n; i++) {
    var aux = [];
    for (var j = 0; j < n; j++) {
      aux.push(0);
    }
    arr.push(aux);
  }

  while (num <= (n * n)) {
    for (i = tl; i <= tr; i++) {
      arr[tl][i] = num++;
    }
    tl++;

    for (i = tl; i <= br; i++) {
      arr[i][br] = num++;
    }
    br--;

    for (i = br; i >= bl; i--) {
      arr[tr][i] = num++;
    }
    tr--;

    for (i = tr; i >= tl; i--) {
      arr[i][bl] = num++;
    }
    bl++;
  }

  return arr;
};
let result = generateMatrix(3);
console.log(JSON.stringify(result))