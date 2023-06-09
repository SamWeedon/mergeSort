function mergeSort(arr) {
    /*
    on input of n elements
      if n < 2
        return
      else
        sort left half of elements
        sort right half of elements
        merge sorted halves
    */
    let firstHalf = arr.slice(0, arr.length / 2);
    let secondHalf = arr.slice(arr.length / 2, arr.length + 1);

    if (arr.length < 2) {
        return
    }
    else if (arr.length === 2) {
        if (arr[0] > arr[1]) {
            arr[1] = arr[0];
            arr[0] = arr[1];
        }
        mergeSort(firstHalf);
        mergeSort(secondHalf);
        return arr;
    }
    else {
        mergeSort(firstHalf);
        mergeSort(secondHalf);
        return;
    }
}

console.log(mergeSort([11,10,9,8,5,4,3,7,1,2,6]));