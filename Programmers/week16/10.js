function solution(people, limit) {
  people.sort();
  let count = 0;
  let limit = 0;
  for (let i = 0; i < people; i++) {
    limit += people[0];
  }
  return people;
}

console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 80, 50], 100));
