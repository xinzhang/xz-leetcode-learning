class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

LinkedList.prototype.getAt = function(idx) {
  let count = 0;
  let current = this.head;
  while (current.data) {
    if (count === idx) return current;
    count++;
    current = current.next;
  }
  return current.data;
};

// inserts
LinkedList.prototype.insertAtBeginning = function(data) {
  let newNode = new Node(data, this.head);
  this.head = newNode;
  return this.head;
};

LinkedList.prototype.insertAtEnd = function(data) {
  let newNode = new Node(data, null);
  if (!this.head) {
    this.head = newNode;
    return this.head;
  }
  let tail = this.head;
  while (tail.next != null) {
    tail = tail.next;
  }
  tail.next = newNode;
  return this.head;
};

LinkedList.prototype.insertAt = function(data, idx) {
  if (!this.head) {
    this.head = new Node(data);
    return this.head;
  }

  if (idx == 0) {
    this.head = new Node(data, this.head);
    return this.head;
  }

  const previous = this.getAt(idx - 1);
  previous.next = new Node(data, previous.next);

  return this.head;
};

// delete
LinkedList.prototype.deleteFirstNode = function() {
  if (!this.head) {
    return;
  }
  this.head = this.head.next;
  return this.head;
};

LinkedList.prototype.deleteLastNode = function() {
  if (!this.head) {
    return null;
  }
  // if only one node in the list
  if (!this.head.next) {
    this.head = null;
    return;
  }
  let previous = this.head;
  let tail = this.head.next;

  while (tail.next !== null) {
    previous = tail;
    tail = tail.next;
  }

  previous.next = null;
  return this.head;
};

LinkedList.prototype.deleteAt = function(index) {
  // when list is empty i.e. head = null
  if (!this.head) {
    this.head = new Node(data);
    return;
  }
  // node needs to be deleted from the front of the list i.e. before the head.
  if (index === 0) {
    this.head = this.head.next;
    return;
  }
  // else, use getAt() to find the previous node.
  const previous = this.getAt(index - 1);

  if (!previous || !previous.next) {
    return;
  }

  previous.next = previous.next.next;
  return this.head;
};

LinkedList.prototype.deleteList = function() {
  this.head = null;
};

module.exports = {
  LinkedList,
  Node
};

// testing
let list = new LinkedList();
let node2 = new Node(3);
let node1 = new Node(4, node2);
list.head = node1;

// ### logs
console.log(list);

list.insertAtBeginning(1);
list.insertAtBeginning(7);
list.insertAtEnd(10);
list.insertAtEnd(12);

console.log(list.getAt(3));
list.insertAt(15, 3);
console.log(list.getAt(3));

//console.dir(list, { depth: null });
