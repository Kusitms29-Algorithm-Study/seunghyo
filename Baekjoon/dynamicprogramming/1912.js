//1912 연속합
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
var inputs = fs.readFileSync(filePath).toString().trim().split("\n");

var cases = Number(inputs[0]);
inputs = inputs[1].split(" ").map((v) => Number(v));
var dp = [inputs[0]];

for (var i = 1; i < cases; i++) {
  dp[i] = inputs[i] > inputs[i] + dp[i - 1] ? inputs[i] : inputs[i] + dp[i - 1];
  //자기 자신을 선택하거나 앞의 값을 더한 값을 dp[i]에 배치
  console.log("dp[i]  " + dp[i]);
  console.log("input[i]  " + inputs[i]);
}
console.log(Math.max(...dp));

//10 -4 3 1 5 6 -35 12 21 -1
