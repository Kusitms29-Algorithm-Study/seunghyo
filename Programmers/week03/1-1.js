//완전범죄 - dp
function solution(info, n, m) {
  const memo = new Map();
  function dp(i, n, m) {
    if (n <= 0 || m <= 0) return -1;
    if (i == info.length) return n;

    const key = `${i}-${n}-${m}`;
    if (memo.has(key)) return memo.get(key);

    let optionA = dp(i + 1, n - info[i][0], m);
    let optionB = dp(i + 1, n, m - info[i][1]);

    let result = Math.max(optionA, optionB);
    memo.set(key, result);
    return result;
  }
  const maxA = dp(0, n, m);
  if (maxA <= 0) {
    return -1;
  } else {
    return n - maxA;
  }
}
