// Write a function that converts a flat object to a nested one based on its keys. For example,

// { 'a.b.c': 1, 'a.b.d': 2, 'e': 3 }
// should be converted to:

// { a: { b: { c: 1, d: 2 } }, e: 3 }

function convert_flat_obj(obj, out = {}){
    Object.keys(obj).forEach(key => {
        
        let temp_split = key.split('.')
        // console.log(temp_split)
        if(temp_split.length == 1) out[key] = obj[key]; 
        else {
            let temp = key.split(/.(.*)/s); 
            temp = temp[1].slice(1)
            if(!out[temp_split[0]]) out[temp_split[0]] = convert_flat_obj({[temp]: obj[key]});
            else {
                out[temp_split[0]] = {...out[temp_split[0]] , ...convert_flat_obj({[temp]: obj[key]})}
            };
        }
    })
    return out;
}
let obj1 = { 'a.b.c': 1, 'a.b.d': 2, 'e': 3 }
console.log(convert_flat_obj(obj1));