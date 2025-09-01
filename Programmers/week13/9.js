//피보나치 수
function solution(n) {
  let fibonacciArr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    fibonacciArr[i] = (fibonacciArr[i - 1] + fibonacciArr[i - 2]) % 1234567;
  }

  return fibonacciArr[n];
}

console.log(solution(3));
console.log(solution(5));
console.log(solution(8));
