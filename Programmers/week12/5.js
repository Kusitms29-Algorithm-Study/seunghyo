function solution(M, N) {
  let count = 0;
  if (M === 1 && N === 1) {
    return count;
  }
  count = M * N - 1;
  return count;
}

console.log(solution(2, 2));
console.log(solution(2, 5));
console.log(solution(1, 1));
