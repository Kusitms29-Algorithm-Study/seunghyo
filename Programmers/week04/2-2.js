//충돌 위험 찾기
function solution(points, routes) {
  let answer = 0;
  //route 배열 길이 만큼 이동점들이 있다.
  let current = routes.map((route) => [...points[route[0] - 1]]); //점들 시작점
  let arrival = routes.map((route) => [...points[route[1] - 1]]); //점들 도착점
  let arrivalMap = Array(current.length).fill(false); //도착한 점들 구분
  let arrivalIsTrue = false;

  function dangerCheck() {
    let dangerMap = new Map();
    for (let i = 0; i < current.length; i++) {
      if (arrivalMap[i]) continue;
      const key = current[i].join(",");
      if (!dangerMap.has(key)) dangerMap.set(key, []);
      dangerMap.get(key).push(i);
    }

    for (const [key, group] of dangerMap.entries()) {
      if (group.length >= 2) {
        answer++;
      }
    }
  }

  dangerCheck();

  while (!arrivalIsTrue) {
    for (let i = 0; i < current.length; i++) {
      if (JSON.stringify(current[i]) === JSON.stringify(arrival[i])) {
        arrivalMap[i] = true;
        continue;
      }

      //좌표 이동
      if (current[i][0] > arrival[i][0]) {
        current[i][0] = current[i][0] - 1;
      } else if (current[i][0] < arrival[i][0]) {
        current[i][0] = current[i][0] + 1;
      } else if (current[i][1] > arrival[i][1]) {
        current[i][1] = current[i][1] - 1;
      } else if (current[i][1] < arrival[i][1]) {
        current[i][1] = current[i][1] + 1;
      }
    }

    dangerCheck();
    arrivalIsTrue = true;
    for (let i = 0; i < current.length; i++) {
      if (JSON.stringify(current[i]) !== JSON.stringify(arrival[i])) {
        arrivalIsTrue = false;
        break;
      }
    }
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
