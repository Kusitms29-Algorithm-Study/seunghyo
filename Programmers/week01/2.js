//비밀 코드 해독
// k개를 뽑는 모든 조합을 생성하는 헬퍼 함수
function getCombinations(arr, k) {
  const results = [];
  function helper(start, combo) {
    if (combo.length === k) {
      results.push(combo.slice());
      return;
    }
    for (let i = start; i < arr.length; i++) {
      combo.push(arr[i]);
      helper(i + 1, combo);
      combo.pop();
    }
  }
  helper(0, []);
  return results;
}

function solution(n, q, ans) {
  let answer = 0;
  const m = ans.length;
  // 1부터 n까지의 숫자를 담은 리스트 생성
  let lst = [];
  for (let i = 1; i <= n; i++) {
    lst.push(i);
  }

  // ans 배열에서 값이 0인 인덱스(하나도 맞추지 못한 케이스)
  let index = [];
  for (let i = 0; i < ans.length; i++) {
    //하나도 맞추지 못한 케이스가 있다면(0일때) 해당 인덱스를 저장
    if (ans[i] === 0) {
      index.push(i);
    }
  }

  // ans[i]가 0인 케이스에 해당하는 q[i]의 숫자들을 lst에서 제거
  for (let i of index) {
    for (let j of q[i]) {
      const idx = lst.indexOf(j);
      if (idx !== -1) {
        lst.splice(idx, 1);
      }
    }
  }

  // lst에서 5개를 뽑는 모든 조합을 생성
  const combs = getCombinations(lst, 5);

  // 각 조합이 모든 조건(q와 ans)을 만족하는지 확인
  for (let c of combs) {
    let valid = true;
    for (let i = 0; i < m; i++) {
      let cnt = 0;
      // q[i]에 있는 각 숫자가 조합 c에 포함되어 있는지 체크
      for (let j of q[i]) {
        if (c.includes(j)) {
          cnt++;
        }
      }
      // 조건에 맞지 않으면 break
      if (cnt !== ans[i]) {
        valid = false;
        break;
      }
    }
    // 모든 조건을 만족하면 answer 증가
    if (valid) {
      answer++;
    }
  }
  console.log(answer);
  return answer;
}

solution(
  10,
  [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [3, 7, 8, 9, 10],
    [2, 5, 7, 9, 10],
    [3, 4, 5, 6, 7],
  ],
  [2, 3, 4, 3, 3]
);
