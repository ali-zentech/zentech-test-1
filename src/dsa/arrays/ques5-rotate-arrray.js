// Write a function that rotates an array to the right by k positions.
// For example, rotating [1, 2, 3, 4, 5] by 2 positions results in [4, 5, 1, 2, 3].

function rotate_array(k, array) {
    for(let i=0; i<k; i++){
        array.unshift(array.pop()); 
    }
    return array; 
}

console.log(rotate_array(2, [1, 2, 3, 4, 5])); 