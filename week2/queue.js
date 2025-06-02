// implement Queue

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  printQueue() {
    console.log(this.items.join(" "));
  }

  clear() {
    this.items = [];
  }
}

let queue = new Queue();

queue.enqueue(25);
queue.enqueue(35);
queue.enqueue(45);

queue.dequeue();

console.log(queue.front());
console.log(queue.isEmpty());
console.log(queue.size());

queue.printQueue();
queue.clear();
queue.printQueue();


//Queue Using Stack


