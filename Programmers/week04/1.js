function solution(diffs, times, limit) {
  function search_level(lv) {
    let totalTime = 0;
    for (let i = 0; i < diffs.length; i++) {
      if (lv >= diffs[i]) {
        totalTime += times[i];
      } else {
        const prev = times[i - 1] ?? 0;
        totalTime += (diffs[i] - lv) * (times[i] + prev) + times[i];
      }
    }
    return totalTime <= limit;
  }

  let low = 1;
  let high = Math.max(...diffs);
  let answer = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (search_level(mid)) {
      answer = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return answer;
}

console.log(solution([1, 5, 3], [2, 4, 7], 30));
