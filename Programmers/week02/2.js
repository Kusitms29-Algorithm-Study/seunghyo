function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  while (deliveries.length > 0 && pickups.length > 0) {
    let deliver = cap;
    let pick = cap;
    let endIndex = -1;
    while (
      deliveries[deliveries.length - 1] === 0 &&
      pickups[pickups.length - 1] === 0
    ) {
      deliveries.pop();
      pickups.pop();
      n--;
    }
    for (let i = n - 1; i >= 0; i--) {
      if (deliver === 0 && pick === 0) {
        break;
      }
      if (endIndex < i) {
        endIndex = i;
      }
      //배달
      if (deliveries[i] > 0 && deliver > 0) {
        if (deliveries[i] < deliver) {
          deliver -= deliveries[i];
          deliveries[i] = 0;
        } else {
          deliveries[i] -= deliver;
          deliver = 0;
        }
      }
      //픽업
      if (pickups[i] > 0 && pick > 0) {
        if (pickups[i] < pick) {
          pick -= pickups[i];
          pickups[i] = 0;
        } else {
          pickups[i] -= pick;
          pick = 0;
        }
      }
    }
    answer = answer + (endIndex + 1) * 2;
  }
  return answer;
}
