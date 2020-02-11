function node(val, next = null) {
  this.val = val;
  this.next = next;
}

function linkedlist(vals) {
  let result = {};
  let current = {};
  for (let i = 0; i < vals.length; i++) {
    const a = new node(vals[i]);
    current.next = a;
    current = a;
    if (i == 0) {
      result = current;
    }
  }
  return result;
}

linkedlist.prototype.getAt = function(index) {
  console.log("getAt");
  let counter = 0;
  let node = this;
  console.log(node);

  while (node) {
    if (counter === index) {
      return node.val;
    }
    counter++;
    node = node.next;
  }
  return null;
};

function addTwoNumbers(list1, list2) {}

const values1 = [2, 4, 3];
const list1 = new linkedlist(values1);

//const values2 = [5, 6, 4];
//const list2 = linkedlist(values2);

console.log(list1);
console.log(list1.prototype.getAt(0));
