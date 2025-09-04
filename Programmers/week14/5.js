//n^2 배열 자르기
function solution(n, left, right) {
  let arr = [];
  let start = Math.floor(left / n);
  let end = Math.ceil(right / n);

  for (let i = start; i < end; i++) {
    for (let j = 0; j < n; j++) {
      if (i * n + j >= left && right >= i * n + j) {
        if (j <= i) {
          arr.push(i + 1);
        } else {
          arr.push(j + 1);
        }
      }
    }
  }

  return arr;
}

console.log(solution(3, 2, 5));
console.log(solution(4, 7, 14));
