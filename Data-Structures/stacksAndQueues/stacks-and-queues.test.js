'use strict';

const { Stack, Queue } = require('./stacks-and-queues.js');

describe('Stack tests', () => {
  it('Can successfully instantiate a stack', () => {
    const stack = new Stack();
    expect(stack).toBeDefined();
  });
  it('Can successfully check if a stack is empty', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBeTruthy();
  });
  it('Can successfully push onto a stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.top.value).toBe(1);
  });
  it('Can successfully push multiple nodes onto a stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top.value).toBe(3);
    expect(stack.top.next.value).toBe(2);
    expect(stack.top.next.next.value).toBe(1);
  });
  it('Can successfully pop off the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top.value).toBe(3);
    stack.pop();
    expect(stack.top.value).toBe(2);
  });
  it('Can successfully empty a stack after multiple pops.', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top.value).toBe(3);
    stack.pop();
    expect(stack.top.value).toBe(2);
    stack.pop();
    expect(stack.top.value).toBe(1);
    stack.pop();
    expect(stack.top).toBeNull();
  });
  it('Can successfully peek the next item on the stack.', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toBe(1);
  });
});

describe('Queue tests', () => {
  it('Can successfully instantiate a queue', () => {
    const queue = new Queue();
    expect(queue).toBeDefined();
  });
  it('Can successfully check if a queue is empty', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBeTruthy();
    queue.enqueue(1);
    expect(queue.isEmpty()).toBeFalsy();
  });
  it('Can successfully enqueue onto a queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.front.value).toBe(1);
  });
  it('Can successfully enqueue multiple items into a queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.front.value).toBe(1);
    queue.enqueue(2);
    expect(queue.front.next.value).toBe(2);
    queue.enqueue(3);
    expect(queue.front.next.next.value).toBe(3);
  });
  it('Can successfully dequeue off of a queue the expected value', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.front.value).toBe(1);
    queue.enqueue(2);
    expect(queue.front.next.value).toBe(2);
    expect(queue.front.value).toBe(1);
    queue.dequeue();
    expect(queue.front.value).toBe(2);
  });
  it('Can successfully peek into a queue, seeing the expected value', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.front.value).toBe(1);
    expect(queue.peek()).toBe(1);
    queue.enqueue(2);
    expect(queue.front.next.value).toBe(2);
    expect(queue.peek()).toBe(1);
    queue.enqueue(3);
    expect(queue.front.next.next.value).toBe(3);
    expect(queue.peek()).toBe(1);
    queue.enqueue(4);
    expect(queue.front.next.next.next.value).toBe(4);
    expect(queue.peek()).toBe(1);
  });
  it('Can successfully empty a queue after multiple dequeues', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    expect(queue.front.value).toBe(1);
    expect(queue.peek()).toBe(1);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toBeNull();
    expect(() => queue.peek().toThrow());
    expect(() => queue.dequeue().toThrow());
  });
});
