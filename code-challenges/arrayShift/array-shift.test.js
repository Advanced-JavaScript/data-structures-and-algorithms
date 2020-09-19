'use strict';

const insertShiftArray = require('./array-shift.js');


describe('`insertShiftArray` function', () => {
  describe('validate input', () => {
    it('should throw an error if it receives no arguments', () => {
      expect(() => insertShiftArray()).toThrow();
    });
    it('should throw an error if there is only one argument', () => {
      expect(() => insertShiftArray([1])).toThrow();
    });

    it('should throw an error if the first argument is not an array', () => {
      expect(() => insertShiftArray('hi', 2)).toThrow();
    });
    it('should throw an error if there are more than 2 arguments', () => {
      expect(insertShiftArray([1, 11], 1, 111, 11)).toEqual([1, 1, 11]);
    });
  });
  describe('validate output', () => {
    it('should insert the target `val` in the middle of an even-length `arr`', () => {
      expect(insertShiftArray([1, 2, 3, 4], 5)).toEqual([1, 2, 5, 3, 4]);
    });
    it('should insert the target `val` just after the middle of an odd-length `arr`', () => {
      expect(insertShiftArray([1, 2, 3, 4, 5], 6)).toEqual([1, 2, 3, 6, 4, 5]);
    });
  });
});