/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let result = [];

  if (root === null) {
    return result;
  }

  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let row = [];
    let rowSize = queue.length;

    while (rowSize > 0) {
      let currentNode = queue.shift();

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }

      row.push(currentNode.val);
      rowSize--;
    }

    result.push(row);
  }

  return result;
};