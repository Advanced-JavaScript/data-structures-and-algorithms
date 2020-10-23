const { Graph } = require('../../Data-Structures/graph/graph');

const getEdges = (graph, arr) => {
  if (arr.length < 2 || !(graph instanceof Graph)) {
    return [false, 0];
  }

  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    const current = arr[i];

    const n = graph.getNeighbors(current);
    const index = n.findIndex(neighbor => neighbor.node === arr[i + 1]);
    if (index >= 0) {
      sum += n[index].weight;
    } else {
      return [false, 0];
    }
  }
  return [true, sum];
};

module.exports = { getEdges };
