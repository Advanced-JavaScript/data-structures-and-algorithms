'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
    
  constructor(root) {
    this.root = root || null;
  }
  // Root - Left - Right
  preOrder() {
    let output = [];
    let _traverse = (node) => {
      output.push(node.value);
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return output;
  }
  // Left - Root - Right
  inOrder() {
    let output = [];
    let _traverse = (node) => {
      if (node.left) _traverse(node.left);
      output.push(node.value);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return output;
  }
  // Left - Right - Root
  postOrder() {
    let output = [];
    let _traverse = (node) => {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      output.push(node.value);
    };
    _traverse(this.root);
    return output;
  }
  // Find the maximum value in a tree
  findMaximumValue(){
    if(!this.root){
      return null;
    }
    let max = this.root.value;
    const _max = (node) => {
      max =node.value>max ?node.value:max;
      if (node.left) _max(node.left);
      if (node.right) _max(node.right);
    };
    _max(this.root);
    return max;
  }

}

class BinarySearchTree extends BinaryTree {
  constructor(root) {
    super(root);
  }
  
  add(val) {
    const newNode = new Node(val);
  
    if (!this.root) {
      this.root = newNode;
      return;
    }
  
    let _insert = (node) => {
      if (val === node.value) {
        return;
      }
      if (val > node.value) {
        if (node.right) {
          _insert(node.right);
        } else {
          node.right = newNode;
          return;
        }
      }
      if (val < node.value) {
        if (node.left) {
          _insert(node.left);
        } else {
          node.left = newNode;
          return;
        }
      }
    };
    _insert(this.root);
  }
  
  contains(val) {
    if (!this.root) {
      return false;
    }
    let _search = (node,val) => {
      if (node) {
        if (val === node.value) {
          return true;
        }
        else if (val < node.value) {
          _search(node.left,val);
        }
        else if (val > node.value) {
          _search(node.right,val);
        }
      } 
      return false;
    };
    
    return _search(this.root,val);
  }
}

module.exports = {BinaryTree, BinarySearchTree, Node};