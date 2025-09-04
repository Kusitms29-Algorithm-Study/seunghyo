//k진수에서 소수 개수 구하기
function solution(n, k) {
  let str = n.toString(k);
  let answer = 0;

  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  let checking = false;
  let checkStr = "";

  for (let i = 0; i < str.length; i++) {
    if (checking) {
      if (str[i] !== "0") {
        checkStr += str[i];
      } else {
        if (isPrime(parseInt(checkStr))) {
          answer++;
        }
        checking = false;
        checkStr = "";
      }
    } else {
      if (str[i] !== "0") {
        checking = true;
        checkStr += str[i];
      }
    }
  }

  if (checking) {
    if (isPrime(parseInt(checkStr))) {
      answer++;
    }
  }

  return answer;
}

//console.log(solution(437674, 2));
console.log(solution(110011, 10));
