'use strict';

const { getEdges } = require('./get-edge');
const { Graph } = require('../../Data-Structures/graph/graph');

describe('`getEdges` function', () => {
  it('should give a false response to a one-node graph argument', () => {
    const graph = new Graph();

    const a = graph.addNode(1);
    const b = graph.addNode(2);
    const c = graph.addNode(3);

    const result = getEdges(graph, [a, b, c]);

    const expected = [false, 0];
    expect(result).toEqual(expected);
  });
  it('should give a false response to a non-graph argument', () => {
    const graph = new Graph();

    const a = graph.addNode(1);
    const b = graph.addNode(2);
    const c = graph.addNode(3);

    const result = getEdges(a, [b, c]);

    const expected = [false, 0];
    expect(result).toEqual(expected);
  });

  it('should give a false response to an empty array argument', () => {
    const graph = new Graph();
    const result = getEdges(graph, []);
    const expected = [false, 0];
    expect(result).toEqual(expected);
  });

  it('should traverse the array of neighbors and return the sum of weights', () => {
    const graph = new Graph();

    const a = graph.addNode(1);
    const b = graph.addNode(2);
    const c = graph.addNode(3);
    const d = graph.addNode(4);

    graph.addUndirectedEdge(a, b, 1);
    graph.addUndirectedEdge(b, c, 2);
    graph.addUndirectedEdge(c, d, 3);

    getEdges(graph, [a, b, c]);

    expect(graph).toBeDefined();
  });
});