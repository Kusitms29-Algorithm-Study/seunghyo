function solution(n, t) {
  let answer = n;
  while (t > 0) {
    answer = answer * 2;
    t--;
  }
  return answer;
}
