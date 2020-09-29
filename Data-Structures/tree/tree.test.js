'use strict';

const {Node, BinaryTree, BinarySearchTree} = require('./tree');

describe('Binary Tree', ()=> {

  let tree; 
  beforeAll(()=> {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.right = three;
    one.left = two;
    two.left = six;
    six.right = seven;
    seven.right = nine;
    seven.left = eight;
    three.right = five;
    three.left = four;

    tree = new BinaryTree(one);

  });

  it('preOrder()', ()=> {
    let expected = [1, 2, 6, 7, 8, 9 ,3, 4, 5];
    let preOrderOutput = tree.preOrder();
    expect(preOrderOutput).toEqual(expected);
  });

  it('inOrder()', ()=> {
    let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    let inOrderOutput = tree.inOrder();
    expect(inOrderOutput).toEqual(expected);
  });

  it('postOrder()', ()=> {
    let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    let postOrderOutput = tree.postOrder();
    expect(postOrderOutput).toEqual(expected);
  }); 

  it('should return the maximum value of a binary tree', () => {
    let max = tree.findMaximumValue();
    expect(max).toEqual(9);
    expect(max).not.toEqual(8);
  });
  it('should return the breadth first traversal of a tree', () => {
    let bft = tree.breadthFirst();
    expect(bft).toEqual([1,2,3,6,4,5,7,8,9]);
  });
});

describe('binary search tree', () => {
  let binarySearchTree;
  const addNodes = () => {
    binarySearchTree.add(4);
    binarySearchTree.add(3);
    binarySearchTree.add(5);
    binarySearchTree.add(2);
    binarySearchTree.add(8);
    binarySearchTree.add(7);
  };
  
  beforeEach(() => {
    binarySearchTree = new BinarySearchTree();
    addNodes();
  });
  
  it('can add nodes in the correct location', () => {

    expect(binarySearchTree.root.value).toEqual(4);
    expect(binarySearchTree.root.left.value).toEqual(3);
    expect(binarySearchTree.root.left.left.value).toEqual(2);
    expect(binarySearchTree.root.right.value).toEqual(5);
    expect(binarySearchTree.root.right.right.value).toEqual(8);
    expect(binarySearchTree.root.right.right.left.value).toEqual(7);
  });
  
  it('can handle returning out when adding an existing value to a binary search tree', () => {
    binarySearchTree.add(4);
    expect(binarySearchTree.root.value).toEqual(4);
  });
  
  it('can look at a BST to see if it contains a given value', () => {
    expect(binarySearchTree.contains(4)).toEqual(true);
    expect(binarySearchTree.contains(1)).toEqual(false);
    expect(binarySearchTree.contains(33)).toEqual(false);
  });
  
  it('can initialize a binary search tree with a value', () => {
    const datTree = new BinarySearchTree(new Node(3));  
    expect(datTree.root.value).toEqual(3);
  });
  
  it('can perform a pre-order traversal', () => {
    expect(binarySearchTree.preOrder()).toEqual([4, 3, 2, 5, 8, 7]);
  });
  
  it('can perform an in-order traversal', () => {
    expect(binarySearchTree.inOrder()).toEqual([2, 3, 4, 5, 7, 8]);
  });
  
  it('can perform a post-order traversal', () => {
    expect(binarySearchTree.postOrder()).toEqual([2, 3, 7, 8, 5, 4]);
  });
  it('should return the maximum value of a binary search tree', () => {
    let sMax = binarySearchTree.findMaximumValue();
    expect(sMax).toEqual(8);
    expect(sMax).not.toEqual(7);
  });
  it('should return the breadth first traversal of a tree', () => {
    let sMax = binarySearchTree.breadthFirst();
    expect(sMax).toEqual([4, 3, 5, 2, 8, 7]);
  });

  
});