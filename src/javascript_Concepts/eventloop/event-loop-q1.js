console.log('Start');
setTimeout(() => console.log('Timeout'), 0);
Promise.resolve().then(() => console.log('Promise'));
console.log('End');

// output will be start >> End >> Promise >> Timeout
// reson being javascript event loop, Can be mainly break into 3 peices stack, micro queue and macro queue. 
// each line of code in javascript is executed in functional manner. in this case console.log() are added in stack and executes directly without any delay. 
// After stack is cleared the 2 components are Promises are added in micro task queue and set time out is added as callback to that macro task queue. 
// the callback have the least priority after, therefore after Promises settime out is executed.  