var climbStairs = function (n) {
  let answer = 0;

  function factorial(a, b) {
    let parent = 1;
    let child = 1;
    for (let j = 1; j <= a + b; j++) {
      parent *= j;
    }
    for (let h = 1; h <= a; h++) {
      child *= h;
    }
    for (let k = 1; k <= b; k++) {
      child *= k;
    }

    return parent / child;
  }

  for (let i = 0; i <= Math.floor(n / 2); i++) {
    let onestep = n - i * 2;
    let twostep = i;

    if (onestep === 0 || twostep === 0) {
      answer++;
      continue;
    }

    answer += factorial(onestep, twostep);
  }
  return answer;
};

console.log(climbStairs(4));

//n = 2  || 1+1 , 2 (총 2가지)
//n = 3  || (1+1)+1, 1+2, (2)+1 (총 3가지)
//n = 4  || 1+1+1+1 , 1+2+1, 2+2, 2+1+1, 1+1+2 (총 5가지)
