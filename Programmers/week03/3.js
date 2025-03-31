//가장 많이 받은 선물
function solution(friends, gifts) {
  let answer = 0;
  const len = friends.length;
  let adj = Array.from({ length: len }, () => Array(len).fill(0));
  let giftNum = Array.from({ length: len }, () => 0);
  let max = 0;
  for (let i = 0; i < gifts.length; i++) {
    gifts[i] = gifts[i].split(" ");
  }

  for (let i = 0; i < gifts.length; i++) {
    let send = -1;
    let get = -1;
    for (let j = 0; j < len; j++) {
      if (send >= 0 && get >= 0) break;
      if (gifts[i][0] === friends[j]) {
        send = j;
      }
      if (gifts[i][1] === friends[j]) {
        get = j;
      }
    }
    adj[send][get]++;
  }
  //선물지수 계산
  for (let i = 0; i < len; i++) {
    let sum = 0;
    for (let j = 0; j < len; j++) {
      sum += adj[i][j];
      sum -= adj[j][i];
    }
    giftNum[i] = sum;
  }
  //선물 비교
  for (let i = 0; i < len; i++) {
    let gifts = 0;
    for (let j = 0; j < len; j++) {
      if (adj[i][j] > adj[j][i]) {
        gifts++;
      } else if (adj[i][j] === adj[j][i]) {
        if (giftNum[i] > giftNum[j]) {
          gifts++;
        }
      }
    }
    if (max < gifts) {
      max = gifts;
    }
  }

  return max;
}

console.log(
  solution(
    ["muzi", "ryan", "frodo", "neo"],
    [
      "muzi frodo",
      "muzi frodo",
      "ryan muzi",
      "ryan muzi",
      "ryan muzi",
      "frodo muzi",
      "frodo ryan",
      "neo muzi",
    ]
  )
);
