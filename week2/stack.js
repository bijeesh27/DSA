class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.isEmpty()) {
      return "stack is empty";
    }
    this.items.pop();
  }
  peek() {
    if (this.isEmpty()) {
      return "stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

  printStack() {
    console.log(this.items.join(" "));
  }
}

let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.printStack();
