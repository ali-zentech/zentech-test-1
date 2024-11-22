// Implement a function that partially applies arguments to another function using closures.
// (For example, const add5 = partial(add, 5); add5(3) should return 8.)

function add(a, b) {
    return a + b; 
}
function mod(a, b) {
    return a%b == 0; 
}

function partial( func, a) {
    return (n) => {
        return func(n , a);
    }
}

const add5 = partial(add, 3);
console.log(add5(5)); 

const isEven = partial(mod, 3);
console.log(isEven(4));