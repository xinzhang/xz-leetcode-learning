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

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function insertOrderByLevel(arr, root, i) {
    if (i < arr.length) {
        let temp = new TreeNode(arr[i]);
        root = temp;
        root.left = insertOrderByLevel(arr, root.left, 2 * i + 1);
        root.right = insertOrderByLevel(arr, root.left, 2 * i + 2);
    }
    return root;
}

function printTree(root) {
    if (root !== null) {
        printTree(root.left);
        console.log(root.val, ' ');
        printTree(root.right);
    }
}

let treeInput2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let root = new TreeNode();
root = insertOrderByLevel(treeInput, root, 0);
console.dir(root, { depth: null });
