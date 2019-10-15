//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(data) {  // add to end
    let node = new Node(data);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }

  pop() {  // remove from end
    let currNode = this.tail;
    if (this.tail.prev === null) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = currNode.prev;
      this.tail.next = null;
    }
    return currNode.data;
  }

  shift() {  // remove from start
    let currNode = this.head;
    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = currNode.next
      this.head.prev = null;
    }
    return currNode.data;
  }

  unshift(data) {  // add to front
    let node = new Node(data);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
  }

  delete(data) {  // delete 1st node with matching data
    let currNode = this.head;
    while (currNode !== null) {
      if (currNode.data === data) {
        if (currNode.prev === null) {
          this.shift();
        } else if (currNode.next === null) {
          this.pop();
        } else {
          currNode.prev.next = currNode.next;
          currNode.next.prev = currNode.prev;
        }
        break;
      }
      currNode = currNode.next;
    }
  }

  count() {
    let counter = 0;
    let currNode = this.head;
    while (currNode !== null) {
      currNode = currNode.next;
      counter++
    }
    return counter;
  }
}
