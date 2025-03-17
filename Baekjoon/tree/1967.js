const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const inputArr = input.map((v) => v.split(" ").map(Number));
let graph = Array.from(Array(N + 1), () => []);
inputArr.forEach(([from, to, distance]) => {
  graph[from].push([to, distance]);
  graph[to].push([from, distance]);
});
const visited = Array(N + 1).fill(false);
let max = { node: 0, dist: 0 };
const dfs = (node, dist) => {
  visited[node] = true;
  if (max.dist < dist) max = { node, dist };
  for (const [nextNode, nextDist] of graph[node]) {
    if (visited[nextNode]) continue;
    dfs(nextNode, dist + nextDist);
  }
};
dfs(1, 0);
visited.fill(false);
dfs(max.node, 0);
console.log(max.dist);
