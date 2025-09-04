//주차요금계산
function solution(fees, records) {
  let carsRecord = new Map(); //차넘버 , IN 시간
  let carsTotalTime = new Map(); //차넘버, 누적 시간
  for (let i = 0; i < records.length; i++) {
    let [time, num, direction] = records[i].split(" ");

    if (direction === "IN") {
      carsRecord.set(num, time);
    } else {
      let [inHour, inMin] = carsRecord.get(num).split(":");
      let [outHour, outMin] = time.split(":");
      inHour = parseInt(inHour);
      inMin = parseInt(inMin);
      outHour = parseInt(outHour);
      outMin = parseInt(outMin);
      let costTotalMin = (outHour - inHour) * 60 + outMin - inMin;
      if (carsTotalTime.has(num)) {
        carsTotalTime.set(num, carsTotalTime.get(num) + costTotalMin);
      } else {
        carsTotalTime.set(num, costTotalMin);
      }
      carsRecord.delete(num);
    }
  }

  if (carsRecord.size > 0) {
    for (let [key, val] of carsRecord) {
      let [inHour, inMin] = val.split(":");
      inHour = parseInt(inHour);
      inMin = parseInt(inMin);
      let costTotalMin = (23 - inHour) * 60 + 59 - inMin;
      if (carsTotalTime.has(key)) {
        carsTotalTime.set(key, carsTotalTime.get(key) + costTotalMin);
      } else {
        carsTotalTime.set(key, costTotalMin);
      }
    }
  }

  //totalTime으로 주차요금 계산
  let sortedTotalTime = new Map(
    [...carsTotalTime.entries()].sort((a, b) => a[0] - b[0])
  );
  let answer = [];
  for (let val of sortedTotalTime.values()) {
    if (val <= fees[0]) {
      answer.push(fees[1]);
    } else {
      answer.push(fees[1] + Math.ceil((val - fees[0]) / fees[2]) * fees[3]);
    }
  }

  return answer;
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ]
  )
);
