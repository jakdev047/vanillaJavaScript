console.log("File System...");

// load fs
const fs = require("fs");

// file read
const text =  fs.readFileSync('./input.txt','utf-8');

console.log(text);
