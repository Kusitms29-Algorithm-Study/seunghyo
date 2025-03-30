//가장 많이 받은 선물
function solution(friends, gifts) {
  let answer = 0;
  const len = friends.length;
  let adj = Array(len).fill(Array(len).fill(0));

  for (let i = 0; i < gifts.length; i++) {
    gifts[i] = gifts[i].split(" ");
  }

  for (let i = 0; i < gifts.length; i++) {
    let send = -1;
    let get = -1;
    for (let j = 0; j < len; j++) {
      if (gifts[i][0] === friends[j]) {
        send = j;
      }
      if (gifts[i][1] === friends[j]) {
        get = j;
      }
    }
    adj[send][get]++;
  }
  console.log(adj);
  return answer;
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
