function solution(num, total) {
  let mid = Math.floor(total / num);
  let answer = [mid];

  for (let i = 1; i < num / 2; i++) {
    answer.push(mid + i);
    answer.unshift(mid - i);
  }

  if (num % 2 === 0) {
    answer.push(mid + num / 2);
  }

  return answer;
}

console.log(solution(3, 12));
console.log(solution(5, 15));
console.log(solution(4, 14));
