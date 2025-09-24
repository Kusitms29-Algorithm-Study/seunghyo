function solution(brown, yellow) {
  let mn = brown + yellow;
  let mpn = (brown + 4) / 2;
  let max = Math.floor(mpn / 2);

  for (let i = 3; i <= max; i++) {
    let n = i;
    let m = mpn - n;

    if (n * m === mn) {
      return [m, n];
    }
  }
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
