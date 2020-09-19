'use strict';

const binarySearch = require('./array-binary-search.js');

describe('binarySearch', () => {
  const arr = [1, 2, 3, 4, 5];

  describe('input validation', () => {
    it('should return `-1` if the first argument is not an array', () => {
      const str = 'whatever';
      const key = 0;
      expect(binarySearch(str, key)).toBe(-1);
    });
    it('should return `-1` if the second argument is not a number', () => {
      const key = {};
      expect(binarySearch(arr, key)).toBe(-1);
    });
    it('should return `-1` if the second argument is an Array', () => {
      const key = [ 'key'];
      expect(binarySearch(arr, key)).toBe(-1);
    });
    it('should return `-1` if the second argument is a Function', () => {
      const key = function() {};
      expect(binarySearch(arr, key)).toBe(-1);
    });
    it('should return `-1` if the second argument is undefined', () => {
      expect(binarySearch(arr)).toBe(-1);
    });
  });

  describe('output validation', () => {
    it('should return the index of the array element that is equal to the search key if the element is in the middle of the array', () => {
      const key = 2;
      expect(binarySearch(arr, key)).toBe(1);
    });
    it('should return the index of the array element that is equal to the search key if the element is before the middle of the array', () => {
      const key = 1;
      expect(binarySearch(arr, key)).toBe(0);
    });
    it('should return the index of the array element that is equal to the search key if the element is after the middle of the array', () => {
      const key = 3;
      expect(binarySearch(arr, key)).toBe(2);
    });
    it('should return -1 if the element is not in the array', () => {
      const key = 100;
      expect(binarySearch(arr, key)).toBe(-1);
    });
  });
});