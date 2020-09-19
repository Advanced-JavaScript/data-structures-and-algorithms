'use strict';

const { Node, LinkedList } = require('./linked-list.js');

describe('LinkedList class test', () => {
  it('Can successfully instantiate an empty linked list', () => {
    const ll = new LinkedList();
    expect(ll).toBeDefined();
    expect(ll.head).toBeNull();
  });
  it('Can insert into the linked list', () => {
    const ll = new LinkedList();
    ll.insert('a');
    expect(ll.head).toBeInstanceOf(Node);
    expect(ll.head.value).toBe('a');
  });
  it('Can insert multiple nodes into the linked list', () => {
    const ll = new LinkedList();
    ll.insert('a');
    ll.insert('b');
    ll.insert('c');
    expect(ll.head.value).toBe('c');
    expect(ll.head.next.value).toBe('b');
    expect(ll.head.next.next.value).toBe('a');
  });
  it('Will return true when finding a value within the linked list that exists', () => {
    const ll = new LinkedList();
    ll.insert('a');
    const test = ll.includes('a');
    expect(test).toBeTruthy();
  });
  it('Will return false when searching for a value in the linked list that does not exist', () => {
    const ll = new LinkedList();
    ll.insert('a');
    const test = ll.includes('c');
    expect(test).toBeFalsy();
  });
  it('Can return a collection of all the values that exist in the linked list', () => {
    const ll = new LinkedList();
    ll.insert('a');
    ll.insert('b');
    ll.insert('c');
    const collection = ll.toString();
    console.log(collection);
    expect(collection).toBeDefined();
  });
});

describe('Testing append, insertAfter and insertBefore methods', () => {
  it('Can successfuly add a node to the end of an empty linked list', () => {
    const ll = new LinkedList();
    ll.append('a');
    expect(ll.head.value).toBe('a');
  });
  it('Can successfully add a node to the end of the linked list', () => {
    const ll = new LinkedList();
    ll.insert('b');
    ll.insert('a');
    ll.append('c');

    let currentNode = ll.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    expect(currentNode.value).toBe('c');
  });
  it('Can successfully add multiple nodes to the end of a linked list', () => {
    const ll = new LinkedList();
    ll.insert('a');
    ll.append('b');
    ll.append('c');

    let currentNode = ll.head;
    expect(currentNode.next.value).toBe('b');

    currentNode = ll.head.next;
    expect(currentNode.next.value).toBe('c');
  });
  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    ll.append('d');
    ll.insertBefore('d', 'c');
    const middle = ll.head.next;
    const next = middle.next;
    expect(next.value).toBe('c');
  });
  it('Can successfully insert a node before the first node of a linked list', () => {
    const ll = new LinkedList();
    ll.insert('b');
    ll.insertBefore('b', 'a');
    expect(ll.head.value).toBe('a');
  });
  it('Can successfully insert after a node in the middle of the linked list', () => {
    const ll = new LinkedList();
    ll.insert('c');
    ll.insert('a');
    ll.insertAfter('a', 'b');
    const head = ll.head;
    expect(head.value).toBe('a');
    const middle = head.next;
    expect(middle.value).toBe('b');
  });
  it('Can successfully insert a node after the last node of the linked list', () => {
    const ll = new LinkedList();
    ll.insert('a');
    ll.insertAfter('a', 'b');
    const last = ll.head.next;
    expect(last.value).toBe('b');
  });
});

describe('kthFromEnd method', () => {
  const ll = new LinkedList();
  ll.append(1);
  ll.append(3);
  ll.append(8);
  ll.append(2);
  it('Should throw an error where `k` is greater than the length of the linked list', () => {
    expect(() => ll.kthFromEnd(100)).toThrow();
  });
  it('Should return a value where `k` and the length of the list are the same', () => {
    expect(ll.kthFromEnd(4)).toBe(1);
  });
  it('Should throw an error where `k` is not a positive integer', () => {
    expect(() => ll.kthFromEnd(-1)).toThrow();
  });

  it('Should return a value where the linked list is of a size 1', () => {
    const nl = new LinkedList();
    nl.append('a');
    expect(nl.kthFromEnd(0)).toBe('a');
  });
  it('Should return a value where `k` is not at the end, but somewhere in the middle of the linked list', () => {
    expect(ll.kthFromEnd(2)).toBe(3);
  });
});