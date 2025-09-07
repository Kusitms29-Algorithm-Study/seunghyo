var sumZero = function (n) {
  if (n === 1) return [0];
  let answer = [];
  if (n % 2 !== 0) {
    answer.push(0);
  }
  let max = Math.floor(n / 2);
  for (let i = 1; i <= max; i++) {
    answer.push(i);
    answer.push(-i);
  }

  return answer;
};

console.log(sumZero(7));

// 1 - [0]
// 2 - [-1, 1]
// 3 - [-1, 0,1]
// 4 - [-2, -1,1,2]
// 5 - [-2,-1,0,1,2]
