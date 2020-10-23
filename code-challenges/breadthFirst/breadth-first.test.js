const {Node} = require('../../Data-Structures/stacksAndQueues/stacks-and-queues');
const bfGraph = require('./breadth-first');
const log = jest.spyOn(global.console, 'log').mockImplementation(() => {});

// Test Graph Components

let pandora = new Node('Pandora');
let arendelle = new Node('Arendelle');
let monstropolis = new Node('Monstropolis');
let metroville = new Node('Metroville');
let naboo = new Node('Naboo');
let narnia = new Node('Narnia');

describe('`breadthFirst` method', () => {
  it('returns `null` if the graph is empty', () => {
    const graph = new bfGraph();
    const result = graph.breadthFirst();
    expect(result).toBeNull();
  });
  it('logs each value', () => {
    log.mockClear();
    const graph = new bfGraph();
    const a = graph.addNode(pandora);
    const b = graph.addNode(arendelle);
    const c = graph.addNode(monstropolis);
    const d = graph.addNode(metroville);
    const e = graph.addNode(naboo);
    const f = graph.addNode(narnia);

    graph.addUndirectedEdge(a, b, 1);
    graph.addUndirectedEdge(b, c, 1);
    graph.addUndirectedEdge(b, d, 1);
    graph.addUndirectedEdge(c, d, 1);
    graph.addUndirectedEdge(c, e, 1);
    graph.addUndirectedEdge(c, f, 1);
    graph.addUndirectedEdge(d, f, 1);
    graph.addUndirectedEdge(e, f, 1);

    const result = graph.breadthFirst(a);
    expect(log).toHaveBeenCalledWith(result);

    log.mockClear();
  });
});