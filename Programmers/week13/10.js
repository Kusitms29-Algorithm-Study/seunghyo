//JadenCase 문자열 만들기
function solution(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      continue;
    }
    if (s[i] === 0) {
      s[i].toUpperCase();
    }
    if (i > 0 && s[i - 1] === " ") {
      s[i].toUpperCase();
    } else {
      s[i].toLowerCase();
    }
  }
}
