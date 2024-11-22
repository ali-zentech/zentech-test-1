// Write a function that uses closures to create a private counter.
// The counter should have methods to increment, decrement, and retrieve the current value, 
// but the value itself should not be directly accessible.
function Counter(){
    let count = 0; 
    function increment(){
        count++;
    }
    function decrement(){
        count--;
    }
    function retrieve(){
        return count; 
    }
    return {increment, decrement, retrieve}
}

const counter = Counter();

counter.increment()
counter.increment()
console.log(counter.retrieve())
counter.decrement()
console.log(counter.retrieve())