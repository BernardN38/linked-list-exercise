/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    let previousNode = this.head;
    let currentNode = this.head;
    if (this.length < 2) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return currentNode.val;
    }
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = previousNode;
    previousNode.next = null;
    this.length--;
    return currentNode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 1) {
      this.tail = null;
    }
    let currentNode = this.head;
    this.head = currentNode.next;
    this.length--;
    return currentNode.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i === idx) {
        return currentNode.val;
      }
      currentNode = currentNode.next;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let previousNode = this.head;
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i === idx) {
        currentNode.val = val;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let previousNode = this.head;
    let currentNode = this.head;
    if (idx === 0) {
      this.unshift(val);
      return;
    }
    for (let i = 0; i <= idx; i++) {
      if (i === idx) {
        const newNode = new Node(val);
        previousNode.next = newNode;
        newNode.next = currentNode;
        this.length++;
        if (i === this.length - 1) {
          this.tail = newNode;
        }
        break;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let previousNode = this.head;
    let currentNode = this.head.next;
    if (idx === 0) {
      this.head = currentNode;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
        this.length = 0;
      }
    }
    for (let i = 0; i < this.length; i++) {
      if (i === idx) {
        if (i === this.length - 1) {
          previousNode.next === null;
          this.tail = null;
        }
        previousNode.next = currentNode.next;
        this.length--;
        return;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let currentNode = this.head;
    let totalValue = 0;
    let elCount = 0;
    while (currentNode) {
      totalValue += currentNode.val;
      elCount++;
      currentNode = currentNode.next;
    }
    return totalValue / elCount || 0;
  }
}

module.exports = LinkedList;
