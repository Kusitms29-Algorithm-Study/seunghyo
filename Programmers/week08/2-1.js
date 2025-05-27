function solution(sequence, k) {
  let left = 0;
  let sum = 0;
  let answer = [];
  let minLen = Infinity;

  for (let right = 0; right < sequence.length; right++) {
    sum += sequence[right];

    while (sum > k) {
      sum -= sequence[left++];
    }

    if (sum === k && right - left < minLen) {
      answer = [left, right];
      minLen = right - left;
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5], 7));
