// Write a program that reads a large file line by line without loading the entire file into memory.
//  Explain why this approach is efficient.
import fs from 'fs';
import readline from 'readline';

const read = readline.createInterface({
  input: fs.createReadStream('watching.txt'),
  crlfDelay: Infinity, // wait for line break infinitly
});

read.on('line', (line) => {
  console.log(line);
}); 