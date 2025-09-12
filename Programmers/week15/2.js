//양궁대회 - 2번째
function solution(n, info) {
  let maxScore = 0;
  let maxArray = Array(11).fill(0);

  function isBetterAnswer(newArr, oldArr) {
    for (let i = 10; i >= 0; i--) {
      if (newArr[i] > oldArr[i]) return true;
      if (newArr[i] < oldArr[i]) return false;
    }
    return false;
  }

  function dfs(score, enemyScore, currentTarget, usedArrow, currentArray) {
    let copiedArray = [...currentArray];
    //점수 집계 종료
    if (currentTarget === 0) {
      let diff = score - enemyScore;
      if (n - usedArrow > 0) {
        copiedArray[10] += n - usedArrow;
      }
      if (
        diff > maxScore ||
        (diff === maxScore && isBetterAnswer(copiedArray, maxArray))
      ) {
        maxScore = diff;
        maxArray = copiedArray;
      }
      return;
    }

    //화살 다 쓴 경우
    if (usedArrow >= n) {
      if (info[10 - currentTarget] > 0) {
        dfs(
          score,
          enemyScore + currentTarget,
          currentTarget - 1,
          usedArrow,
          copiedArray
        );
      } else {
        dfs(score, enemyScore, currentTarget - 1, usedArrow, copiedArray);
      }

      return;
    }
    //적이 과녁을 쏜 경우
    if (info[10 - currentTarget] > 0) {
      let shotArray = [...currentArray];
      shotArray[10 - currentTarget] = info[10 - currentTarget] + 1;
      if (usedArrow + info[10 - currentTarget] + 1 <= n) {
        //쏘는 경우
        dfs(
          score + currentTarget,
          enemyScore,
          currentTarget - 1,
          usedArrow + info[10 - currentTarget] + 1,
          shotArray
        );
      }
      //있음에도 다음을 위해 보내주는 경우
      dfs(
        score,
        enemyScore + currentTarget,
        currentTarget - 1,
        usedArrow,
        copiedArray
      );
    } else {
      //적이 과녁을 안 쏜 경우 => 남은 화살이 있다면 무조건 쏜다
      copiedArray[10 - currentTarget] = 1;
      dfs(
        score + currentTarget,
        enemyScore,
        currentTarget - 1,
        usedArrow + 1,
        copiedArray
      );
      return;
    }
  }

  dfs(0, 0, 10, 0, Array(11).fill(0));
  return maxScore > 0 ? maxArray : [-1];
}

console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]));
console.log(solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
console.log(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3]));
