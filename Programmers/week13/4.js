function solution(topings) {
  let count = 0;
  const leftMap = new Map();
  const rightMap = new Map();
  for (let i = 0; i < topings.length; i++) {
    rightMap.set(
      topings[i],
      rightMap.get(topings[i]) ? rightMap.get(topings[i]) + 1 : 1
    );
  }
  for (let i = 0; i < topings.length; i++) {
    leftMap.set(
      topings[i],
      leftMap.get(topings[i]) ? leftMap.get(topings[i]) + 1 : 1
    );
    if (rightMap.get(topings[i]) > 1)
      rightMap.set(topings[i], rightMap.get(topings[i]) - 1);
    else if (rightMap.get(topings[i]) === 1) rightMap.delete(topings[i]);
    if (leftMap.size === rightMap.size) {
      count++;
    }
  }
  return count;
}
console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]));
console.log(solution([1, 2, 3, 1, 4]));
