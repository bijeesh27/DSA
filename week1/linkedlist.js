//Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Prepend - adding an element to the START of the list

  prepend(value) {
    let node = new Node(value);
    if (this.head == null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // Append - adding an element to the END of the list

  append(value) {
    let node = new Node(value);
    if (this.head == null) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  // Insert - add an element at a specific position in the list

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return null;
    } else if (index === 0) {
      this.prepend(value);
    } else {
      let node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  // Reverse - reverse the order of elements in the list

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  // Print - display the contents of the list

  print() {
    if (this.head == null) {
      console.log("The List Is Empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} -> `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

let list = new LinkedList();

list.prepend(4);
list.prepend(2);
list.prepend(6);
list.prepend(3);

list.append(2);
list.append(5);
list.append(8);
list.append(9);
list.insert(777, 4);

list.print();
list.reverse();
list.print();
