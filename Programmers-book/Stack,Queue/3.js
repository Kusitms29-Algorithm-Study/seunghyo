//올바른 괄호
function solution(s) {
  if (s[0] === ")") {
    return false;
  }
  let leftCount = 0;
  let rightCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      leftCount++;
    } else {
      rightCount++;
    }
    if (rightCount > leftCount) {
      return false;
    }
  }
  if (rightCount === leftCount) {
    return true;
  } else {
    return false;
  }
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
