const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const [n, ...wine] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

const solve = (n, wine) => {
  if (n === 1) return wine[0];
  else if (n === 2) return wine[0] + wine[1];
  const dp = new Array(n).fill(0);
  dp[1] = wine[0];
  dp[2] = wine[0] + wine[1];
  for (let i = 3; i <= n; i++) {
    dp[i] = Math.max(
      dp[i - 3] + wine[i - 2] + wine[i - 1],
      dp[i - 2] + wine[i - 1],
      dp[i - 1]
    );
  }
  return dp[n];
};

console.log(solve(n, wine));
