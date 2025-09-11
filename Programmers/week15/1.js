function solution(k, tangerine) {
  let tangerineCount = new Map();

  for (let i = 0; i < tangerine.length; i++) {
    if (tangerineCount[tangerine[i]]) {
      tangerineCount[tangerine[i]] = tangerineCount[tangerine[i]] + 1;
    } else {
      tangerineCount[tangerine[i]] = 1;
    }
  }
  let entries = Object.entries(tangerineCount);
  entries.sort((a, b) => b[1] - a[1]);
  let sum = 0;
  let answer = 0;

  for (let [, value] of entries) {
    if (sum >= k) {
      break;
    }
    sum += value;
    answer++;
  }
  return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
