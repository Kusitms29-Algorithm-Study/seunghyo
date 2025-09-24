function solution(n) {
  let count = 0;
  let i = 1;
  while (i <= n) {
    let sum = 0;
    for (let j = i; sum < n; j++) {
      sum += j;
    }
    if (sum === n) {
      count++;
    }
    i++;
  }

  return count;
}

console.log(solution(15));
