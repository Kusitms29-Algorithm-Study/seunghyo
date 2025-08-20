//폰켓몬
function solution(nums) {
  let ablePocket = nums.length / 2;
  let pocketCount = 1;
  nums.sort();
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) {
      pocketCount++;
    }
  }
  if (ablePocket < pocketCount) {
    return ablePocket;
  } else {
    return pocketCount;
  }
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));
