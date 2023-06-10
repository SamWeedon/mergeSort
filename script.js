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
    let secondHalf = arr.slice(arr.length / 2);

    if (arr.length < 2) {
        return arr;
    }
    else {
        return merge(mergeSort(firstHalf), mergeSort(secondHalf));
    }
}

function merge(left, right) {
    let mergedArr = [];
    while (left.length && right.length) {
        if (left[0] > right[0]) {
            mergedArr.push(right.shift());
        }
        else if (right[0] > left[0]) {
            mergedArr.push(left.shift());
        }
    }
    return [...mergedArr, ...left, ...right];
}
//console.log(mergeSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
//console.log(mergeSort([2,1]));
//console.log(mergeSort([3,2,1]));
//console.log(mergeSort([5, 8, 2, 9, 6, 3, 7, 1, 10, 4]));
//console.log(mergeSort([4,3,1,2]));
//console.log(mergeSort([3,1,2,4]));