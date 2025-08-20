//기능 개발
function solution(progresses, speeds) {
  let answer = [];
  let doneTimeArr = [];

  for (let i = 0; i < progresses.length; i++) {
    let left = 100 - progresses[i];
    let needTime = Math.ceil(left / speeds[i]);
    doneTimeArr.push(needTime);
  }
  console.log(doneTimeArr);
  let currentDayTime = doneTimeArr[0];
  let done = 1;

  for (let j = 1; j < doneTimeArr.length; j++) {
    if (doneTimeArr[j] <= currentDayTime) {
      done++;
    } else {
      answer.push(done);
      done = 1;
      currentDayTime = doneTimeArr[j];
    }
  }

  answer.push(done);
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
