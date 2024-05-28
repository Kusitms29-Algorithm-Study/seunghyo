const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const inf = Number.MAX_SAFE_INTEGER;

function printWorld(n, f) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (f[i][j] > 6) {
        return "Big World!";
      }
    }
  }
  return "Small World!";
}

function floyd(n, f) {
  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (f[i][j] > f[i][k] + f[k][j]) {
          // 노드를 거쳐가는 경로가 직접 경로보다 짧은지 확인하고, 짧다면 해당 거리로 업데이트
          f[i][j] = f[i][k] + f[k][j];
        }
      }
    }
  }
  return printWorld(n, f);
}

function getF(n, edges) {
  let f = Array.from({ length: n + 1 }, () => Array(n + 1).fill(inf));
  for (let i = 1; i <= n; i++) {
    f[i][i] = 0;
  }

  edges.forEach(([u, v]) => {
    f[u][v] = 1;
    f[v][u] = 1;
  });

  return f;
}

function solve() {
  const [n, k] = input[0].split(" ").map(Number);
  const edges = input
    .slice(1, k + 1)
    .map((line) => line.split(" ").map(Number));
  console.log(floyd(n, getF(n, edges)));
}

solve();
