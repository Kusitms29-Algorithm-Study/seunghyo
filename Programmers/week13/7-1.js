//두 큐 합 같게 만들기
function solution(queue1, queue2) {
  const len = queue1.length;
  let arr = [...queue1, ...queue2];
  let total = arr.reduce((acc, v) => acc + v, 0);
  if (total % 2 !== 0) {
    return -1;
  }

  let target = total / 2;
  let left = 0;
  let right = len;
  let sum = queue1.reduce((a, b) => a + b, 0);
  let cnt = 0;

  while (left < 2 * len && right < 2 * len) {
    if (sum === target) return cnt;
    if (sum > target) {
      sum -= arr[left++];
    } else {
      sum += arr[right++];
    }
    cnt++;
  }
  return -1;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]));
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2]));
console.log(solution([1, 1], [1, 5]));
