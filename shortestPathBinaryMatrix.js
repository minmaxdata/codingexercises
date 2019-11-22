/**
 * @param {number[][]} grid
 * @return {number}
 */
const shortestPathBinaryMatrix = (grid) => {
  if (grid.length === 0) {
    return 0;
  }

};

let result = shortestPathBinaryMatrix([[0, 1], [1, 0]]);
console.log(result)
result = shortestPathBinaryMatrix([[0, 0, 0], [1, 1, 0], [1, 1, 0]]);
