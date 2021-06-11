function findIntersection(arr1, arr2) {
    arr1 = mergeSort(arr1);
    arr2 = mergeSort(arr2);

    let firstPointer = 0;
    let secondPointer = 0;
    let intersection = new Set();
    
    while(firstPointer < arr1.length && secondPointer < arr2.length){
        if(arr1[firstPointer] < arr2[secondPointer])
            firstPointer++;
        else if(arr1[firstPointer] > arr2[secondPointer])
            secondPointer++;
        else {
            intersection.add(arr1[firstPointer])
            firstPointer++;
            secondPointer++;
        }
    }
    return Array.from(intersection);
}

function mergeSort(arr) {
    if(arr.length < 2) return arr;
    let mid = Math.floor(arr.length / 2);
    
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid, arr.length);
    
    let sortedLeft = mergeSort(leftArr);
    let sortedRight = mergeSort(rightArr);
    
    return mergeArrays(sortedLeft, sortedRight);
}

function mergeArrays(arr1, arr2) {
    let mergedArr = [];
    
    while(arr1.length && arr2.length) {
        let sortedElement = arr1[0] > arr2[0] ? arr2.shift() : arr1.shift();
        mergedArr.push(sortedElement);
    }
    
    while(arr1.length) mergedArr.push(arr1.shift());
    while(arr2.length) mergedArr.push(arr2.shift());
    
    return mergedArr;
}
