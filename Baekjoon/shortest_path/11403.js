const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = +input.shift(); //정점
let arr = [];

for (const row of input) {
  arr.push(row.split(" ").map(Number));
}

for (let k = 0; k < N; k++) {
  // 3개 정점을 순환
  for (let i = 0; i < N; i++) {
    // i번째 간선에서
    for (let j = 0; j < N; j++) {
      // j번째까지 가는 간선이 있는지 검사
      if (arr[i][k] && arr[k][j]) {
        arr[i][j] = 1;
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  console.log(arr[i].join(" "));
}
