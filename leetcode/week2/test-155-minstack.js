/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
 

Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
*/

/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.arrs = [];
    this.min = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.arrs.push(x);
    if (this.min.length === 0) {
        this.min.push(x);
    } else {
        let current = this.min[this.min.length - 1];
        this.min.push(Math.min(current, x));
    }
    console.log(this.arrs, this.min);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.arrs.length > 0) {
        this.arrs.pop();
        this.min.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (this.arrs.length > 0) {
        return this.arrs[this.arrs.length - 1];
    } else {
        return null;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    if (this.min.length != 0) return this.min[this.min.length - 1];
    return null;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
console.log(obj.min);
console.log(obj.getMin());
obj.pop();
obj.top();
console.log(obj.getMin());
