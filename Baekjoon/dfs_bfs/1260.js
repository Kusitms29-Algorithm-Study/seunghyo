// 그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오.
// 단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고, 더 이상 방문할 수 있는 점이 없는 경우 종료한다.
// 첫째 줄에 정점의 개수 N(1 ≤ N ≤ 1,000), 간선의 개수 M(1 ≤ M ≤ 10,000), 탐색을 시작할 정점의 번호 V가 주어진다.
// 다음 M개의 줄에는 간선이 연결하는 두 정점의 번호가 주어진다.
// 어떤 두 정점 사이에 여러 개의 간선이 있을 수 있다. 입력으로 주어지는 간선은 양방향이다.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function dfs(graph, v, visited, output) {
  visited[v] = true;
  output.push(v);

  if (graph[v]) {
    graph[v].forEach((node) => {
      if (!visited[node]) {
        dfs(graph, node, visited, output);
      }
    });
  }
}

function bfs(graph, start) {
  let visited = {};
  let queue = [start];
  let output = [];

  visited[start] = true;

  while (queue.length > 0) {
    let v = queue.shift();
    output.push(v);

    if (graph[v]) {
      graph[v].forEach((node) => {
        if (!visited[node]) {
          visited[node] = true;
          queue.push(node);
        }
      });
    }
  }

  return output;
}

function solve(input) {
  let [n, m, v] = input[0].split(" ").map(Number);
  let graph = {};

  for (let i = 0; i < m; i++) {
    let [a, b] = input[i + 1].split(" ").map(Number);

    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];

    if (!graph[a].includes(b)) graph[a].push(b);
    if (!graph[b].includes(a)) graph[b].push(a);
  }

  for (let i = 1; i <= n; i++) {
    if (graph[i]) {
      graph[i].sort((a, b) => a - b);
    }
  }

  let dfsOutput = [];
  let visited = {};
  dfs(graph, v, visited, dfsOutput);
  console.log(dfsOutput.join(" "));

  let bfsOutput = bfs(graph, v);
  console.log(bfsOutput.join(" "));
}

solve(input);
