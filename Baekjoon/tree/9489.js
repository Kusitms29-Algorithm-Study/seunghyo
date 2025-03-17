//사촌
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.pop();
let answer = [];
let idx = 0;
while (idx < input.length) {
  let [N, k] = input[idx++].split(" ").map(Number); // 숫자 개수와 수열 특정 넘버 K
  let commands = input[idx++].split(" ").map(Number); // 수열
  let parent = Array.from({ length: N }, () => -1);
  let kidx = 0;
  let parentidx = -1;

  for (let i = 1; i < N; i++) {
    if (commands[i] !== commands[i - 1] + 1) parentidx++;
    if (commands[i] === k) kidx = i;
    parent[i] = parentidx;
  }

  let siblings = 0;
  for (let j = 0; j < N; j++) {
    if (
      parent[kidx] !== parent[j] &&
      parent[parent[kidx]] === parent[parent[j]]
    )
      siblings++;
  }
  answer.push(siblings);
}

console.log(answer.join("\n"));
