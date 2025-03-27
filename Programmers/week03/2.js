//서버증설횟수
function solution(players, m, k) {
  let able = Array(24).fill(-1);
  let count = 0;
  for (let i = 0; i < 24; i++) {
    let sum = 0;
    let server = Math.floor(players[i] / m);
    console.log(server);

    for (let j = 0; j < 24; j++) {
      if (i - j > k) {
        able[j] = -1;
      }
      if (able[j] > 0) {
        sum += able[j];
      }
    }
    if (players[i] < sum) {
      continue;
    } else {
      able[i] = server - sum;
      count = count + server - sum;
    }
  }
  return count;
}

console.log(
  solution(
    [0, 2, 3, 3, 1, 2, 0, 0, 0, 0, 4, 2, 0, 6, 0, 4, 2, 13, 3, 5, 10, 0, 1, 5],
    3,
    5
  )
);
