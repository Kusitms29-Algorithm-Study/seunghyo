//오픈 채팅방
function solution(record) {
  let member = new Map();
  let answer = [];

  for (let i = 0; i < record.length; i++) {
    let recordArr = record[i].split(" ");
    let action = recordArr[0];
    let id = recordArr[1];

    if (action === "Enter" || action === "Change") {
      member.set(id, recordArr[2]);
    }
    if (recordArr[0] === "Enter") {
      answer.push(["님이 들어왔습니다.", id]);
    } else if (recordArr[0] === "Leave") {
      answer.push(["님이 나갔습니다.", id]);
    }
  }

  return answer.map((a) => member.get(a[1]) + a[0]);
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
