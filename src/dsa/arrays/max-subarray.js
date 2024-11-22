// Given an array of integers, write a function that finds the subarray with the maximum sum.
// (Hint: Use Kadane's Algorithm.)

function sub_array_using_kadane_algo(arr){
    let out = 0 ;
    let max = 0;
    let sub_arr = [];

    for(let  i = 0; i<arr.length; i++){
        max = max + arr[i];
        if(out<max) {
            out = max; 
        }
        sub_arr.push(arr[i])

        if(max < 0) {
            max = 0; 
            sub_arr = [];
        }
    }
    console.log("Max sum", out)
    return sub_arr;
}

console.log(sub_array_using_kadane_algo([1,2,3,4,5,-5,-6,12,13]))