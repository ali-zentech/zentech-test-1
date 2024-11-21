// Create a function that takes an array of integers and returns a new array containing only those elements that have a frequency greater than a given threshold.
// (For example, given [1, 2, 2, 3, 3, 3] and threshold 1, the output should be [2, 3].)

function frequency_threshold(arr, n){
    const count = {}; 
    arr.forEach( ele => {
        count[ele] ? ++count[ele] : count[ele] = 1;
    })
    return Object.keys(count).filter(ele => count[ele] > n);
}

console.log(frequency_threshold([1, 2, 2, 3, 3, 3], 1));