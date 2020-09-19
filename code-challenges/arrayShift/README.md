# Array Shift

# Challenge Summary

Insert and shift an array in middle at index.

## Challenge Description

Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Approach & Efficiency

create an empty array and then loop through the input array a single time. If the index of the input array is before its midpoint (rounded up), the element is added to the new array. If the index is at the midpoint, we add the element and the additional argument value. If the index is after the midpoint, we add the input array value, accounting for the now-different values at each index of the new array and the input array.

## Solution
![](../../assets/arrayShift.jpg)
