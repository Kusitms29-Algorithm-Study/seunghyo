function solution(nodes, edges) {
  // 상수 정의
  const FORWARD_TREE = 0; // 홀짝트리
  const REVERSE_TREE = 1; // 역홀짝트리

  // 결과를 담을 배열 (인덱스 0: 홀짝트리, 1: 역홀짝트리)
  const answer = [0, 0];
  const n = 1000000;

  // 인접 리스트 초기화 (전체 노드 수는 1,000,000으로 가정)
  const adj = new Array(n + 1);
  for (let i = 0; i <= n; i++) {
    adj[i] = [];
  }

  // 간선 정보를 바탕으로 무방향 그래프 구성
  for (const edge of edges) {
    const [u, v] = edge;
    adj[u].push(v);
    adj[v].push(u);
  }

  // 방문 여부 체크를 위한 Set
  const visited = new Set();

  // 각 DFS 호출 시 해당 그룹의 노드 색상 개수를 세기 위한 변수
  let yellow = 0;
  let red = 0;

  // DFS를 통해 현재 노드가 속한 그룹의 색상을 카운트하는 함수
  function searchGroup(now) {
    if (visited.has(now)) {
      return;
    }
    visited.add(now);

    // 현재 노드의 색상을 판단하는 조건:
    // (노드 번호 % 2) 와 ((인접 리스트 길이 - 1) % 2)를 비교
    const isYellowWhenNotRoot = now % 2 === (adj[now].length - 1) % 2;
    if (isYellowWhenNotRoot) {
      yellow++;
    } else {
      red++;
    }

    // 인접한 모든 노드에 대해 재귀 호출
    for (const next of adj[now]) {
      searchGroup(next);
    }
  }

  // nodes 배열에 있는 각 노드를 루트로 DFS 실행
  for (const root of nodes) {
    // DFS 시작 전 색상 카운터 초기화
    yellow = 0;
    red = 0;
    searchGroup(root);

    // 조건에 따라 트리 유형 판별
    // 노란색 노드가 1개이면 역홀짝트리
    if (yellow === 1) {
      answer[REVERSE_TREE]++;
    }
    // 빨간색 노드가 1개이면 홀짝트리
    if (red === 1) {
      answer[FORWARD_TREE]++;
    }
  }

  return answer;
}

solution(
  [11, 9, 3, 2, 4, 6],
  [
    [9, 11],
    [2, 3],
    [6, 3],
    [3, 4],
  ]
);
