'use strict';
/**
 * 
 * @param {*} left index
 * @param {*} right index
 */
function merge (left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;
  
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; 
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; 
    }
  }
  
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

function mergeSort (unsortedArray) {
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  const mid = Math.floor(unsortedArray.length / 2);
  
  const left = unsortedArray.slice(0, mid);
  const right = unsortedArray.slice(mid);
  
  return merge(mergeSort(left), mergeSort(right));
}

module.exports = mergeSort;
