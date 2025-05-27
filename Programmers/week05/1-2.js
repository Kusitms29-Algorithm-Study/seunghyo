function solution(land) {
  const n = land.length; // 세로 길이
  const m = land[0].length; // 가로 길이

  // 방문 여부 체크를 위한 2차원 배열 초기화
  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  // 덩어리 정보를 저장할 배열: 각 덩어리는 { size: 덩어리크기, cols: 해당 덩어리가 포함된 열들이 저장된 Set } 구조
  const clusters = [];

  // 상, 하, 좌, 우 방향
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  // 반복 DFS를 이용하여 덩어리(클러스터)를 찾아내기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (land[i][j] === 1 && !visited[i][j]) {
        // 새로운 덩어리 발견: 스택을 이용한 DFS 시작
        let stack = [[i, j]];
        let size = 0;
        const cols = new Set(); // 덩어리가 포함된 열 번호 저장

        while (stack.length > 0) {
          const [x, y] = stack.pop();
          if (visited[x][y]) continue;
          visited[x][y] = true;
          size++;
          cols.add(y);

          // 상, 하, 좌, 우 인접 칸 검사
          for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
              if (land[nx][ny] === 1 && !visited[nx][ny]) {
                stack.push([nx, ny]);
              }
            }
          }
        }

        clusters.push({ size, cols });
      }
    }
  }

  // 각 열마다 해당 열에 존재하는 덩어리들의 석유 크기를 중복 없이 합산
  const colSums = Array(m).fill(0);
  for (const cluster of clusters) {
    for (const col of cluster.cols) {
      colSums[col] += cluster.size;
    }
  }

  // 모든 열 중 최대 값을 반환 (해당 열에 설치한 시추관으로 추출 가능한 최대 석유량)
  return Math.max(...colSums);
}

// 예제 테스트
console.log(
  solution([
    [0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 1, 1],
  ])
);
