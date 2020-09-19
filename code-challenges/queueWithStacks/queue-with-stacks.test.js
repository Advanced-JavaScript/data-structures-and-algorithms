'use strict';

const PseudoQueue = require('./queue-with-stacks.js');

describe('PseudoQueue class', () => {
  it('Can successfully instantiate a pseudoqueue', () => {
    const pq = new PseudoQueue();
    expect(pq).toBeDefined();
  });

  it('Can successfully enqueue onto a queue', () => {
    const pq = new PseudoQueue();
    pq.enqueue(1);
    expect(pq.main.top.value).toBe(1);
  });
  it('Can successfully enqueue multiple items onto a queue', () => {
    const pq = new PseudoQueue();
    pq.enqueue(1);
    expect(pq.main.top.value).toBe(1);
    pq.enqueue(2);
    expect(pq.main.top.value).toBe(1);
    expect(pq.main.top.next.value).toBe(2);
    pq.enqueue(3);
    expect(pq.main.top.value).toBe(1);
    expect(pq.main.top.next.value).toBe(2);
    expect(pq.main.top.next.next.value).toBe(3);
  });
  it('Can successfully dequeue of a queue the expected value', () => {
    const pq = new PseudoQueue();
    pq.enqueue(1);
    expect(pq.main.top.value).toBe(1);
    pq.enqueue(2);
    expect(pq.main.top.value).toBe(1);
    expect(pq.main.top.next.value).toBe(2);
    expect(pq.dequeue()).toBe(1);
  });
  it('Can successfully empty a queue after multiple dequeues', () => {
    const pq = new PseudoQueue();
    pq.enqueue(1);
    pq.enqueue(2);
    pq.enqueue(3);
    pq.enqueue(4);
    expect(pq.main.top.value).toBe(1);
    expect(pq.main.top.next.value).toBe(2);
    expect(pq.main.top.next.next.value).toBe(3);
    expect(pq.main.top.next.next.next.value).toBe(4);
    pq.dequeue();
    pq.dequeue();
    pq.dequeue();
    pq.dequeue();
    expect(pq.main.top).toBeNull();
  });
  it('Returns null when dequeue of an empty pseudoqueue', () => {
    const pq = new PseudoQueue();
    expect(pq.dequeue()).toBeNull();
  });
});