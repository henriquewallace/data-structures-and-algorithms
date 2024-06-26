// 10-->5-->16
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(headValue) {
    this.head = new Node(headValue);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
    }
    if (index >= this.length) {
      this.append(value);
    }

    const newNode = new Node(value);
    const leaderNode = this.traverseToIndex(index - 1);
    const holdingNode = leaderNode.next;

    leaderNode.next = newNode;
    newNode.next = holdingNode;
    this.length++;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
    }

    let leaderNode;
    let holdingPointerNode;
    if (index >= this.length) {
      leaderNode = this.traverseToIndex(this.length - 2);
      holdingPointerNode = leaderNode.next;
      leaderNode.next = null;
    } else {
      leaderNode = this.traverseToIndex(index - 1);
      holdingPointerNode = leaderNode.next;
      leaderNode.next = holdingPointerNode.next;
    }

    this.length--;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    let second = this.head.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;

    return this.printList();
  }
}

const myLinkedList = new LinkedList(10);
console.log(myLinkedList.append(5));
console.log(myLinkedList.append(16));
console.log(myLinkedList.prepend(2));
console.log(myLinkedList.tail);
console.log(myLinkedList.insert(2, 11));
console.log(myLinkedList.printList());
console.log(myLinkedList.remove(4343));
console.log(myLinkedList.reverse());
