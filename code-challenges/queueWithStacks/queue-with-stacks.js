'use strict';

const { Stack } = require('../../Data-Structures/stacksAndQueues/stacks-and-queues');

class PseudoQueue {
  constructor() {
    this.main = new Stack();
    this.temp = new Stack();
  }
  enqueue(value) {
    while (this.main.top) {
      const current = this.main.pop();
      this.temp.push(current);
    }
    this.main.push(value);
    while (this.temp.top) {
      const current = this.temp.pop();
      this.main.push(current);
    }
  }
  dequeue() {
    if (this.main.top) {
      return this.main.pop();
    }
    return null;
  }
}
  
module.exports = PseudoQueue;