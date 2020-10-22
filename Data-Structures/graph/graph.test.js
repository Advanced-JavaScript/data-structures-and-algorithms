const { Edge, Graph, Node } = require('./graph');

describe('`Graph` class', () => {
  it('instantiates a graph', () => {
    const graph = new Graph();
    expect(graph).toBeDefined();
  });

  describe('`addNode` method', () => {
    it('adds a new node to the graph', () => {
      const graph = new Graph();
      expect(() => graph.addNode(1)).not.toThrow();
    });
    it('takes in the value of that node', () => {
      const graph = new Graph();
      graph.addNode(1);
      graph.addNode(2);

      expect(graph.adjacencyList.has(1));
      expect(graph.adjacencyList.has(2));
    });
    it('returns the added node', () => {
      const graph = new Graph();
      const result = graph.addNode(1);
      expect(result.value).toBe(1);
    });
  });

  describe('`addDirectedEdge` method', () => {
    it('takes in the two nodes to be connected by the edge', () => {
      const graph = new Graph();
      const a = graph.addNode(1);
      const b = graph.addNode(2);

      expect(() => graph.addDirectedEdge(a, b, 10)).not.toThrow();
      const result = graph.addDirectedEdge(a, b, 10);
      expect(result).toBeInstanceOf(Edge);
      expect(result).toHaveProperty('node');
      expect(result).toHaveProperty('weight');
      const endVal = graph.adjacencyList.get(b);
      const empty = [];
      expect(endVal).toEqual(empty);
    });
    it('requires both nodes to already be in the graph', () => {
      const graph = new Graph();
      const a = new Node(1);
      const b = new Node(2);

      const result = graph.addDirectedEdge(a, b, 10);
      expect(result).toBeNull();
    });

  });

  describe('`getNodes` method', () => {
    it('returns all of the nodes in the graph as a collection', () => {
      const graph = new Graph();
      const a = graph.addNode(1);
      const b = graph.addNode(2);
      const result = graph.getNodes();
      const expected = [a, b];
      expect(result).toEqual(expected);
    });
  });

  describe('`getNeighbors` method', () => {
    it('takes in a given node', () => {
      const graph = new Graph();
      const a = graph.addNode(1);
      const b = graph.addNode(2);
      const c = graph.addNode(3);

      graph.addUndirectedEdge(a, b, 1);
      graph.addUndirectedEdge(a, c, 2);
      const result = graph.getNeighbors(a);
      expect(result).toBeDefined();
      expect(result[0].node).toBe(b);
      expect(result[1].node).toBe(c);
      expect(result[0].weight).toBe(1);
      expect(result[1].weight).toBe(2);
    });
  });

  describe('`size` method', () => {
    it('returns the total number of nodes in the graph', () => {
      const graph = new Graph();
      graph.addNode(1);
      graph.addNode(2);
      const result = graph.size();
      const expected = 2;
      expect(result).toEqual(expected);
    });
  });

});