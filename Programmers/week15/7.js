function isRightStr(s) {
  let leftArr = ["(", "{", "["];
  let rightArr = [")", "}", "]"];

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    for (let l = 0; l < 3; l++) {
      if (s[i] === leftArr[l]) {
        stack.push(s[i]);
        break;
      }
    }

    if (stack.length < 0) {
      return false;
    }

    for (let r = 0; r < 3; r++) {
      if (s[i] === rightArr[r]) {
        let part = stack.pop();
        if (part === leftArr[r]) {
          break;
        } else {
          return false;
        }
      }
    }
  }

  if (stack.length !== 0) return false;

  return true;
}

function solution(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (isRightStr(s.slice(i + 1, s.length) + s.slice(0, i + 1))) {
      count++;
    }
  }
  return count;
}

// console.log(solution("[](){}"));
// console.log(solution("}]()[{"));
// console.log(solution("{(})"));
console.log(isRightStr("(){{"));
