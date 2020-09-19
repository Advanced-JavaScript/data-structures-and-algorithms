'use strict';

const zipLists = (a, b) => {
  if (typeof a !== 'object' || typeof b !== 'object') {
    throw new Error('Arguments must be objects.');
  }
  let currentA = a.head;
  let currentB = b.head;

  if (!currentA) {
    return currentB;
  } else if (!currentB) {
    return currentA;
  }

  while (currentA.next && currentB.next) {
    b.head = currentB.next;
    currentB.next = currentA.next;
    currentA.next = currentB;
    currentA = currentB.next;
    currentB = b.head;
  }

  if (currentB) {
    currentA.next = currentB;
  }
  return a.head;
};

module.exports = zipLists;
