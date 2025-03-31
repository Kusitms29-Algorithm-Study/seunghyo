//서버증설횟수
function solution(players, m, k) {
  let able = Array(24).fill(0);
  let count = 0;
  for (let i = 0; i < 24; i++) {
    let sum = 0; //현재 켜져있는 서버
    let server = Math.floor(players[i] / m); //필요한 서버의 수

    //기한이 다 된 서버 끄기
    for (let j = 0; j < 24; j++) {
      if (able[j] === 0) {
        continue;
      } else if (i - j >= k && able[j] > 0) {
        able[j] = 0;
      } else if (able[j] > 0) {
        sum += able[j];
      }
    }

    if (players[i] < sum) {
      continue;
    } else if (sum >= server) {
      continue;
    } else {
      able[i] = server - sum;
      count += able[i];
      console.log(i, able[i]);
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
