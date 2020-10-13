'use strict';

const quickSort = require('./quick-sort');

describe('merge sort algorithm', () => {
  it('should return an empty array argument unchanged', () => {
    const empty = [];
    expect(quickSort(empty)).toEqual(empty);
  });
  it('should return a single-element array unchanged', () => {
    const one = [1];
    expect(quickSort(one)).toEqual(one);
  });
  it('should sort a random unsorted array', () => {
    const isSorted = arr => {
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          return false;
        }
      }
      return true;
    };
    const arr = [7, 5, 11, 4, 0];
    expect(isSorted(quickSort(arr))).toBeTruthy();
  });
  it('should return a sorted array with no changes', () => {
    const arr = [1, 1, 2, 3, 4, 5, 99, 1000];
    const array = [1, 1, 2, 3, 4, 5, 99, 1000];
    expect(quickSort(arr)).toEqual(array);
  });
  it('should return a backwards-sorted array in sorted order', () => {
    const backwards = [12121, 1221, 99, 88, 77, 66, 44, 22, 1, 0.123];
    const forwards = [0.123, 1, 22, 44, 66, 77, 88, 99, 1221, 12121];
    expect(quickSort(backwards)).toEqual(forwards);
  });
});