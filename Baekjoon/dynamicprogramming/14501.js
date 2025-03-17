//14501, 퇴사
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(n); // 가능한 상담 일수
const counsel = arr.map((tp) => tp.split(" ").map(Number)); //[상담일수, 수익] 으로 구성된 배열

function solution(n, counsel) {
  const DP = new Array(N).fill(0);

  //   7
  // 3 10
  // 5 20
  // 1 10
  // 1 20
  // 2 15
  // 4 40
  // 2 200

  for (let i = 0; i < n; i++) {
    const [period, profit] = counsel[i];
    if (i + period > N) continue; //상담일이 근무일보다 많으면 패스, 예시에서는 6일, 7일이 이경우에 해당한다.
    DP[i] = DP[i] + profit; //최대 이익을 구한다, 이미 진행한 상담으로 생긴 수익 + 해당일에 있는 상담수익
    console.log("======case" + (i + 1) + "일차");
    console.log("dp[i]  " + DP[i]);
    console.log(DP);
    console.log("======");
    for (let j = i + period; j < N; j++) {
      //예시에서 1~3일을 일하면 4일부터 일할 수 있으므로 i+period부터 j가 시작됨
      DP[j] = Math.max(DP[j], DP[i]); //기존 j와 비교해 더 큰 값을 넣어준다.
      console.log("dp[" + j + "]  :" + DP[j]);
    }
  }
  return Math.max(...DP);
}

console.log(solution(N, counsel));

