// Create a function that calculates the deep difference between two objects. For example, given:

// obj1 = { a: 1, b: { c: 2, d: 3 } };
// obj2 = { a: 1, b: { c: 2, d: 4, e: 5 } };
// The result should be { b: { d: [3, 4], e: [undefined, 5] } }.

function deep_compare(obj1, obj2, out={}){
    Object.keys(obj1).forEach(key => {
        if(!out[key]){
            if(!obj2[key]) out[key] = [obj1[key], undefined];

            else if(obj1[key] instanceof Object && obj2[key] instanceof Object) {
                out[key] = deep_compare(obj1[key], obj2[key]);
            
            } else {
                if(obj1[key] != obj2[key]){
                     out[key] = [obj1[key], obj2[key]]; 
                }
            }
        }
        
    });
    Object.keys(obj2).forEach(key => {
        if(!out[key]){
            if(!obj1[key]) out[key] = [undefined, obj2[key]];

            else if(obj1[key] instanceof Object && obj2[key] instanceof Object) {
                out[key] = deep_compare(obj1[key], obj2[key]);
            
            } else {
                if(obj1[key] != obj2[key]){
                     out[key] = [obj1[key], obj2[key]]; 
                }
            }
        }
    })
    return out;
};

let obj1 = { a: 1, b: { c: 2, d: 3 } };
let obj2 = { a: 1, b: { c: 2, d: 4, e: 5 } };
console.log(deep_compare(obj1, obj2))