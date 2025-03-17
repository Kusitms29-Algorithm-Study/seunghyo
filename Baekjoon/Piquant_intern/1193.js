const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

let input = parseInt(fs.readFileSync(filePath));
let sum = 0;
let standardNum = 0;
let answer = "";

if (input === 1) {
  console.log("1/1");
  return;
}

for (i = 1; ; i++) {
  sum += i;
  if (input <= sum) {
    standardNum = i;
    input = input - sum + i - 1;
    if (standardNum % 2 === 0) {
      answer = `${1 + input}/${standardNum - input}`;
    } else {
      answer = `${standardNum - input}/${1 + input}`;
    }
    break;
  }
}

console.log(answer);
