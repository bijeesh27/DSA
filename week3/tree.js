// ------------ Generic Tree (N-ary Tree) Implementation ------------
class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(childNode) {
    this.children.push(childNode);
  }
}

function printTree(node, indent = "") {
  console.log(indent + "- " + node.value);
  for (let child of node.children) {
    printTree(child, indent + " ");
  }
}

function printLevel(node, level = 0) {
  console.log("level", level, ":", node.value);
  for (let child of node.children) {
    printLevel(child, level + 1);
  }
}

// --------------------- Binary Search Tree (BST) ---------------------
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, node) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  search(root, value) {
    if (!root) return false;
    if (root.value === value) return true;
    return value < root.value
      ? this.search(root.left, value)
      : this.search(root.right, value);
  }

  min(root) {
    if (!root.left) return root.value;
    return this.min(root.left);
  }

  max(root) {
    if (!root.right) return root.value;
    return this.max(root.right);
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  levelOrder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      const curr = queue.shift();
      console.log(curr.value);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
  }

  height(root) {
    if (!root) return -1;
    return 1 + Math.max(this.height(root.left), this.height(root.right));
  }

  depth(root, target, depth = 0) {
    if (!root) return -1;
    if (target === root.value) return depth;
    const left = this.depth(root.left, target, depth + 1);
    if (left !== -1) return left;
    return this.depth(root.right, target, depth + 1);
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root == null) return root;

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) return null;
      if (!root.left) return root.right;
      if (!root.right) return root.left;

      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }

  findKthSmallest(k) {
    let count = 0;
    let result = null;

    function inOrder(node) {
      if (!node || result !== null) return;
      inOrder(node.left);
      count++;
      if (count === k) {
        result = node.value;
        return;
      }
      inOrder(node.right);
    }

    inOrder(this.root);
    return result !== null
      ? result
      : "k is larger than the total number of elements in the tree";
  }

  isValidBST(root, min = null, max = null) {
    if (!root) return true;
    if (
      (min !== null && root.value <= min) ||
      (max !== null && root.value >= max)
    )
      return false;
    return (
      this.isValidBST(root.left, min, root.value) &&
      this.isValidBST(root.right, root.value, max)
    );
  }

  isBalancedBST(root) {
    function check(node) {
      if (!node) return 0;
      const left = check(node.left);
      const right = check(node.right);
      if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
      return 1 + Math.max(left, right);
    }
    return check(root) !== -1;
  }
}

// ------------------- Check if Two Trees are Same -------------------
function isSame(node1, node2) {
  if (!node1 && !node2) return true;
  if (!node1 || !node2) return false;
  return (
    node1.value === node2.value &&
    isSame(node1.left, node2.left) &&
    isSame(node1.right, node2.right)
  );
}

// ------------------------ Testing the Code ------------------------

// TreeNode Test
// let ceo = new TreeNode("CEO");
// let manager1 = new TreeNode("Manager1");
// let manager2 = new TreeNode("Manager2");
// let employee = new TreeNode("Employee");
// ceo.addChild(manager1);
// ceo.addChild(manager2);
// manager1.addChild(employee);
// printTree(ceo);
// printLevel(ceo);

// BST Test
let bst = new BST();
bst.insert(5);
bst.insert(4);
bst.insert(3);
bst.insert(6);
bst.insert(7);
bst.levelOrder();
console.log("Is Balanced:", bst.isBalancedBST(bst.root));

// Check if trees are same
let t1 = new BST();
t1.insert(5);
t1.insert(7);
t1.insert(6);
t1.insert(4);

let t2 = new BST();
t2.insert(5);
t2.insert(7);
t2.insert(6);
t2.insert(4);

let t3 = new BST();
t3.insert(5);
t3.insert(7);
t3.insert(4);
t3.insert(3);

console.log("t1 and t2 are same:", isSame(t1.root, t2.root));
console.log("t1 and t3 are same:", isSame(t1.root, t3.root));
