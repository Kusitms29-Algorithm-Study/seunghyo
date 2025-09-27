//짝지어 제거하기
function solution(s) {
  let arr = s.split("");
  while (arr.length > 0) {
    let idx = 1;
    if (arr[idx] === arr[idx - 1]) {
      arr.splice(idx - 1, 2);
      continue;
    } else if (idx.length > arr.length) {
      return 0;
    } else {
      idx++;
    }
  }

  return 1;
}

console.log(solution("baabaa"));
