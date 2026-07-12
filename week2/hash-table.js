// Hash Table

class Hash {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let hash = 0;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size;
  }

  set(key, value) {
    let index = this.hash(key);
    this.table[index] = value;
  }

  get(key) {
    let index = this.hash(key);
    return this.table[index];
  }

  remove(key) {
    let index = this.hash(key);
    this.table[index] = undefined;
  }

  display() {
    console.log(this.table);
  }
}

let h = new Hash(10);

// h.set("name","bijeesh")
// h.set('ma','jenitta')

// h.set('age',22)
// h.remove("name")
// console.log(h.get("name"))

h.display();

//

class Linear {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let hash = 0;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.size;
  }

  set(key, value) {
    let index = this.hash(key);
    while (this.table[index] && this.table[index][0] !== key) {
      index = (index + 1) % this.size;
    }
    this.table[index] = [key, value];
  }
  get(key) {
    let index = this.hash(key);
    while (this.table[index]) {
      if (this.table[index][0] === key) {
        return this.table[index][1];
      }
      index = (index + 1) % this.size;
    }
    return undefined;
  }

  remove(key) {
    let index = this.hash(key);
    while (this.table[index]) {
      if (this.table[index][0] === key) {
        this.table[index] = null;
        return true;
      }
      index = (index + 1) % this.size;
    }
    return false;
  }
  display() {
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        console.log(`Index ${i} : ${this.table[i][0]} => ${this.table[i][1]}`);
      } else {
        console.log(`Index ${i} : Empty`);
      }
    }
  }
}


let lp=new Linear(10)

// lp.set("name","bijeesh")
// lp.set("mane","jenitta")
// lp.set("manes","jenitta")
// lp.set("age",22)

// lp.remove("manes")

// console.log(lp.get("age"));

lp.display()