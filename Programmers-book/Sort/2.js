//가장 큰 수
function solution(numbers) {
  let stringArr = numbers.map((v) => v.toString());
  stringArr.sort((a, b) => b + a - (a + b));
  const answer = stringArr.join("");
  return answer[0] === "0" ? "0" : answer;
}
