//짝지어 제거하기
function solution(s) {
  let arr = s.split("");

  while (arr.length > 0) {
    let keep = false;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === arr[i - 1]) {
        arr[i] = 0;
        arr[i - 1] = 0;
        keep = true;
        break;
      }
    }

    if (!keep) {
      break;
    }
  }

  if (arr.length > 0) {
    return 0;
  }

  return 1;
}

console.log(solution("baabaa"));
console.log(solution("ba"));
