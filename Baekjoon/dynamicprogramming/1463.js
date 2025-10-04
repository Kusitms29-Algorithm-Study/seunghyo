const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = Number(fs.readFileSync(filePath).toString().trim());
let count = 0;

while (input !== 1) {
  if (input % 3 === 0) {
    input = input / 3;
    count++;
  } else {
    if (input % 3 === 1) {
      input = (input - 1) / 3;
      count += 2;
    } else if (input % 2 === 0) {
      input = input / 2;
      count++;
    } else if (input === 2) {
      input = 1;
      count++;
    }
  }
  if (input === 1) break;
}

console.log(count);
