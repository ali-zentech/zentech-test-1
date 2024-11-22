// each of var, let and const are hoisted // explained below their hoisting example
// var is usually hoisted at function scope namly lexical or parent scope, 
// where as let and const are hoisted in block scope accesble after decliration and initalization. 

// Answer
// hoisting var a = undifined;
// let is also hoisted as let b; only declaration and initialization thus result in refrensce error is called before initalization; 
// declaration is cumpolsory for let and const to be initialized outside of compiler, is exist as concept but function mostly as non existent 
console.log(a); // undifined; 
var a = 10;
let b = 20; // let b =20
console.log(b); // 20

// Modify such that is doest throw error

var c = 10;
console.log(c); // undifined; 
let d = 20; // let b =20
console.log(d); // 20