//1010. 다리 놓기
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let inputArr = [];
for (let i = 1; i < input.length; i++) {
  inputArr.push(input[i].split(" "));
}

soultion(inputArr);
// dp[N][M] = dp[N-1][M-1] + dp[N-1][M-2] ... + dp[N-1][1]

function soultion(inputArr) {
  let answer = [];
  inputArr.map((el) => {
    const n = +el[0];
    const m = +el[1];
    const memo = Array.from(Array(30), () => Array(30).fill(0));

    for (let i = 1; i <= n; i++) {
      for (let j = i; j <= m; j++) {
        if (j === i) { //두 강변의 사이트 수가 같을 때
          memo[i][j] = 1;
        } else if (i === 1) { // 한쪽 강변에 하나의 사이트만 있는 경우
          memo[i][j] = j;
        } else {
          let temp = 0;
          for (let k = 1; k < j; k++) {
            temp += memo[i - 1][k];
          }
          memo[i][j] = temp;
        }
      }
    }
    answer.push(memo[n][m]);
  });
  console.log(answer.join("\n"));
}