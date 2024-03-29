// 1. 방문이 되었다면 그 다음 인덱스로 넘어간다.
// 2. 방문처리 및 싸이클을 하나 카운팅 한 후 while문을 통해 싸이클을 찾아내자.
// 3. 만약 현재노드가 이미 방문되었다면 싸이클이 하나 생겼다는 뜻이므로 반복문을 종료한다.

const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

function dfs(v, visited, numbers) {
  visited[v] = true;
  let next = numbers[v]; // 다음 방문 장소
  if (!visited[next]) {
    dfs(next, visited, numbers);
  }
}

function action(input) {
  let lines = input.split("\n");
  let currentLine = 0;

  let t = parseInt(lines[currentLine++], 10); // 테스트 케이스의 수
  for (let i = 0; i < t; i++) {
    let n = parseInt(lines[currentLine++], 10); // 숫자의 개수
    let numbers = [0].concat(lines[currentLine++].split(" ").map(Number));
    let visited = new Array(n + 1).fill(false);
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
