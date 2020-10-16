# Tree Tntersection

# Challenge Summary

Write a function called tree_intersection that takes two binary tree parameters.

## Challenge Description

Without utilizing any of the built-in library methods available to the javascript language, return a set of values found in both trees.

## Approach & Efficiency

I wrote a new HashTable class with tests that has add(value), has(value), hash(value), and print() methods. This version of the hash table handles collisions but does not store duplicate values.
Within my treeIntersection function, I create a new instance of HashTable and an addPreOrder method that adds the data from a binary tree to the has table via a pre-order traversal.
I then use the print method of my hash table to print the intersection of the two tables.

## Solution

![](../../assets/intersection.JPG)