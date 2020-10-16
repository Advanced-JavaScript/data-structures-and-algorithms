'use strict';

const { LinkedList } = require('../../Data-Structures/linkedList/linked-list');

/**
 * @function repeatedWord
 * @param {*} str 
 */
const repeatedWord = str => {
  const hashTable = Array(1024).fill(new LinkedList());
  const words = str.split(' ');

  let result = null;
  for (let i = 0; i < words.length; i++) {
    const regex = /[a-z]+/gi;
    const word = words[i].toLowerCase().match(regex)[0];
    const index = hash(word);
    if (hashTable[index].includes(word)) {
      result = word;
      break;
    } else {
      hashTable[index].insert(word);
    }
  }
  return result;
};

/**
 * @function hash
 * @param {*} word 
 */
const hash = word => {
  let sum = 0;
  for (let i = 0; i < word.length; i++) {
    sum += word.charCodeAt(i);
  }
  const product = sum * 599;
  const index = Math.floor(product % 1024);
  return index;
};

module.exports = { repeatedWord, hash };