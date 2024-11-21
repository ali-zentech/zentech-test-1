// Write a function that removes all properties from an object whose values are falsy 
// (null, undefined, false, 0, NaN, or an empty string)

function remove_falsly(obj) {
    Object.keys(obj).forEach(key => {
        if(!obj[key]){
            delete(obj[key])
        } 
    })
    return obj; 
}
let obj = {a:1, b: null, c: NaN, d: "", e: 0}
console.log(remove_falsly(obj))