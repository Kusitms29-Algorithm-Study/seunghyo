//이진 검색 트리
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const stack = [];
const result = [];
stack.push([0, input.length - 1]);

while (stack.length) {
  const [start, end] = stack.pop();
  if (start > end) continue;

  result.push(input[start]); // 루트 노드

  // 오른쪽 서브트리의 루트 구하기
  const rightRoot = getRightRoot(start, end);

  // 오른쪽 서브트리가 있을 경우
  if (rightRoot) {
    stack.push([start + 1, rightRoot - 1]); // 왼쪽 서브트리의 시작, 끝 인덱스
    stack.push([rightRoot, end]); // 오른쪽 서브트리의 시작, 끝 인덱스
  } else {
    stack.push([start + 1, end]); // 루트 노드만 제거
  }
}

console.log(result.reverse().join("\n"));

function getRightRoot(start, end) {
  for (let i = start + 1; i <= end; i++) {
    if (input[i] > input[start]) return i;
  }
}
