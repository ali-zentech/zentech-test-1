// Given a Map, implement a function to group its values based on a callback function. For example, given:

// map = new Map([['a', 1], ['b', 2], ['c', 3]]);
// callback = (val) => val % 2 === 0;
// The result should be { true: ['b'], false: ['a', 'c'] }.

function group_map_value(map, callback){
    let out = new Map([]); 
    out.set("true",[]); 
    out.set("false",[]); 
    for (const [key, val] of map) {
        const isTrue = callback(val) ? "true" : "false"
        out.get(isTrue).push(key)
    }
    return out; 
}
let map = new Map([['a', 1], ['b', 2], ['c', 3]]);
let callback = (val) => val % 2 === 0;
console.log(group_map_value(map, callback))