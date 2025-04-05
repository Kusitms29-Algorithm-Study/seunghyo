//충돌위험 찾기
function solution(points, routes) {
  let answer = 0;
  let current = routes.map((route) => [...points[route[0] - 1]]);
  let arrival = routes.map((route) => [...points[route[1] - 1]]);
  let danger = Array(routes.length).fill(false);
  let arrivalCheck = false;

  while (!arrivalCheck) {
    danger = Array(routes.length).fill(false);
    for (let i = 0; i < current.length; i++) {
      if (current[i][0] > arrival[i][0]) {
        current[i][0] = current[i][0] - 1;
      } else if (current[i][0] < arrival[i][0]) {
        current[i][0] = current[i][0] + 1;
      } else if (current[i][1] > arrival[i][1]) {
        current[i][1] = current[i][1] - 1;
      } else if (current[i][1] < arrival[i][1]) {
        current[i][1] = current[i][1] + 1;
      }

      arrivalCheck = true;
      for (let i = 0; i < current.length; i++) {
        if (
          current[i][0] !== arrival[i][0] ||
          current[i][1] !== arrival[i][1]
        ) {
          arrivalCheck = false;
        }
      }
    }

    console.log(current, arrival);
    console.log(danger);
  }

  return answer;
}

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
      [2, 4],
    ]
  )
);

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
