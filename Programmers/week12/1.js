function solution(babbling) {
  let count = 0;
  const possible = ["aya", "ye", "woo", "ma"];

  for (let word of babbling) {
    let isValid = true;

    while (word.length > 0) {
      let found = false;
      for (let p of possible) {
        if (word.startsWith(p)) {
          word = word.slice(p.length);
          found = true;
          break;
        }
      }
      if (!found) {
        isValid = false;
        break;
      }
    }

    if (isValid) count++;
  }
  return count;
}

//가장 나은 정답인 거 같은 거
function solution2(babbling) {
  var answer = 0;
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach((word) => {
    if (regex.test(word)) answer++;
  });

  return answer;
}
