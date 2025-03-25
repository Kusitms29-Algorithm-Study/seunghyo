//완전범죄
function solution(info, n, m) {
  let sumA = n;
  let sumB = m;

  info.sort((y, x) => {
    if (x[1] !== y[1]) {
      return y[1] - x[1];
    }
    return x[0] - y[0];
  });

  for (let i = 0; i < info.length; i++) {
    if (sumB > info[i][1]) {
      sumB -= info[i][1];
    } else if (sumB <= info[i][1] && sumA > info[i][0]) {
      sumA -= info[i][0];
    } else if (sumA <= info[i][0] && sumB <= info[i][1]) {
      return -1;
    }
  }

  return n - sumA;
}
