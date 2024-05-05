//2839 설탕배달
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let N = Number(fs.readFileSync(filePath).toString());

let answer = -1;

let five = Math.floor(N / 5);

while (five >= 0) { //3으로 나누어 떨어지지 않으면 5를 더해서 3으로 나누어 떨어질때까지 반복
  let remaining = N - five * 5; 

  if (remaining % 3 === 0) {
    answer = remaining / 3 + five;
    break;
  } else {
    five -= 1;
  }
}

console.log(answer);