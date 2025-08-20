function solution(common) {
  let last = common.length - 1;
  //등차 등비 확인하기
  if (common[1] - common[0] === common[2] - common[1]) {
    return common[last] + (common[1] - common[0]);
  } else {
    return common[last] * (common[1] / common[0]);
  }
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([2, 4, 8]));
