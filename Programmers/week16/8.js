function solution(s) {
  let arr = s.split("");
  let turn = 0;
  let removedZero = 0;

  while (arr.length > 1) {
    console.log(arr, removedZero);
    let countOne = 0;
    let countZero = 0;

    for (let a of arr) {
      if (a === "1") {
        countOne++;
      } else {
        countZero++;
      }
    }

    num = countOne.toString(2);
    removedZero += countZero;
    turn++;

    if (num === "1") break;
    arr = num.split("");
  }

  return [turn, removedZero];
}

console.log(solution("110010101001"));
console.log(solution("01110"));
