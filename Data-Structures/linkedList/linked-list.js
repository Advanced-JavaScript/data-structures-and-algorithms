'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  includes(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;

  }

  toString() {
    const allNodes = [];
    let currentNode = this.head;
    let i = 0;
    while (currentNode !== null) {
      allNodes[i] = currentNode.value;
      i++;
      currentNode = currentNode.next;
    }
    let result = allNodes.map(node => {
      return `${node} ->`;
    });
    return `${result} Null`;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  insertAfter(value, newValue) {
    const newNode = new Node(newValue);
    let currentNode = this.head;
    do {
      if (currentNode.value === value) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        break;
      }
    } while (currentNode.next !== null);
  }

  insertBefore(value, newValue) {
    const newNode = new Node(newValue);
    let currentNode = this.head;

    if (currentNode.value === value) {
      newNode.next = currentNode;
      this.head = newNode;
      return;
    }

    while (currentNode) {
      if (currentNode.next.value === value) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        break;
      }
      currentNode = currentNode.next;
    }
  }

  kthFromEnd(k) {
    if (k < 0) {
      throw new Error('Argument must be >= 0');
    }
    let len = 1;
    let current = this.head;
    while (current.next) {
      len++;
      current = current.next;
    }
    if (k > len) {
      throw new Error(
        'Argument must be less than the length of the LinkedList instance.');
    }
    
    current = this.head;
    for (let i = 1; i < len - k; i++) {
      current = current.next;
    }
    return current.value;
  }

}

module.exports = { Node, LinkedList };
