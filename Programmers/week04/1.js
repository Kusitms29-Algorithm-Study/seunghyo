function solution(diffs, times, limit) {
  function search_level(lv) {
    let totalTime = 0;

    for (let i = 0; i < diffs.length; i++) {
      const diff = diffs[i];
      const timeCur = times[i];
      const timePrev = i > 0 ? times[i - 1] : 0;

      if (lv >= diff) {
        totalTime += timeCur;
      } else {
        const mistakes = diff - lv;
        // overflow 방지: 먼저 계산 후 limit 초과 여부 확인
        const added = mistakes * (timeCur + timePrev) + timeCur;

        // limit 초과 여부 먼저 확인
        if (totalTime > limit - added) {
          return false;
        }

        totalTime += added;
      }
    }

    return totalTime <= limit;
  }

  let low = 1;
  let high = diffs.reduce((max, val) => Math.max(max, val), -Infinity);
  let answer = -1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
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
