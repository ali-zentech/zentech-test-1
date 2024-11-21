// Write a function to merge two deeply nested objects, 
// where properties from the second object overwrite those in the first if there are conflicts. 
// Ensure arrays are concatenated and not overwritten.

// Example Deeply nested objects


function merge_deeply_nested_obj(obj1, obj2){
    Object.keys(obj2).forEach( key => {
        if(!obj1[key]) {
            obj1[key] = obj2[key]
        } else if(Array.isArray(obj1[key]) && Array.isArray(obj2[key])){
            obj1[key] = [...obj1[key] , ...obj2[key]]
            console.log("Showing array concat due to console limit in final output ", obj1[key]);
        } else if(obj1[key] instanceof Object && obj2[key] instanceof Object){
            merge_deeply_nested_obj(obj1[key], obj2[key])
        } else{
            obj1[key] = obj2[key];
        }
    })
    return obj1;
};

let obj1 = { a: { b: { c: 1, d: [1,2,3] } }, e: 3 }; 
let obj2 = { a: { b: { c: 1, d: [4,5,6] } }, e: 6 }; 
console.log(merge_deeply_nested_obj(obj1, obj2));