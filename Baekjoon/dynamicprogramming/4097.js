const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const solve = (n, arr) => {
  let dp = Array(n).map((v) => 0);
  dp[0] = arr[0];

  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i - 1] + arr[i], arr[i]);
  }

  return Math.max(...dp);
};

while (input.length > 1) {
  let n = input.shift();
  let arr = input.slice(0, n);
  input.splice(0, n);
  console.log(solve(n, arr));
}
