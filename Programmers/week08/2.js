function solution(sequence, k) {
  let answer = [];
  let answer_len = Infinity;

  for (let i = 0; i < sequence.length; i++) {
    let endIdx = i;
    let sum = 0;

    while (sum < k && endIdx < sequence.length) {
      sum += sequence[endIdx++];
    }
    if (sum === k) {
      if (answer_len > endIdx - i) {
        answer[0] = i;
        answer[1] = endIdx - 1;
        answer_len = endIdx - i;
      }
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5], 7));
