//11053. 가장 긴 증가하는 부분 수열
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const inputs = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));
const [N, arr] = inputs;

const dp = Array(...N).fill(1);

for (let i = 0; i < N - 1; i++) {
  const start = arr[i];
  for (let j = i + 1; j < N; j++) {
    if (start < arr[j]) {
      dp[j] = Math.max(dp[j], dp[i] + 1);
    }
    console.log(j);
    console.log(dp);
    console.log("===");
  }
  console.log("======end");
}

//6
// 10 20 10 30 20 50

console.log(Math.max(...dp));
