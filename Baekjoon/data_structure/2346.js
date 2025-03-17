const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input[1].split(" ").map((v) => +v);
const answer = [];
let N = Number(input[0]);
let count = 0;
let idx = 0;

while (count < N) {
  let move = 0;
  if (arr[idx] !== "empty") {
    let cur = idx;
    let move = arr[idx];
    answer.push(idx + 1);
    arr[cur] = "empty";
    if (idx + move < 0) {
      idx = arr.length + move;
      console.log(idx);
    } else {
      idx = idx + move;
      console.log(idx);
    }

    console.log(arr);
    N--;
  } else {
    if (move < 0) {
      idx--;
    } else {
      idx++;
    }
  }
}

console.log(answer);
