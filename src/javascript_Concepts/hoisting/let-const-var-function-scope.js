// What is the scope of variables declared with var, let, and const when used inside loops? 
// Provide an example that uses hoisting to illustrate your explanation.

function hoist() {
    while(true){
        var i = 0;
        let j = 0
        const k = 0
        break
    }
    console.log(i); 
    console.log(j); 
    console.log(k); 
}
hoist();

// behaviour var is accesable out of bock scope it's function scope
// let and const are not accesable only block scope