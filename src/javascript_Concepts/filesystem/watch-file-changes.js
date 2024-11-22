// Implement a function to monitor changes in a file and log any modifications to the console in real time.
import fs from 'fs';
let filename = "watching.txt"
fs.watch(filename, (eventType, filename) => {
    let content = fs.readFileSync(filename)
    console.log(content.toString());
});

// need to relocate to this dir