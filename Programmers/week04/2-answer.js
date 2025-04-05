function solution(points, routes) {
  let answer = 0;
  const n = routes.length;

  // 각 로봇에 대해 현재 좌표, 현재 진행중인 목적지 인덱스, 목적지 좌표, 경로 전체, 활성 여부를 저장
  let robots = routes.map((route) => {
    const pos = [...points[route[0] - 1]]; // 시작 좌표
    const destIndex = 1; // 다음에 갈 포인트의 인덱스 (0-based가 아닌, route 내 위치)
    const destination = route.length > 1 ? [...points[route[1] - 1]] : null;
    return { pos, destIndex, destination, route, active: true };
  });

  // 현재 시간대의 충돌(로봇이 같은 좌표에 2대 이상 모임)을 확인하여 answer에 더함
  function checkCollision() {
    const posCount = new Map();
    for (const robot of robots) {
      if (!robot.active) continue;
      const key = robot.pos.join(",");
      posCount.set(key, (posCount.get(key) || 0) + 1);
    }
    for (const count of posCount.values()) {
      if (count >= 2) answer++;
    }
  }

  // 0초 시점에도 충돌 체크 (문제에서 시작 시점도 고려)
  checkCollision();

  // 모든 로봇이 운송을 마칠 때까지 시뮬레이션
  while (robots.some((robot) => robot.active)) {
    // 각 로봇에 대해 현재 위치가 목적지와 같다면 다음 구간으로 넘어가도록 업데이트
    for (const robot of robots) {
      if (!robot.active) continue;
      // 현재 목적지에 도착했으면 다음 목적지를 갱신 (여러 구간 연달아 도착할 수도 있음)
      while (
        robot.destination &&
        robot.pos[0] === robot.destination[0] &&
        robot.pos[1] === robot.destination[1]
      ) {
        // 현재 segment가 마지막이면 로봇 운송 완료
        if (robot.destIndex === robot.route.length - 1) {
          robot.active = false;
          break;
        } else {
          // 다음 구간으로 업데이트
          robot.destIndex++;
          robot.destination = [...points[robot.route[robot.destIndex] - 1]];
        }
      }
    }

    // 아직 목적지에 도달하지 않은 각 로봇은 한 칸씩 이동 (r 좌표 우선)
    for (const robot of robots) {
      if (!robot.active || !robot.destination) continue;
      // r 좌표가 다르면 r 좌표 방향으로 1 이동
      if (robot.pos[0] !== robot.destination[0]) {
        robot.pos[0] += robot.pos[0] < robot.destination[0] ? 1 : -1;
      }
      // r 좌표가 같으면 c 좌표 방향으로 1 이동
      else if (robot.pos[1] !== robot.destination[1]) {
        robot.pos[1] += robot.pos[1] < robot.destination[1] ? 1 : -1;
      }
    }

    // 이동 후 해당 시간대 충돌 상황 체크
    checkCollision();
  }

  return answer;
}
