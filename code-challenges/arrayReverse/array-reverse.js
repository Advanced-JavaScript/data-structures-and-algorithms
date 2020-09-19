let reverseArray = (arr) => {
    var reversedArr = []
    for (let i = arr.length-1 || 0; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}
//Another solution

let reverseArrayInPlace = (arr) => {
  for (var i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
      let el = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = el;
  }
  return arr;
}
