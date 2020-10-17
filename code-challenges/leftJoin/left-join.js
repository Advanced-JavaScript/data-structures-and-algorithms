'use strict';

function leftJoin(obj1, obj2){
  let returnArray = Object.entries(obj1);
  returnArray.forEach(array => {
    let key = array[0];
    if(obj2[key]){
      array.push(obj2[key]);
    } else {
      array.push(null);
    }
  })
  return returnArray;
  }
  
module.exports = leftJoin
