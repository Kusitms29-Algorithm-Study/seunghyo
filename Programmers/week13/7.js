//두 큐 합 같게 만들기
function solution(queue1, queue2) {
  const len = queue1.length;
  let q1Sum = 0;
  let q2Sum = 0;
  let q1 = 0;
  let q2 = 0;
  //초기 SUM
  for (let j = 0; j < queue1.length; j++) {
    q1Sum += queue1[j];
  }
  for (let k = 0; k < queue2.length; k++) {
    q2Sum += queue2[k];
  }

  while (q1 < len * 2 && q2 < len * 2) {
    if (q1Sum > q2Sum) {
      q1Sum -= queue1[q1 >= len ? q1 - len : q1];
      q2Sum += queue1[q1 >= len ? q1 - len : q1];
      q1++;
    } else {
      q2Sum -= queue2[q2 >= len ? q2 - len : q2];
      q1Sum += queue2[q2 >= len ? q2 - len : q2];
      q2++;
    }

    if (q1Sum === 0 || q2Sum === 0) {
      return -1;
    }
    if (q1Sum === q2Sum) {
      return q1 + q2;
    }
  }
  return -1;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]));
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2]));
console.log(solution([1, 1], [1, 5]));
