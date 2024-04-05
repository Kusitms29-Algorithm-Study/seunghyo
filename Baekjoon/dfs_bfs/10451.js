const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

function dfs(v, visited, numbers) {
  visited[v] = true;
  let next = numbers[v]; // 다음 방문 장소
  if (!visited[next]) {
    dfs(next, visited, numbers); //사이클돌고돌아~
  }
}

function action(input) {
  let lines = input.split("\n");
  let currentLine = 0;

  let t = parseInt(lines[currentLine++], 10); // 테스트 케이스의 수
  for (let i = 0; i < t; i++) {
    let n = parseInt(lines[currentLine++], 10); // 숫자의 개수
    let numbers = [0].concat(lines[currentLine++].split(" ").map(Number));
    let visited = new Array(n + 1).fill(false); //방문여부를 저장한 배열
    visited[0] = true; // 0번 인덱스는 사용하지 않음

    let count = 0;
    for (let j = 1; j <= n; j++) {
      if (!visited[j]) {
        // 방문하지 않았다면
        dfs(j, visited, numbers); // DFS 실행
        count++;
      }
    }
    console.log(count);
  }
}

action(input);
