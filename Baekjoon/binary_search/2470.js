//두 용액
//두 개의 서로 다른 용액을 혼합하여 특성값이 0에 가장 가까운 용액을 만들어내는 두 용액을 찾는 프로그램

const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const n = input[0].trim();
const values = input[1]
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

//start와 end를 더해서 0보다 크다면 end를 작게해서 더하기, 0보다 작다면 start를 크게해서 더하기. 이를 반복해서 mid에 도달하면 멈춤.

function action(arr, n) {
  let start = 0;
  let end = n - 1;
  let answer = Number.MIN_SAFE_INTEGER;
  let answer_array = [];

  while (start !== end) {
    // start와 end가 만나기 전까지만 반복문 돌려줌
    let sum = arr[start] + arr[end];
    if (Math.abs(sum) < Math.abs(answer)) {
      answer = sum;
      answer_array = [arr[start], arr[end]];
    }
    if (sum == 0) {
      // 한번 틀려서 0일 경우 if를 다시만들어서...해줌 그러니 맞았다
      break;
    } else if (sum < 0) {
      start++;
    } else {
      end--;
    }
  }

  return answer_array;
}

console.log(action(values, n).join(" "));
