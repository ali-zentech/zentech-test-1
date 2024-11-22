// Implement a function that splits an array into chunks of a given size. For example, 
// given [1, 2, 3, 4, 5] and a size of 2, return [[1, 2], [3, 4], [5]]. 
// Ensure the function handles edge cases like empty arrays or chunk sizes larger than the array length.


function split_chunks(arr , n){
    if(arr.length == 0 || n > arr.length || n==0) return arr;
    let split_arr = [];
    for (let i = 0; i < arr.length; i += n) {
        const chunk = arr.slice(i, i + n);
        split_arr.push(chunk)
    }
    return split_arr;
}

console.log(split_chunks([1, 2, 3, 4, 5] , 2));