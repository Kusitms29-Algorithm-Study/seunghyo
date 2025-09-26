function solution(n) {
  let str = n.toString(2);
  let arr = str.split("");
  let zeroCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (arr[i] === "0") {
      zeroCount++;
    }
  }
  return arr;
}

console.log(solution(78));
console.log(solution(15));
