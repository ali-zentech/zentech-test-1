
// Write a function to flatten a deeply nested Map into an object with dot notation. For example, given:

// map = new Map([['a', new Map([['b', new Map([['c', 1]])]])]]);
// The result should be { 'a.b.c': 1 }.

function group_map_value(map, str = '', out = {}){
    
    for (const [key, val] of map) {
        let temp_key = str+"."+key
       if(val instanceof Map){
        group_map_value(val, temp_key, out)
       } else {
        out[temp_key] = val;
       }
    }
    return out; 
}
let map = new Map([['a', new Map([['b', new Map([['c', 1]])]])]]);
console.log(group_map_value(map))