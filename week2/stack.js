// stack Implementation

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

stack.pop();

stack.printStack();

// Stack using Queue

class StackUsingQueue {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }

  push(element) {
    this.q2.push(element);
    while (this.q1.length) {
      this.q2.push(this.q1.shift());
    }

    [this.q1, this.q2] = [this.q2, this.q1];
  }

  pop() {
    if (this.isEmpty()) {
      console.log("The stack is empty");
    }
    this.q1.shift();
  }

  top() {
    if (this.isEmpty()) {
      console.log("The stack is empty");
    }
    return this.q1[0];
  }

  isEmpty() {
    return this.q1.length === 0;
  }
  printStack() {
    if (this.isEmpty()) {
      console.log("The stack is empty");
    }
    console.log(this.q1.join(" "));
  }
}

let stackUsingQueue = new Stack();

stackUsingQueue.push(10);
stackUsingQueue.push(30);
stackUsingQueue.push(60);

stackUsingQueue.pop();

// console.log(stackUsingQueue.top())

stackUsingQueue.printStack();
