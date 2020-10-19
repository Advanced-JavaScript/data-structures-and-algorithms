'use strict';

const { LinkedList } = require('../../Data-Structures/linkedList/linked-list');

/**
 * @function repeatedWord returns first repeated word in a string
 * @param {*} str 
 */
const repeatedWord = str => {
  const hashTable = Array(1024).fill(new LinkedList());
  const words = str.split(' ');

  let repeatedword = null;
  for (let i = 0; i < words.length; i++) {
    const regex = /[a-z]+/gi;
    const word = words[i].toLowerCase().match(regex)[0];
    const index = hash(word);
    if (hashTable[index].includes(word)) {
      repeatedword = word;
      break;
    } else {
      hashTable[index].insert(word);
    }
  }
  return repeatedword;
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