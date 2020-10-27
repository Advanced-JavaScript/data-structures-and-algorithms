'use strict';

const {Graph} = require('../../Data-Structures/graph/graph');
const {Stack} = require('../../Data-Structures/stacksAndQueues/stacks-and-queues');

class dfGraph extends Graph {
  constructor(){
    super();
  }

  depthFirst(node) {

    if (node === undefined || node.value === undefined) {
      return null;
    }
  
    const s = new Stack();
    s.push(node);
  
    const arr = [];
    while (s.top !== null) {
      const current = s.pop();
      if (arr.includes(current)) {
        continue;
      }
      arr.push(current);
      const n = this.getNeighbors(current);
      for (let i = 0; i < n.length; i++) {
        if (!arr.includes(n[i].node)) {
          s.push(n[i].node);
        }
      }
    }
    console.log(arr);
    return arr;
   
  }
  
}
  
module.exports = dfGraph;
  