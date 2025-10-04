function solution(people, limit) {
  people.sort();
  let sum = 0;
  let count = 0;

  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    if (people[left] + people[right] > limit) {
    }
  }

  return count;
}

console.log(solution([70, 50, 80, 50], 100));
