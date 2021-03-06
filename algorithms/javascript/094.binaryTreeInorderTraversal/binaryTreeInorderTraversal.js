// Source : https://leetcode.com/problems/binary-tree-inorder-traversal/
// Author : acgotaku311
// Date   : 2020-09-14

/** ********************************************************************************
*
* Given a binary tree, return the inorder traversal of its nodes' values.
*
* For example:
* Given binary tree {1,#,2,3},
*
*    1
*     \
*      2
*     /
*    3
*
* return [1,3,2].
*
* Note: Recursive solution is trivial, could you do it iteratively?
*
* confused what "{1,#,2,3}" means? > read more on how binary tree is serialized on OJ.
*
* OJ's Binary Tree Serialization:
*
* The serialization of a binary tree follows a level order traversal, where '#' signifies
* a path terminator where no node exists below.
*
* Here's an example:
*
*    1
*   / \
*  2   3
*     /
*    4
*     \
*      5
*
* The above binary tree is serialized as "{1,2,3,#,#,4,#,#,5}".
*
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
 * @return {number[]}
 */
const inorderTraversal = function (root) {
  const stack = []
  const result = []
  while (stack.length > 0 || root) {
    if (root) {
      stack.push(root)
      root = root.left
    } else {
      if (stack.length > 0) {
        root = stack.pop()
        result.push(root.val)
        root = root.right
      }
    }
  }
  return result
}

export { TreeNode, inorderTraversal }
