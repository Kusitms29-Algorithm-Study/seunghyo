function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let deliverIdx = n - 1;
  let pickupIdx = n - 1;

  // 남은 배달/수거가 없을 때까지 반복
  while (deliverIdx >= 0 || pickupIdx >= 0) {
    // 마지막 0인 요소들 제거 (배달)
    while (deliverIdx >= 0 && deliveries[deliverIdx] === 0) {
      deliverIdx--;
    }
    // 마지막 0인 요소들 제거 (수거)
    while (pickupIdx >= 0 && pickups[pickupIdx] === 0) {
      pickupIdx--;
    }
    // 둘 다 0이면 종료
    if (deliverIdx < 0 && pickupIdx < 0) break;

    // 현재 라운드에서 최대 이동 거리는 남은 인덱스 중 더 큰 값
    let currentDistance = Math.max(deliverIdx, pickupIdx) + 1;
    answer += currentDistance * 2;

    // 배달 처리: cap만큼 채워서 남은 배달들을 처리
    let capRemaining = cap;
    for (let i = deliverIdx; i >= 0 && capRemaining > 0; i--) {
      if (deliveries[i] <= capRemaining) {
        capRemaining -= deliveries[i];
        deliveries[i] = 0;
      } else {
        deliveries[i] -= capRemaining;
        capRemaining = 0;
      }
    }

    // 수거 처리: 배달과 비슷하게 처리 (cap만큼 수거)
    capRemaining = cap;
    for (let i = pickupIdx; i >= 0 && capRemaining > 0; i--) {
      if (pickups[i] <= capRemaining) {
        capRemaining -= pickups[i];
        pickups[i] = 0;
      } else {
        pickups[i] -= capRemaining;
        capRemaining = 0;
      }
    }
  }
  return answer;
}
