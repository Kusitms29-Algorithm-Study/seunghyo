//문자열 밀기
function solution(A, B) {
  let isPossible = -1;
  if (A === B) {
    return 0;
  }
  for (let i = 1; i < A.length; i++) {
    let lastChar = A[A.length - 1];
    A = lastChar + A.slice(0, -1);
    if (A === B) {
      return i;
    }
  }
  return isPossible;
}

console.log(solution("hello", "ohell"));
console.log(solution("apple", "elppa"));
console.log(solution("atat", "tata"));
