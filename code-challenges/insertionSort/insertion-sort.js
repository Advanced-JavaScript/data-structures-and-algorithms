'use strict';
/**
 * @function insertionSort to sort an array
 * @param arr the input array
 */
const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    let j = i - 1;
    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
  }
  return arr;
};
  
module.exports = insertionSort;