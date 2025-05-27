//석유 시추
function solution(land) {
  let n = land.length; //세로 길이
  let m = land[0].length; //가로 길이

  // 방문 여부 체크를 위한 2차원 배열
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  // 덩어리 정보를 저장할 배열: 각 덩어리는 { size: 덩어리크기, cols: 열 번호가 저장된 Set } 형식
  const clusters = [];

  // 상, 하, 좌, 우 방향
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  // DFS 함수: (x, y) 위치에서 시작해서 하나의 덩어리를 구함.
  function dfs(x, y, cluster) {
    visited[x][y] = true;
    cluster.size++; // 덩어리 크기 1 증가
    cluster.cols.add(y); // 현재 위치의 열 번호 추가

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      // 범위 내이며, 아직 방문하지 않은 석유인 경우
      if (
        nx >= 0 &&
        nx < n && //세로 n 보다 작을때
        ny >= 0 &&
        ny < m && //가로 m보다 작을때
        land[nx][ny] === 1 && //현재 채워진 것이라면
        !visited[nx][ny] //그리고 방문하지 않았다면 다시 dfs 실행
      ) {
        dfs(nx, ny, cluster);
      }
    }
  }

  // 전체 땅을 순회하면서 석유 덩어리를 찾는다.
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (land[i][j] === 1 && !visited[i][j]) {
        // 새로운 덩어리 시작
        const cluster = { size: 0, cols: new Set() };
        dfs(i, j, cluster);
        clusters.push(cluster);
      }
    }
  }

  // 각 열에서 시추관을 뚫었을 때 추출 가능한 석유량 계산:
  // 각 덩어리가 한 열에 한 번만 계산되도록 한다.
  const columnSums = Array(m).fill(0); //세로 줄 하나씩(열마다) 실행하도록
  for (const cluster of clusters) {
    for (const col of cluster.cols) {
      columnSums[col] += cluster.size;
    }
  }

  // 최대 석유량 구하기
  const answer = Math.max(...columnSums);
  return answer;
}

console.log(
  solution([
    [1, 0, 1, 0, 1, 1],
    [1, 0, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 0],
    [1, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1],
  ])
);
