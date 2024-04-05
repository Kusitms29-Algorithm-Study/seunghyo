const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]); // 총 단지수
const map = input.slice(1, N + 1).map((line) => line.split("").map(Number));

function countComplexes(N, map) {
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  let complexes = 0;
  let houseCount = [];

  function dfs(x, y) {
    if (x < 0 || x >= N || y < 0 || y >= N || map[x][y] === 0) return 0;

    map[x][y] = 0; // 방문한 집은 0으로 변경하여 중복 방문을 방지
    let count = 1;

    for (let i = 0; i < 4; i++) {
      // 상하좌우를 탐색
      const nx = x + dx[i];
      const ny = y + dy[i];
      count += dfs(nx, ny);
    }
    return count;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] === 1) {
        complexes++;
        houseCount.push(dfs(i, j));
      }
    }
  }

  // 집의 수를 오름차순으로 정렬
  houseCount.sort((a, b) => a - b);

  // 총 단지수와 각 단지 내 집의 수를 출력 형식에 맞게 반환
  console.log(complexes);
  houseCount.forEach((count) => console.log(count));
}

countComplexes(N, map);
