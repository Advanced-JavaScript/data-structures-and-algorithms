let binarySearch = (arr, key) => {
  let start = 0;
  let end = arr.length - 1;

  while (end > start) {

    let mid = Math.floor((end + start) / 2);

    if (arr[mid] === key) {
      return mid;
    } else if (arr[end] === key) {
      return end;
    } else if (arr[mid] > key) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
};

module.exports = binarySearch;

//with recursion

// let BinarySearch = (arr, key, start, end) => {
//     start = start || 0;
//     end = end || arr.length;

//     if(start === end){ 
//         return -1;
//     }

//     var mid = Math.floor((end - start) / 2) + start;

//     if(arr[mid] === key){
//         return mid;
//     } else if (start === mid){
//         return BinarySearch(arr, key, mid + 1, end);
//     } else if (key > arr[mid]){
//         return BinarySearch(arr, key, mid, end);
//     } else {
//         return BinarySearch(arr, key, start, mid);
//     }

// }