function solution(str1, str2) {
  let isAlpha = /[A-Z]/;
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();

  arr1 = makeArr(str1);
  arr2 = makeArr(str2);

  function makeArr(str) {
    let arr = [];
    for (let i = 1; i < str.length; i++) {
      arr.push(str[i - 1] + str[i]);
    }

    for (let j = 0; j < arr.length; j++) {
      if (isAlpha.test(arr[j][0]) && isAlpha.test(arr[j][1])) {
        continue;
      } else {
        arr.splice(j, 1);
        j--;
      }
    }

    return arr;
  }

  if (arr1.length === 0 && arr2.length === 0) {
    return 65536;
  }

  const countMap1 = new Map();
  const countMap2 = new Map();

  for (const item of arr1) {
    countMap1.set(item, (countMap1.get(item) || 0) + 1);
  }

  for (const item of arr2) {
    countMap2.set(item, (countMap2.get(item) || 0) + 1);
  }

  let union = 0;
  let intersect = 0;

  for (const [key, count1] of countMap1.entries()) {
    if (countMap2.has(key)) {
      const count2 = countMap2.get(key);
      union += Math.max(count1, count2);
      intersect += Math.min(count1, count2);
    } else {
      union += count1;
    }
  }

  for (const [key, count2] of countMap2.entries()) {
    if (!countMap1.has(key)) {
      union += count2;
    }
  }

  //console.log(arr1, arr2);
  //console.log(intersect, union);

  return Math.floor((intersect / union) * 65536);
}

// console.log(solution("FRANCE", "french"));
// console.log(solution("handshake", "shake hands"));
// console.log(solution("aa1+aa2", "AAAA12"));
// console.log(solution("E=M*C^2", "e=m*c^2"));
console.log(solution("ABABAB", "BABABA"));
