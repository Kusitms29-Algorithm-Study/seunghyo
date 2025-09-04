//모음 사전
function solution(word) {
  let words = [];
  let str = ["A", "E", "I", "O", "U"];

  for (let q of str) {
    words.push(q);
    for (let w of str) {
      words.push(q + w);
      for (let e of str) {
        words.push(q + w + e);
        for (let r of str) {
          words.push(q + w + e + r);
          for (let t of str) {
            words.push(q + w + e + r + t);
          }
        }
      }
    }
  }

  return words.indexOf(word) + 1;
}

console.log(solution());
