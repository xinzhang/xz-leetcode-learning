/*
Given a binary tree, you need to compute the length of the diameter of the tree. 
The diameter of a binary tree is the length of the longest path between any two nodes in a tree. 
This path may or may not pass through the root.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var findTreeDepth = function (root) {
    if (root === null) return 0;
    return 1 + Math.max(findTreeDepth(root.left), findTreeDepth(root.right));
};

var diameterOfBinaryTree = function (root) {
    if (root === null) {
        return 0;
    }

    let lHeight = findTreeDepth(root.left);
    let rHeight = findTreeDepth(root.right);

    let ldiameter = diameterOfBinaryTree(root.left);
    let rdiameter = diameterOfBinaryTree(root.right);

    return Math.max(lHeight + rHeight, Math.max(ldiameter, rdiameter));
};

function insertOrderByLevel(arr, root, i) {
    if (i < arr.length) {
        let temp = new TreeNode(arr[i]);
        root = temp;
        root.left = insertOrderByLevel(arr, root.left, 2 * i + 1);
        root.right = insertOrderByLevel(arr, root.left, 2 * i + 2);
    }
    return root;
}

let arr = [1, 2, 3, 4, 5];
//expect 8
const treeInput = [
    4,
    -7,
    -3,
    null,
    null,
    -9,
    -3,
    9,
    -7,
    -4,
    null,
    6,
    null,
    -6,
    -6,
    null,
    null,
    0,
    6,
    5,
    null,
    9,
    null,
    null,
    -1,
    -4,
    null,
    null,
    null,
    -2,
];

let tree = new TreeNode();
tree = insertOrderByLevel(treeInput, tree, 0);
console.log(diameterOfBinaryTree(tree));
