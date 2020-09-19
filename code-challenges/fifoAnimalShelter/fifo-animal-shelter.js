'use strict';

const { Node } = require('../../Data-Structures/linkedList/linked-list');

class AnimalShelter {
  constructor() {
    this.back = null;
    this.front = null;
  }

  enqueue(animal) {
    if (animal !== 'dog' && animal !== 'cat') {
      return null;
    }
    const node = new Node(animal);
    if (this.back) {
      this.back.next = node;
    }
    this.back = node;
    if (!this.front) {
      this.front = node;
    }
  }

  dequeue(pref) {
    if (pref !== 'dog' && pref !== 'cat') {
      return null;
    }
    let current = this.front;
    if (!current) {
      return null;
    }

    if (!current.next) {
      if (current.value === pref) {
        this.front = null;
        this.back = null;
        return current.value;
      } else {
        return null;
      }
    }

    if (current.value === pref) {
      this.front = current.next;
      return current.value;
    }

    let target;
    this.enqueue(current.value);
    this.back.initial = true;
    this.front = current.next;
    current = this.front;

    while (current.next) {
      this.enqueue(current.value);
      this.front = current.next;
      current = this.front;
      if (current.value === pref) {
        this.front = current.next;
        target = current;
        current = this.front;
        break;
      }
    }
    while (!current.initial) {
      this.enqueue(current.value);
      current = this.front.next;
      this.front = current;
    }
    delete this.front.initial;
    return target.value;
  }
}

module.exports = AnimalShelter;