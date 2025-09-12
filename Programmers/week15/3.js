//택배 배달과 수거하기
function solution(cap, n, deliveries, pickups) {
  let num_deliveries = 0;
  let num_pickups = 0;
  let answer = 0;

  for (i = deliveries.length - 1; i >= 0; i--) {
    let num_times = 0;
    deliveries[i] = deliveries[i] + num_deliveries;
    pickups[i] = pickups[i] + num_pickups;

    while (deliveries[i] > 0 || pickups[i] > 0) {
      deliveries[i] = deliveries[i] - cap;
      pickups[i] = pickups[i] - cap;
      num_times++;
    }

    num_deliveries = deliveries[i];
    num_pickups = pickups[i];

    answer = answer + 2 * (i + 1) * num_times;
  }

  return answer;
}

console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]));
