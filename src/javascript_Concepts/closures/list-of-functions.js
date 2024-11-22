// Create a function that generates a list of functions, where each function returns its index in the list.
// (For example, if the list has three functions, calling the first function should return 0, the second 1, and so on.)

function generateFunction(n){
    let funcs = [];

    for(let i = 0; i < n; i++){
        funcs.push( () => {
            return i
        })
    }

    return funcs;
}
const funcs = generateFunction(5); 
console.log("1st: ",funcs[0]())
console.log("2nd: ",funcs[1]())
console.log("1st: ",funcs[0]())
console.log("5th: ",funcs[4]())