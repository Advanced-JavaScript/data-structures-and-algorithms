'use strict';

const { Stack } = require('../../Data-Structures/stacksAndQueues/stacks-and-queues');

const multiBracketValidation = str => {
  if (typeof str !== 'string' || !str) {
    return null;
  }

  const st = new Stack();
  const opener = /[([{]/g;
  const closer = /[)\]}]/g;
  const matchers = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < str.length; i++) {
    const letter = str.charAt(i);

    if (opener.test(letter)) {
      st.push(letter);
    }

    if (closer.test(letter)) {
      let popped;
      if (st.peek()) {
        popped = st.pop();
      } else {
        return false;
      }

      if (matchers[popped] !== letter) {
        return false;
      }
    }
  }
  if (st.top) {
    return false;
  }

  return true;
};

module.exports = multiBracketValidation;