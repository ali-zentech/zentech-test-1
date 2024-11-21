// Implement a function that finds all properties in an object whose values are functions and returns their names as an array.

function value_as_func(obj) {
    return Object.keys(obj).filter(key => typeof obj[key] == 'function'); 
}

console.log(value_as_func( {a: ()=> {}, b: 3} )); 