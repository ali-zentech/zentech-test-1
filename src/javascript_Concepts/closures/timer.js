// Implement a function that partially applies arguments to another function using closures.
// (For example, const add5 = partial(add, 5); add5(3) should return 8.)

// Write a function that creates a timer using closures. 
// The timer should start at 0, increment by 1 every second, and provide a method to pause and resume the timer.

function startTimer(){
    let count = 0;
    let timer = setInterval(()=> console.log(++count),1000);

    function pause() {
        clearInterval(timer); 
    }
    function resume() {
        timer = setInterval(()=> console.log(++count),1000)
    }

    return {pause, resume}

}
const start = startTimer();
start
setTimeout(start.pause,4000 ) // 1 sec delay will cause print to 3
setTimeout(start.resume,6000 )// 2 sec gap
setTimeout(start.pause,9000 )
