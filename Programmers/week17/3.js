function solution(n, t, m, p) {
  let arr = [];
  let turn = p;
  if (turn === m) {
    turn = 0;
  }
  let currentLen = 0;
  for (let i = 0; arr.length < t; i++) {
    let numberArr = i.toString(n).split("");
    //console.log(numberArr, i);

    for (let j = 0; j < numberArr.length; j++) {
      currentLen++;
      if (currentLen % m === turn && arr.length < t) {
        arr.push(numberArr[j].toUpperCase());
      }
    }
  }

  return arr.join("");
}

console.log(solution(2, 4, 2, 1));
console.log(solution(16, 16, 2, 1));
console.log(solution(16, 16, 2, 2));
