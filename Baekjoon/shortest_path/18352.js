const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
//BFS로 풀었던..?

class Queue {
  constructor() {
    this.q = [];
    this.h = 0;
    this.t = 0;
  }
  enque(v) {
    this.q[this.t++] = v;
  }
  deque() {
    const v = this.q[this.h];
    delete this.q[this.h++];
    return v;
  }
  size() {
    return this.t - this.h;
  }
}

const [n, m, k, x] = input[0].split(" ").map(Number);

const graph = Array.from({ length: n + 1 }, () => []);
const visited = new Array(n + 1).fill(-1);

for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
}

// console.log(graph);

const ans = [];
function bfs(str) {
  const queue = new Queue();
  queue.enque(str);
  visited[str] = 0;

  while (queue.size()) {
    const cur = queue.deque();

    if (visited[cur] === k) ans.push(cur);

    for (const next of graph[cur]) {
      if (visited[next] === -1) {
        queue.enque(next);
        visited[next] = visited[cur] + 1;
      }
    }
  }
}

bfs(x);
ans.sort((a, b) => a - b);
console.log(ans.length ? ans.join("\n") : -1);
