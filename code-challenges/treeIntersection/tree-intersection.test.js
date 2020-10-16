'use strict';

const {Node, BinaryTree} = require('../../data-structures/tree/tree.js');

const treeIntersection = require('./tree-intersection.js');

// ==================================================================
// Sample Tree SetUp


// Tree A
const iNode = new Node (175);
const hNode = new Node (125);
const kNode = new Node (500);
const jNode = new Node (300);
const dNode = new Node (75);
const fNode = new Node (200);
const gNode = new Node (350, jNode, kNode);
const eNode = new Node (160, hNode, iNode);
const cNode = new Node (250, fNode, gNode);
const bNode = new Node (100, dNode, eNode);
const aNode = new Node (150, bNode, cNode);

const treeA = new BinaryTree(aNode);

// Tree B

const _kNode = new Node (500);
const _jNode = new Node (4);
const _iNode = new Node (175);
const _hNode = new Node (125);
const _fNode = new Node (200);
const _dNode = new Node (15);
const _gNode = new Node (350, _jNode, _kNode);
const _eNode = new Node (160, _hNode, _iNode);
const _cNode = new Node (600, _fNode, _gNode);
const _bNode = new Node (100, _dNode, _eNode);
const _aNode = new Node (42, _bNode, _cNode);

const treeB = new BinaryTree(_aNode);

// ==================================================================


it('should not return values that are found in only one of the provided trees', () => {
  expect(treeIntersection(treeA, treeB)).toEqual(expect.not.arrayContaining([42]));
  expect(treeIntersection(treeA, treeB)).toEqual(expect.not.arrayContaining([600]));
  expect(treeIntersection(treeA, treeB)).toEqual(expect.not.arrayContaining([15]));
  expect(treeIntersection(treeA, treeB)).toEqual(expect.not.arrayContaining([4]));
  expect(treeIntersection(treeA, treeB)).toEqual(expect.not.arrayContaining([150]));
  expect(treeIntersection(treeA, treeB)).toEqual(expect.not.arrayContaining([250]));
  expect(treeIntersection(treeA, treeB)).toEqual(expect.not.arrayContaining([75]));
  expect(treeIntersection(treeA, treeB)).toEqual(expect.not.arrayContaining([300]));
});
