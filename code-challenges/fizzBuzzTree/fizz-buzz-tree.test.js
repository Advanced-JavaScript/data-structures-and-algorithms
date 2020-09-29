'use strict';

const fizzBuzzTree = require('./fizz-buzz-tree');
const { BinarySearchTree } = require('../../Data-Structures/tree/tree');

describe('`fizzBuzzTree` function', () => {
  it('should return `null` if the argument is not a tree', () => {
    expect(fizzBuzzTree(0)).toBeNull();
  });

  it('should return an empty tree if the root is empty', () => {
    const bt = new BinarySearchTree();
    expect(fizzBuzzTree(bt)).toEqual(bt);
  });

  it('should replace the root value with the right word if it is divisible by 3, 5, or both', () => {
    const bt = new BinarySearchTree();
    bt.add(15);
    expect(fizzBuzzTree(bt).root.value).toBe('FizzBuzz');
  });

  it('should replace values divisible by `3` with `Fizz`', () => {
    const bt = new BinarySearchTree();
    bt.add(9);
    bt.add(6);
    bt.add(3);
    bt.add(12);
    bt.add(18);
    bt.add(21);
    const result = fizzBuzzTree(bt);
    expect(result.root.value).toBe('Fizz');
    expect(result.root.right.value).toBe('Fizz');
    expect(result.root.left.left.value).toBe('Fizz');
    expect(result.root.left.left.value).toBe('Fizz');
    expect(result.root.right.right.value).toBe('Fizz');
  });

  it('should replace values that can be divided by 5 with `Buzz`', () => {
    const bt = new BinarySearchTree();
    bt.add(5);
    bt.add(10);
    bt.add(-10);
    bt.add(-5);
    bt.add(10);
    const result = fizzBuzzTree(bt);
    expect(result.root.value).toBe('Buzz');
    expect(result.root.right.value).toBe('Buzz');
    expect(result.root.left.value).toBe('Buzz');
    expect(result.root.left.right.value).toBe('Buzz');
  });
  
});