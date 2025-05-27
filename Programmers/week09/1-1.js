function solution(plans) {
  const toMinute = (timeStr) => {
    const [h, m] = timeStr.split(":").map(Number);
    return h * 60 + m;
  };

  plans.sort((a, b) => toMinute(a[1]) - toMinute(b[1]));

  const answer = [];
  const stack = [];

  for (let i = 0; i < plans.length - 1; i++) {
    const [currName, currStartStr, currPlaytimeStr] = plans[i];
    const [nextName, nextStartStr] = plans[i + 1];

    const currStart = toMinute(currStartStr);
    const nextStart = toMinute(nextStartStr);
    const currPlaytime = Number(currPlaytimeStr);

    let timeLeft = nextStart - currStart; //다음 시작 - 현재 시작(남는 시간)

    if (currPlaytime <= timeLeft) {
      //실행시간이 다음 실행 시작보다 작거나 같을 때
      answer.push(currName); // 일이 모두 완료가능하므로 답에 넣어준다.
      timeLeft -= currPlaytime; //일이 실행하는 시간을 빼준다.

      while (timeLeft > 0 && stack.length > 0) {
        //만약 아직도 시간이 남고(and), 남은 일이 있다면(무한 반복)
        const top = stack.pop(); //가장 먼저 실행해야하는 일을 pop
        if (top.time <= timeLeft) {
          //현재 남은 시간이 일을 실행하기에 충분하다면
          answer.push(top.name); //답에 추가(실행완료)
          timeLeft -= top.time;
        } else {
          top.time -= timeLeft; // 일을 실행하기에 충분하지 않은 시간이라면
          stack.push(top); // 스택에 다시 일을 넣어준다.
          break;
        }
      }
    } else {
      stack.push({ name: currName, time: currPlaytime - timeLeft });
    }
  }

  answer.push(plans[plans.length - 1][0]); //마지막 과제는 무조건 끝까지 실행된다.

  while (stack.length > 0) {
    //스택이 남았다면 순서대로 실행, 이제는 우선순위 작업이 없다.
    answer.push(stack.pop().name);
  }

  console.log(answer);
  return answer;
}

solution([
  ["korean", "11:40", "30"],
  ["english", "12:20", "20"],
  ["math", "12:30", "40"],
]);
