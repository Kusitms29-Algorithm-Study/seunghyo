function solution(p) {
  if (p === "") return "";
  function checkRightStr(str) {
    let left = 0;
    let right = 0;
    for (let s of str) {
      if (s === "(") {
        left++;
      } else {
        right++;
        if (left - right < 0) return false;
      }
    }
    if (right === left) {
      return true;
    }

    return false;
  }

  function dividedTwoStr(str) {
    let left = 0;
    let right = 0;
    let uStr = "";
    let vStr = "";

    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") {
        left++;
      } else {
        right++;
      }
      if (right > left && right !== 0 && left !== 0) {
        vStr = str.slice(i, str.length + 1);
        break;
      }
      uStr += p[i];
    }

    return [uStr, vStr];
  }

  function convertToRightStr(u, v) {
    if (u === "") return "";
    const [v1, v2] = dividedTwoStr(v);
    v = convertToRightStr(v1, v2);

    if (!checkRightStr(u)) {
      let newStr = "(";
      newStr += v;
      newStr += ")";
      u = u.slice(1, u.length - 2);

      for (let s of u) {
        if (s === "(") {
          newStr += ")";
        } else {
          newStr += "(";
        }
      }
    }

    return u + v;
  }

  const [a, b] = dividedTwoStr(p);
  return convertToRightStr(a, b);
}

console.log(solution(""));
console.log(solution("(()())()"));
console.log(solution(")("));
console.log(solution("()))((()"));
