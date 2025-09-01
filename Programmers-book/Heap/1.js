function solution(scoville, K) {
  let count = 0;

  scoville.sort((a, b) => a - b);
  while (scoville[0] < K) {
    let a = scoville.shift();
    let b = scoville.shift();
    let mix = a + b * 2;
    scoville.unshift(mix);
    scoville.sort((a, b) => a - b);
    count++;
  }
  return count;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7));
