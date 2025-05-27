//요격 시스템
function solution(targets) {
  targets = targets.sort((a, b) => a[1] - b[1]);
  let start = 0;
  let cnt = 0;
  for (let i = 0; i < targets.length; i++) {
    if (targets[i][0] >= start) {
      cnt++;
      start = targets[i][1];
    }
  }

  return cnt;
}

solution([
  [4, 5],
  [4, 8],
  [10, 14],
  [11, 13],
  [5, 12],
  [3, 7],
  [1, 4],
]);
