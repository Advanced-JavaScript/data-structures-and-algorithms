'use strict';

class Node {
  constructor(value = null) {
    this.value = value;
  }
}
  
class Edge {
  constructor(node = null, weight = null) {
    this.node = node;
    this.weight = weight;
  }
}
  
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }
  
  addNode(vertix) {
    const node = new Node(vertix);
    this.adjacencyList.set(node, []);
    return node;
  }
  
  addDirectedEdge(start, end, weight) {
    const edges = this.adjacencyList.get(start);
    if (edges) {
      const edge = new Edge(end, weight);
      edges.push(edge);
      return edge;
    } else {
      return null;
    }
  }
  
  addUndirectedEdge(a, b, weight) {
    const first = this.addDirectedEdge(a, b, weight);
    const second = this.addDirectedEdge(b, a, weight);
    return [first, second];
  }
  
  getNodes() {
    const keys = this.adjacencyList.keys();
    let node = keys.next();
    const result = [];
    while (!node.done) {
      const { value } = node;
      result.push(value);
      node = keys.next();
    }
    return result;
  }
  
  getNeighbors(node) {
    return this.adjacencyList.get(node);
  }
  
  size() {
    return this.adjacencyList.size;
  }
  
}
  
module.exports = { Edge, Graph, Node };