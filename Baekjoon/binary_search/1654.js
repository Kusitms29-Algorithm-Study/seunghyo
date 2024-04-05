//랜선 자르기

const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].trim().split(" ").map(Number);
const values = input.slice(1, n + 1).sort((a, b) => a - b);

function action(arr, target) {
  let left = 0;
  let right = arr[arr.length - 1];
  let answer = Number.MIN_SAFE_INTEGER;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sum = 0;
    for (let x of arr) {
      sum += Math.floor(x / mid);
    }

    console.log("sum" + sum);

    if (sum >= target) {
      if (mid > answer) answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    console.log("mid" + mid);
    console.log("left" + left);
    console.log("right" + right);
    console.log("======\n");
  }
  return answer;
}

console.log(values);
console.log(action(values, m));
