//숫자 카드 나누기
function solution(arrayA, arrayB) {
  arrayA.sort((a, b) => b - a);
  arrayB.sort((a, b) => b - a);
  let max = Math.max(arrayA[0], arrayB[0]);
  4;

  function isDivision(array, value) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] % value !== 0) {
        return false;
      }
    }
    return true;
  }

  function isAllUnDivision(array, value) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] % value === 0) {
        return false;
      }
    }
    return true;
  }

  while (max > 0) {
    if (isDivision(arrayA, max) && isAllUnDivision(arrayB, max)) {
      return max;
    } else if (isDivision(arrayB, max) && isAllUnDivision(arrayA, max)) {
      return max;
    } else {
      max--;
    }
  }
  return 0;
}

console.log(solution([10, 17], [5, 20]));
console.log(solution([14, 35, 119], [18, 30, 102]));
