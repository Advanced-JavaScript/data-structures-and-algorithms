'use strict';

const { Node } = require('../../Data-Structures/linkedList/linked-list');

function reverseList(LL) {
  let prev = new Node();
  let curr = LL.head;
  let nextTemp = new Node()
  while (curr !== null) {
    nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
}

reverseList(test);
