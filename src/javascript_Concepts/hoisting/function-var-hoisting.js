// Write a function that demonstrates hoisting by declaring both a function and a variable with the same name. 
// Explain the output when the function is called.
function hoist(){
    var name = "hi" 
    function name(){
        console.log("hello"); 

    } 
    
    return name; 
}

console.log(hoist())

// the way the function is hoisted 
// function hoisted first; // name = [function Function]
// then var is hoisted  name = undifined; 
// lastly var is addigned, so the order doest really matter, 

