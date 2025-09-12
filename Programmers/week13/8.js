//양궁대회
function solution(n, info) {
  let answer = Array(11).fill(0);
  let max = 0;

  function dfs(enemyTotal, myTotal, usedArrow, point, arr) {
    if (n < usedArrow) return;
    if (point > 10) {
      let diff = myTotal - enemyTotal;
      if (diff > max) {
        arr[10] = n - usedArrow;
        max = diff;
        answer = arr;
      }
      return;
    }

    if (n > usedArrow) {
      let current = [...arr];
      current[10 - point] = info[10 - point] + 1;
      dfs(
        enemyTotal,
        myTotal + point,
        usedArrow + info[10 - point] + 1,
        point + 1,
        current
      );
    }

    if (info[10 - point] > 0) {
      dfs(enemyTotal + point, myTotal, usedArrow, point + 1, arr);
    } else {
      dfs(enemyTotal, myTotal, usedArrow, point + 1, arr);
    }
  }

  dfs(0, 0, 0, 0, answer);

  function isBetterAnswer(newArr, oldArr) {
    for (let i = 10; i >= 0; i--) {
      if (newArr[i] > oldArr[i]) return true;
      if (newArr[i] < oldArr[i]) return false;
    }
    return false;
  }

  return max > 0 ? answer : [-1];
}

console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]));
console.log(solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
console.log(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1]));
console.log(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3]));
