'use strict';

const {Node} = require('../../Data-Structures/stacksAndQueues/stacks-and-queues');
const dfGraph = require('./depth-first');

const log = jest.spyOn(global.console, 'log').mockImplementation(() => {});

let aNode = new Node('A');
let bNode = new Node('B');
let cNode = new Node('C');
let dNode = new Node('D');
let eNode = new Node('E');
let fNode = new Node('F');

it('returns `null` if the graph is empty', () => {
  const graph = new dfGraph();
  const result = graph.depthFirst();
  expect(result).toBeNull();
});
it ('Should return the value of all nodes in the graph in the depth first order ', () => {
  const graph = new dfGraph();
  const a = graph.addNode(aNode);
  const b = graph.addNode(bNode);
  const c = graph.addNode(cNode);
  const d = graph.addNode(dNode);
  const e = graph.addNode(eNode);
  const f = graph.addNode(fNode);

  graph.addUndirectedEdge(a, b, 1);
  graph.addUndirectedEdge(b, c, 1);
  graph.addUndirectedEdge(b, d, 1);
  graph.addUndirectedEdge(c, d, 1);
  graph.addUndirectedEdge(c, e, 1);
  graph.addUndirectedEdge(c, f, 1);
  graph.addUndirectedEdge(d, f, 1);
  graph.addUndirectedEdge(e, f, 1);
  
  expect(graph.size()).toBe(6);
  
  let result = graph.depthFirst(a);
  expect(log).toHaveBeenCalledWith(result);

  log.mockClear();
});
