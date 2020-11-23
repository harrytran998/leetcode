// Source : https://leetcode.com/problems/minimum-depth-of-binary-tree/
// Author : acgotaku311
// Date   : 2020-11-21

/** ********************************************************************************
*
* Given a binary tree, find its minimum depth.
*
* The minimum depth is the number of nodes along the shortest path from the root node
* down to the nearest leaf node.
*
**********************************************************************************/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = function (root) {
  if (root === null) {
    return 0
  }
  if (root.left === null && root.right === null) {
    return 1
  }
  if (root.left === null) {
    return minDepth(root.right) + 1
  }
  if (root.right === null) {
    return minDepth(root.left) + 1
  }
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1
}

export { TreeNode, minDepth }
