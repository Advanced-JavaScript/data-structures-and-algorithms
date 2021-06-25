'use strict';

const {Graph} = require('../../Data-Structures/graph/graph');
const {Queue} = require('../../Data-Structures/stacksAndQueues/stacks-and-queues');

class bfGraph extends Graph {

  constructor(){
    super();
  }

  breadthFirst(node) {
    if (node === undefined || node.value === undefined) {
      return null;
    }

    const q = new Queue();
    q.enqueue(node);

    const arr = [];
    while (q.front !== null) {
      const current = q.dequeue();
      if (arr.includes(current)) {
        continue;
      }
      arr.push(current);
      const n = this.getNeighbors(current);
      for (let i = 0; i < n.length; i++) {
        if (!arr.includes(n[i].node)) {
          q.enqueue(n[i].node);
        }
      }
    }
    console.log(arr);
    return arr;
  }
  
}
  
module.exports = bfGraph;

// function traverseTree(t) { 
//     if(!t) return []; 
     
//     let output = [];
//     let queue = [t];
    
//     while(queue.length){
//         let current = queue.shift();
//         output.push(current.value);
        
//         if(current.left) queue.push(current.left);
//         if(current.right) queue.push(current.right); 
//     }
    
//     return output;
// }
  
