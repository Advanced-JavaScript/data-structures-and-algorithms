function heapSort(arr){
    let length = arr.length;
    let mid = Math.floor(length / 2);
    
    for(let i = mid; i >= 0; i--){
        heapify(arr, i, length);
    }
    
    for(let i = arr.length - 1; i > 0; i--){
        swap(arr, 0, i);
        heapify(arr, 0, --length);
    }
    return arr;
}

function heapify(arr, i, len){
    let left = i * 2 + 1;
    let right = i * 2 + 2;
    let max = i;
    
    if(left < len && arr[left] > arr[max]){
        max = left;
    }
    
    if(right < len && arr[right] > arr[max]){
        max = right;
    }
    
    if(max != i){
        swap(arr, i, max);
        heapify(arr, max, len);
    }
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
