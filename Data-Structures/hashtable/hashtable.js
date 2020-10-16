'use strict';
/**
 * @class LinkedList to be the type for the buckets
 * @class HashTable 
 */
const { LinkedList } = require('../linkedList/linked-list');

class Hashtable {
  constructor(size) {
    this.size = size || 1024;
    this.entries = new Array(size).fill(new LinkedList());
  }
  hash(key){
    let hashedSum = 0;
    for(let i=0; i<key.length; i++){
      let hashedChar = i*(key[i].charCodeAt());
      hashedSum = hashedSum + hashedChar;
    }
    let primeHash = hashedSum*599;

    return primeHash%(this.size);
  }

  // hash(key) {
  //   let charArr = key.split('');
  //   return charArr.reduce((p, n )=> {
  //     return p + n.charCodeAt(0);
  //   }, 0) * 599 % this.size;
  // }

  add(key, value) {
    const hashIndex = this.hash(key);
    this.entries[hashIndex].append(value);
  }

  get(key) {
    const index = this.hash(key);
    return this.entries[index]  ? this.entries[index] : false;
  }
  // contains(key) {
  //   const hashIndex = this.hash(key);
  //   return this.entries[hashIndex].print.length > 0 ? true : false;
  // }
  contains(key){

    const index = this.hash(key);
    
    if(this.entries[index] === undefined){
      return false;
    }

    if(this.entries[index].head){
      let currentBucket = this.entries[index].head;
      while(currentBucket){
        if(currentBucket.key === key){
          return true;
        } else {
          currentBucket = currentBucket.next;
        }
      }
      return false;
    }
  }

}
  
module.exports = Hashtable ;
