function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let deliverIdx = n - 1;
  let pickIdx = n - 1;
  while (pickIdx >= 0 || deliverIdx >= 0) {
    let deliver = cap; //배달가능 용량
    let pick = cap; // 수거가능 용량

    while (deliverIdx >= 0 && deliveries[deliverIdx] === 0) {
      deliverIdx--;
    }

    while (pickIdx >= 0 && pickups[pickIdx] === 0) {
      pickIdx--;
    }
    // 둘 다 0이면 종료
    if (deliverIdx < 0 && pickIdx < 0) break;

    let currentIdx = deliverIdx > pickIdx ? deliverIdx : pickIdx;
    answer += (currentIdx + 1) * 2;

    for (let i = currentIdx; i >= 0; i--) {
      if (deliver === 0) break;
      if (deliveries[i] > deliver) {
        deliveries[i] -= deliver;
        deliver = 0;
        break;
      } else {
        deliver -= deliveries[i];
        deliveries[i] = 0;
      }
    }

    for (let i = currentIdx; i >= 0; i--) {
      if (pick === 0) break;
      if (pickups[i] > pick) {
        pickups[i] -= pick;
        pick = 0;
        break;
      } else {
        pick -= pickups[i];
        pickups[i] = 0;
      }
    }
  }

  return answer;
}

console.log(solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0]));
