// Tree implementation

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

// let ceo = new TreeNode("CEO");

// let manager1 = new TreeNode("Manager1");
// let manager2 = new TreeNode("Manager2");
// let employee = new TreeNode("employee");

// ceo.addChild(manager1);
// ceo.addChild(manager2);
// manager1.addChild(employee);
// console.log("printTree");
// printTree(ceo);
// console.log(" ");
// console.log("printTree in level");
// printLevel(ceo);

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
    let node = new Node(value);
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
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (root.value > value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  levelOrder() {
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(root, value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root == null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }

  height(node) {
    if (!node) {
      return -1;
    }
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  depth(root, target, depth = 0) {
    if (!root) {
      return -1;
    }
    if (root.value === target) {
      return depth;
    }
    let left = this.depth(root.left, target, depth + 1);
    if (left !== -1) {
      return left;
    }
    return this.depth(root.right, target, depth + 1);
  }
}

let b = new BST();

b.insert(50);
b.insert(30);
b.insert(60);
b.insert(45);
b.insert(55);
b.insert(25);
b.insert(65);
b.insert(75);

// b.preOrder(b.root)

// console.log(b.search(b.root,43))

// console.log(b.min(b.root))
// console.log(b.max(b.root))

// b.delete(b.root,45)
// b.levelOrder()

// console.log(b.height(b.root))

console.log(b.depth(b.root, 75));
