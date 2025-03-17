const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

let n = Number(input[0]);
let steps = input[1].split(" ").map(Number);
let dp = new Array(n).fill(Infinity); // dp 배열 초기화
dp[0] = 0; // 시작 위치에서 점프 횟수는 0

for (let i = 0; i < n; i++) {
  if (dp[i] === Infinity) continue; // 현재 위치에 도달할 수 없다면 건너뛰기

  for (let j = 1; j <= steps[i]; j++) {
    if (i + j < n) {
      dp[i + j] = Math.min(dp[i + j], dp[i] + 1); // 최소 점프 횟수 갱신
    }
  }
}

// 결과 출력
console.log(dp[n - 1] === Infinity ? -1 : dp[n - 1]);
