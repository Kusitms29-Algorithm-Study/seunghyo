function solution(points, routes) {
  let answer = 0;
  let current = routes.map((route) => [...points[route[0] - 1]]);
  let arrival = routes.map((route) => [...points[route[1] - 1]]);
  let arrivalCheck = false;
  const arrivalMap = Array(current.length).fill(false);
  const countedCoords = new Set();

  function posMapCheck() {
    let posMap = new Map();
    for (let i = 0; i < current.length; i++) {
      if (arrivalMap[i]) continue;
      const key = current[i].join(",");
      if (!posMap.has(key)) posMap.set(key, []);
      posMap.get(key).push(i);
    }

    for (const [key, group] of posMap.entries()) {
      if (group.length > 1 && !countedCoords.has(key)) {
        countedCoords.add(key);
        answer++;
      }
    }
  }

  posMapCheck(); // 초기 충돌 체크

  while (!arrivalCheck) {
    arrivalCheck = true;

    // 이동
    for (let i = 0; i < current.length; i++) {
      if (current[i][0] === arrival[i][0] && current[i][1] === arrival[i][1]) {
        arrivalMap[i] = true;
        continue;
      }

      arrivalCheck = false;

      if (current[i][0] !== arrival[i][0]) {
        current[i][0] += current[i][0] > arrival[i][0] ? -1 : 1;
      } else if (current[i][1] !== arrival[i][1]) {
        current[i][1] += current[i][1] > arrival[i][1] ? -1 : 1;
      }
    }

    posMapCheck(); // 이동 후 충돌 체크
  }

  return answer;
}

// console.log(
//   solution(
//     [
//       [3, 2],
//       [6, 4],
//       [4, 7],
//       [1, 4],
//     ],
//     [
//       [4, 2],
//       [1, 3],
//       [2, 4],
//     ]
//   )
// );

console.log(
  solution(
    [
      [3, 2],
      [6, 4],
      [4, 7],
      [1, 4],
    ],
    [
      [4, 2],
      [1, 3],
      [4, 2],
      [4, 3],
    ]
  )
);
