const quickSort = arr => {
  if (arr.length <= 1) {
    return arr;
  }
    const pivot = arr.pop();
  
  const lessEq = [];
  const greater = [];
  
  arr.forEach(n => (n <= pivot ? lessEq.push(n) : greater.push(n)));
  
  return [...quickSort(lessEq), pivot, ...quickSort(greater)];
};
  
module.exports = quickSort;