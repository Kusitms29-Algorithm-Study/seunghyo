const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const count = Number(input[0]);
const numbers = input[1].split(" ").map((i) => BigInt(i));
numbers.sort((a, b) => (a < b ? -1 : 1));

if (count < 2) {
  console.log(String(numbers[0]));
} else {
  if (count % 2 === 0) {
    let answer = numbers[0] + numbers[numbers.length - 1];
    for (let i = 1; i < count; i++) {
      let M = numbers[i] + numbers[numbers.length - 1 - i];
      if (answer < M) {
        answer = M;
      }
    }
    console.log(String(answer));
  } else {
    let answer = numbers[0] + numbers[numbers.length - 2];
    for (let i = 1; i < count - 1; i++) {
      let M = numbers[i] + numbers[numbers.length - 2 - i];
      if (answer < M) {
        answer = M;
      }
    }
    if (numbers[numbers.length - 1] > answer) {
      answer = numbers[numbers.length - 1];
    }
    console.log(String(answer));
  }
}
