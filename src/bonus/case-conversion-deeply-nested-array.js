
// Data Transformation:
// Create a function that transforms a nested object with mixed keys (camelCase, snake_case, and kebab-case)
// into one with all camelCase keys. Ensure the transformation is recursive.

function convert(str) {
    str = str.toLowerCase().replace(/([-_][a-z])/g, group =>
        group
          .toUpperCase()
          .replace('-', '')
          .replace('_', '') 
        );
    return str;
}
function case_conversion(obj){

    Object.keys(obj).forEach(key => {
        let temp = convert(key); 
        obj[temp] = obj[key]; 
        delete(obj[key]); 
        if(obj[temp] instanceof Object) case_conversion(obj[temp]); // recursion
    });
    return obj; 
}

let obj = {
    "camelCase": {
        "kebab-case": {
            "snake_case" : "Hello"
        }
    }
}
console.log(case_conversion(obj))