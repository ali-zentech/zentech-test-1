// async function block() {
//     while(true){
//         console.log("blocked")
//     }; 
//     console.log("Me when. ")
// }
// console.log("I am execting blocking function")
// block(); 


async function nonblocking() {
    setTimeout(()=> {
        while(true){
            console.log("blocked");
        }}, 0);
     
    console.log("I am executing first ")
}
console.log("I am execting blocking function")
nonblocking(); 