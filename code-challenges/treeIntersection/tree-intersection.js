'use strict'

const HashTable = require('../../Data-Structures/hashtable/hashtable');

function treeIntersection(tree1, tree2){

  const tree1Array = tree1.preOrder();
  const tree2Array = tree2.preOrder();
  const treeHash = new HashTable(tree1Array.length);
  const returnArray = [];
  
  tree1Array.forEach(val => {
    treeHash.add(val,val);
  })

  tree2Array.forEach(val => {
    if(treeHash.contains(val)){
      returnArray.push(val);
    }
  })

  return returnArray;

};

module.exports = treeIntersection;