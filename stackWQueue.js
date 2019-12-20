/*

stack  last in first out
  push
  pop
  count

queue first in first out
  queue
  dequeue
  count

  Implement a stack using 1 queue
  keep track of number of elements 3 elements
  rotate queue
    remove first element
    add it to the top
    remove the second element
    add it to the top
    next element is the last elemt

*/

/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.queue = new Queue();

};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 *
 * all the last element added to the bottom of the stack
 */
MyStack.prototype.push = function (x) {
  let rotations = this.queue.size();
  this.queue.enQueue(x);
  while (rotations > 0) {
    this.queue.enQueue(this.queue.deQueue());
    rotations--;
  }

};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.queue.deQueue()

};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.queue.peek();
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.isEmpty()

};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

class Queue {
  constructor() {
    this.storage = {};
    this.last = 0;
    this.first = 0;
  }
  peek() {
    return this.storage[this.first];
  }
  size() {
    return this.last - this.first;
  }
  isEmpty() {
    return this.last === this.first
  }
  deQueue() {
    let first = this.storage[this.first];
    delete this.storage[this.last];
    this.first++;
    return first;
  }
  enQueue(val) {
    this.storage[this.last] = val;
    this.last++;
  }
}