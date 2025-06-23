class Node {
  constructor() {
    this.children = {};
    this.end = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new Node();
      }
      node = node.children[char];
    }
    node.end = true;
  }

  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.end;
  }

  startWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }

  autocompletion(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return [];
      }
      node = node.children[char];
    }
    let result = [];
    function dfs(n, path) {
      if (n.end) {
        result.push(path);
      }
      for (let char in n.children) {
        dfs(n.children[char], path + char);
      }
    }
    dfs(node, prefix);
    return result;
  }
}

let t = new Trie();

t.insert("apple");
t.insert("app");
t.insert("apricot");
t.insert("banana");
t.insert("band");
t.insert("bandage");
t.insert("bat");
t.insert("bath");
t.insert("batman");
t.insert("ball");
t.insert("ballet");
t.insert("balloon");
t.insert("cat");
t.insert("can");
t.insert("candle");
t.insert("car");
t.insert("carbon");
t.insert("dog");
t.insert("dodge");
t.insert("door");
t.insert("dorm");
t.insert("duck");
t.insert("deal");
t.insert("dear");
t.insert("deer");


console.log(t.autocompletion(""));