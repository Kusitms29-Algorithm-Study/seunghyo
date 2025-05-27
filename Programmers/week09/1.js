function solution(plans) {
  let plan_arr = [];
  let answer = [];
  for (let i = 0; i < plans.length; i++) {
    let hour = parseInt(plans[i][1][0] + plans[i][1][1]);
    let min = parseInt(plans[i][1][3] + plans[i][1][4]);
    let name = plans[i][0];
    let worktime = parseInt(plans[i][2]);
    plan_arr.push([name, hour, min, worktime]);
  }

  plan_arr.sort((a, b) => a[2] - b[2]);
  plan_arr.sort((a, b) => a[1] - b[1]);

  let work_stack = [...plan_arr]; //실행 중 작업들(순서순 정렬된 것)
  let stop_stack = [];
  let nowTime = [work_stack[0][1], work_stack[0][2]]; //현재 시각

  for (let j = 0; j < work_stack.length; j++) {
    let endTime = work_stack[j][2] + work_stack[j][3];
    let endTime_arr = [0, 0];
    if (endTime >= 60) {
      endTime_arr[0] = work_stack[j][1] + Math.floor(endTime / 60);
      endTime_arr[1] = endTime % 60;
    } else {
      endTime_arr[0] = work_stack[j][1];
      endTime_arr[1] = endTime;
    }

    //그 다음 과제까지 끝날 수 없을 때, 다음 시각까지 소요시간을 뺀 실행시간을 저장하고 종료
    if (
      work_stack[j + 1][1] < endTime_arr[0] ||
      (work_stack[j + 1][1] === endTime_arr[0] &&
        work_stack[j + 1][2] < endTime_arr[1])
    ) {
      let leftTime = [0, 0];
      if (endTime_arr[1] - work_stack[j + 1][1] < 0) {
        endTime_arr[0]--;
        leftTime[1] = endTime_arr[1] + 60;
        leftTime[0] = work_stack[j + 1][1] - endTime_arr[0];
      }
      let leftTotal = leftTime[0] * 60 + leftTime[1];
      stop_stack.push([work_stack[j][0], leftTotal]);
      nowTime = [work_stack[j + 1][1], work_stack[j + 1][2]];
      work_stack.shift();
    } else {
      nowTime = [endTime_arr[0], endTime_arr[1]];
      answer.push(work_stack[j][0]);
      work_stack.shift();
    }
  }
}

solution([
  ["korean", "11:40", "30"],
  ["english", "12:20", "20"],
  ["math", "12:30", "40"],
]);
