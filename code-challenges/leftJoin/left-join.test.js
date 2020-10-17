'use strict';

const leftJoin = require ('./left-join');

// Sample Data

let object1 = {
  'fond': 'enamored',
  'wrath': 'anger',
  'diligent': 'employed',
  'outfit': 'garb',
  'guide': 'usher',
};

let object2 = {
  'fond': 'averse',
  'wrath': 'delight',
  'diligent': 'idle',
  'guide': 'follow',
  'flow': 'jam',
};

let object3 = {
  'fond': 'averse',
  'wrath': 'delight',
  'diligent': 'idle',
  'guide': 'follow',
  'flow': 'jam',
  'stuff': 'empty',
  'soft': 'hard',
};

it('should perform a left join when two objects are provided', () => {
  expect(leftJoin(object1,object2)).toStrictEqual(
  [
    [ 'fond', 'enamored', 'averse' ],
    [ 'wrath', 'anger', 'delight' ],
    [ 'diligent', 'employed', 'idle' ],
    [ 'outfit', 'garb', null ],
    [ 'guide', 'usher', 'follow' ] 
  ])
})

it('should perform a left join when the first object contains more key value pairs than the second object provided', () => {
  expect(leftJoin(object3, object1)).toStrictEqual(
    [ 
      [ 'fond', 'averse', 'enamored' ],
      [ 'wrath', 'delight', 'anger' ],
      [ 'diligent', 'idle', 'employed' ],
      [ 'guide', 'follow', 'usher' ],
      [ 'flow', 'jam', null ],
      [ 'stuff', 'empty', null ],
      [ 'soft', 'hard', null ] 
  ])
})

it('should perform a left join when the second object contains more key value pairs than the first object provided', () => {
  expect(leftJoin(object1, object3)).toStrictEqual(
    [ 
      [ 'fond', 'enamored', 'averse' ],
      [ 'wrath', 'anger', 'delight' ],
      [ 'diligent', 'employed', 'idle' ],
      [ 'outfit', 'garb', null ],
      [ 'guide', 'usher', 'follow' ] 
  ])
})