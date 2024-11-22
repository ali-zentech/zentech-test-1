import fs from 'fs';
// Write a function to read all files in a directory recursively and return their paths as an array.
// (For example, given a directory structure, return ['dir/file1.txt', 'dir/subdir/file2.txt'].)
function findDir(str, arr = []) {
    console.log(str)
    let files = fs.readdirSync(str);
    files.forEach(file => {
        let isFile = file.split('.'); 
        if(isFile.length == 1){
            findDir(str+"\\"+isFile[0],arr)
        } else {
            arr.push(str+"\\"+isFile.join('.'))
        }
    })
    return arr;
}
let files = findDir('src\\javascript_Concepts')

console.log(files)