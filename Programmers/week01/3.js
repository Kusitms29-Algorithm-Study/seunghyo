//지게차와 크레인
function solution(storage, requests) {
  // 문자열 배열을 2차원 배열로 변환
  let storageMap = storage.map((str) => str.split(""));
  const rows = storageMap.length;
  const cols = storageMap[0].length;

  // 현재 storageMap에서 외부와 연결된 빈 셀(값 "0")을 계산하는 함수 (BFS)
  function computeAccessibleEmpty() {
    let accessible = Array.from({ length: rows }, () =>
      Array(cols).fill(false)
    );
    let queue = [];

    // 경계에 있는 빈 셀부터 시작
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (
          (i === 0 || i === rows - 1 || j === 0 || j === cols - 1) &&
          storageMap[i][j] === "0"
        ) {
          accessible[i][j] = true;
          queue.push([i, j]);
        }
      }
    }

    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    while (queue.length) {
      const [x, y] = queue.shift();
      for (const [dx, dy] of directions) {
        const nx = x + dx,
          ny = y + dy;
        if (nx >= 0 && nx < rows && ny >= 0 && ny < cols) {
          if (storageMap[nx][ny] === "0" && !accessible[nx][ny]) {
            accessible[nx][ny] = true;
            queue.push([nx, ny]);
          }
        }
      }
    }

    return accessible;
  }

  // 컨테이너가 접근 가능한지 판단하는 함수
  // 접근 가능: 경계에 있거나, 인접한 셀이 빈 셀이면서 그 빈 셀이 외부와 연결되어 있는 경우.
  function isAccessible(rowIdx, colIdx) {
    // 경계에 있는 경우
    if (
      rowIdx === 0 ||
      rowIdx === rows - 1 ||
      colIdx === 0 ||
      colIdx === cols - 1
    ) {
      return true;
    }
    // 외부와 연결된 빈 셀을 계산, 업데이트
    const accessibleEmpty = computeAccessibleEmpty();
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    for (const [dx, dy] of directions) {
      const nx = rowIdx + dx,
        ny = colIdx + dy;
      if (nx >= 0 && nx < rows && ny >= 0 && ny < cols) {
        // 인접 셀이 빈 셀이며 외부와 연결되어 있다면 접근 가능
        if (storageMap[nx][ny] === "0" && accessibleEmpty[nx][ny]) {
          return true;
        }
      }
    }
    return false;
  }

  // 요청 처리
  for (let req of requests) {
    // 지게차 요청: 요청 문자열 길이가 1인 경우 (접근 가능한 컨테이너만 제거)
    if (req.length < 2) {
      let removalCoords = [];
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          if (storageMap[i][j] === req && isAccessible(i, j)) {
            removalCoords.push([i, j]);
          }
        }
      }
      // 한 번에 제거 처리
      for (const [i, j] of removalCoords) {
        storageMap[i][j] = "0";
      }
    }
    // 크레인 요청: 요청 문자열 길이가 2 이상인 경우 (해당 타입의 컨테이너 전부 제거)
    else {
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          if (storageMap[i][j] === req[0]) {
            storageMap[i][j] = "0";
          }
        }
      }
    }
  }

  // 남은 컨테이너 수 계산
  let answer = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (storageMap[i][j] !== "0") {
        answer++;
      }
    }
  }

  //   console.log(storageMap);
  //   console.log(answer);
  return answer;
}

solution(["AZWQY", "CAABX", "BBDDA", "ACACA"], ["A", "BB", "A"]);
