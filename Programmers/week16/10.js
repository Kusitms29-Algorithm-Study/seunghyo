function solution(n, lost, reserve) {
  let lostCount = 0;

  lost.sort();
  reserve.sort();

  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (reserve[j] === lost[i]) {
        lost.splice(i, 1);
        reserve.splice(j, 1);
      }
    }
  }

  const len = lost.length;
  for (let i = 0; i < len; i++) {
    console.log(lost[i], reserve);
    if (reserve.length < 1) {
      lostCount++;
      continue;
    } else {
      let idx = 0;
      while (idx < reserve.length) {
        if (reserve[idx] + 1 >= lost[i] && lost[i] >= reserve[idx] - 1) {
          reserve.splice(idx, 1);
          break;
        } else if (idx === reserve.length - 1) {
          lostCount++;
          break;
        } else {
          idx++;
        }
      }
    }
  }

  return n - lostCount;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
console.log(solution(5, [1, 2, 3, 5], [2, 4]));
