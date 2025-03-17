function solution(nodes, edges) {
  const FORWARD_TREE = 0; // 홀짝트리 인덱스용
  const REVERSE_TREE = 1; // 역홀짝트리 인덱스용
  const answer = [0, 0];
  const n = 1000000;

  // 인접 리스트 초기화: 0번부터 n번까지 빈 배열 생성
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
  // Set이란, 중복과 순서가 없는 집합
  const visited = new Set();

  let yellow = 0;
  let red = 0;

  // 반복 DFS: 스택을 사용하여 연결 요소를 탐색하며 노드 색상 카운트
  function searchGroupIterative(start) {
    const stack = [start];
    console.log(stack);
    while (stack.length > 0) {
      const now = stack.pop();
      if (visited.has(now)) continue;
      visited.add(now);

      // 현재 노드의 색상을 판단:
      // (노드 번호 % 2) 해당 노드가 홀수인지 짝수인지
      // ((인접 리스트 길이 - 1) % 2) 해당 노드의 인접 엣지가 홀수인지 짝수인지
      // 노드가 루트가 아니기 때문에 부모 노드의 개수인(1개)를 마이너스 해줌.
      const isYellowWhenNotRoot = now % 2 === (adj[now].length - 1) % 2;
      if (isYellowWhenNotRoot) {
        yellow++;
      } else {
        red++;
      }

      // 인접 노드들 중 방문하지 않은 노드들을 스택에 추가
      for (const next of adj[now]) {
        if (!visited.has(next)) {
          stack.push(next);
        }
      }
    }
  }

  // 각 nodes 배열의 노드를 루트로 하여 해당 그룹 탐색
  for (const root of nodes) {
    // 이미 방문한 노드면 해당 연결 요소는 루트 검사에서 이미 처리되었으므로 건너뜀
    if (visited.has(root)) continue;

    // 그룹별 색상 카운터 초기화
    yellow = 0;
    red = 0;
    searchGroupIterative(root);

    // 조건에 따른 트리 유형 판별
    // 노란색이 1개인 그룹이면 역홀짝트리
    if (yellow === 1) {
      answer[REVERSE_TREE]++;
    }
    // 빨간색이 1개인 그룹이면 홀짝트리
    if (red === 1) {
      answer[FORWARD_TREE]++;
    }
  }

  return answer;
}

solution(
  [9, 15, 14, 7, 6, 1, 2, 4, 5, 11, 8, 10],
  [
    [5, 14],
    [1, 4],
    [9, 11],
    [2, 15],
    [2, 5],
    [9, 7],
    [8, 1],
    [6, 4],
  ]
);
