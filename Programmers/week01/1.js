//유연근무제
function solution(schedules, timelogs, startday) {
  var answer = 0;

  for (let i = 0; i < schedules.length; i++) {
    let pass = true;

    let max = schedules[i] + 10;
    if (max % 100 >= 60) {
      max += 100;
      max -= 60;
    }

    for (let j = 0; j < 7; j++) {
      let rest = j + startday;
      //토요일이나 일요일이라면 패스
      if (rest % 7 === 0 || rest % 7 === 6) {
        continue;
      }
      if (timelogs[i][j] > max) {
        pass = false;
        break;
      }
    }

    if (pass) {
      answer++;
    }
  }

  console.log(answer);

  return answer;
}

solution(
  [700, 855, 1156],
  [
    [710, 2359, 1050, 700, 650, 631, 659],
    [800, 801, 805, 800, 759, 810, 809],
    [1105, 1001, 1002, 600, 1059, 1001, 1100],
  ],
  5
);
