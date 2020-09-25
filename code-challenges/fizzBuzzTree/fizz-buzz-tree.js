'use strict';

const fizzBuzzTree = tree => {
  if (typeof tree !== 'object') {
    return null;
  }

  let current;
  if (tree.root) {
    current = tree.root;
  } else if (tree.value) {
    current = tree; // for recursion
  } else {
    return tree;
  }
  if (current.value % 3 === 0 && current.value % 5 === 0) {
    current.value = 'FizzBuzz';
  } else if (current.value % 3 === 0) {
    current.value = 'Fizz';
  } else if (current.value % 5 === 0) {
    current.value = 'Buzz';
  }

  if (current.left) {
    fizzBuzzTree(current.left);
  }
  if (current.right) {
    fizzBuzzTree(current.right);
  }
  return tree;
};

module.exports = fizzBuzzTree;