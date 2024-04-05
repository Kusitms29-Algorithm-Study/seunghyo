const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].trim().split(" ").map(Number); //나무의 개수 n, 필요한 나무의 길이 m
const values = input[1]
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b); //나무의 길이 배열(길이가 짧은 순서대로 정렬되었다.)

function tree(arr, target) {
  let left = 0;
  let right = arr[arr.length - 1]; //처음 값은 가장 긴 길이의 나무
  let answer = Number.MIN_SAFE_INTEGER; // 정답: 나무가 잘릴 높이

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sum = 0;
    for (let x of arr) {
      if (x > mid) sum += x - mid; //나무의 길이가 mid보다 길다면 해당 mid를 뺀 후 sum에 더해줌
    }

    if (sum >= target) {
      // sum이 가져가야할 나무의 길이보다 길다면
      if (mid > answer) answer = mid;
      //mid는 결국 잘라야하는 높이니까 mid가 길다면 더 절약할 수 있으므로,
      left = mid + 1;
      //answer에 mid를 넣어주고 left에 mid를 더해주어서 높이를 재검색한다.(정답은 지금 높이보다 더 높을 것이므로)
    } else {
      //sum이 target보다 크고 , mid가 answer보다 더 작다면 이건 불필요한 낭비가 일어나고 있음
      // right를 줄여서 재검색(mid를 작게함)
      right = mid - 1;
    }
    console.log("mid" + mid);
    console.log("left" + left);
    console.log("right" + right);
    console.log("======\n");
  }
  // left가 right보다 커지면 답을 출력한다
  return answer;
}

console.log(tree(values, m));
