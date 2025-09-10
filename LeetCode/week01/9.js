var peopleAwareOfSecret = function (n, delay, forget) {
  const MOD = 1e9 + 7;
  // dp[i]: i번째 날 새로 비밀을 알게 된 사람 수
  let dp = new Array(n).fill(0);
  dp[0] = 1;
  let shareSum = 0; // 아직 비밀을 공유할 수 있는 사람 수 누적
  let answer = 0;

  for (let day = 1; day < n; day++) {
    // 사람들이 비밀 공유 가능한 기간 시작하는 날의 새로 알게 된 사람 추가
    if (day - delay >= 0) {
      shareSum = (shareSum + dp[day - delay]) % MOD;
    }
    // 사람들이 비밀 잊는 날이 지나면 공유 가능 인원에서 제외
    if (day - forget >= 0) {
      shareSum = (shareSum - dp[day - forget] + MOD) % MOD;
    }

    dp[day] = shareSum;
  }

  // 마지막 날까지 비밀을 잊지 않은 사람의 수 합산
  for (let day = n - forget; day < n; day++) {
    if (day >= 0) {
      answer = (answer + dp[day]) % MOD;
    }
  }

  return answer;
};

console.log(peopleAwareOfSecret(6, 2, 4));
