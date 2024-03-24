const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].trim().split(" ").map(Number);
const values = input[1]
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

function tree(arr, target) {
  let left = 0;
  let right = arr[arr.length - 1];
  let answer = Number.MIN_SAFE_INTEGER;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sum = 0;
    for (let x of arr) {
      if (x > mid) sum += x - mid;
    }

    if (sum >= target) {
      if (mid > answer) answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return answer;
}

console.log(tree(values, m));
