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
        return arr;
    }
    else if (arr.length === 2) {
        if (firstHalf[0] > secondHalf[0]){
            return mergeSort([...secondHalf, ...firstHalf]);
        }
        else if (firstHalf[0] < secondHalf[0]){
            return [...firstHalf, ...secondHalf];
        }
    }
    else if (arr.length > 2) {
        //console.log(firstHalf);
        //console.log(secondHalf);
        return [...mergeSort(secondHalf), ...mergeSort(firstHalf)];
    }

}

console.log(mergeSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(mergeSort([1,2]));
console.log(mergeSort([2,1]));
console.log(mergeSort([5, 8, 2, 9, 6, 3, 7, 1, 10, 4]));