const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
console.time(); // 측정 시작

let input = parseInt(fs.readFileSync(filePath));
let stick = 64;
let count = 0;

for (i = 1; input > 0; i++) {
  if (input < stick) {
    stick = stick / 2;
  }
  if (input > stick) {
    input = input - stick;
    count++;
  }
  if (input === stick) {
    input = input - stick;
    count++;
  }
  console.log(`현재 stick은 ${stick}`);
  console.log(`현재 input은 ${input}`);
  console.log("-------");
}

console.log(`현재 count은 ${count}`);
console.timeEnd();
