function solution(scores) {
  const n = scores.length;
  const wanho = scores[0];
  let filtered = [];

  // 1. 인센티브 받을 자격(두 점수 다 높은 사원 존재 여부) 판별
  scores.sort((a, b) => (b[0] === a[0] ? a[1] - b[1] : b[0] - a[0]));
  let maxPeer = 0;
  for (let score of scores) {
    if (score[1] < maxPeer) continue; // 현재 사원, 인센티브 대상 아님
    if (score === wanho) filtered.push(score);
    else filtered.push(score);
    maxPeer = Math.max(maxPeer, score[1]);
  }

  // 완호보다 두 점수 모두 높은 사원이 한 명이라도 있으면 -1 반환
  for (let i = 1; i < n; ++i) {
    if (scores[i][0] > wanho[0] && scores[i][1] > wanho[1]) return -1;
  }

  // 2. 인센티브 대상자 점수 합으로 내림차순 정렬, 동석차 처리
  const incentiveCandidates = filtered.map((s) => s[0] + s[1]);
  incentiveCandidates.sort((a, b) => b - a);

  const wanhoTotal = wanho[0] + wanho[1];
  let rank = 1,
    i = 0;
  while (i < incentiveCandidates.length) {
    const current = incentiveCandidates[i];
    if (current === wanhoTotal) break;
    let count = 0;
    while (incentiveCandidates[i + count] === current) count++;
    rank += count;
    i += count;
  }
  return rank;
}

console.log(
  solution([
    [2, 2],
    [1, 4],
    [3, 2],
    [3, 2],
    [2, 1],
  ])
);
