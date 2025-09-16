function solution(orders, course) {
  const result = [];
  const menu = [];

  function getCombinations(arr, k) {
    const result = [];
    function combine(start, combo) {
      if (combo.length === k) {
        result.push(combo.slice());
        return;
      }
      for (let i = start; i < arr.length; i++) {
        combo.push(arr[i]);
        combine(i + 1, combo);
        combo.pop();
      }
    }
    combine(0, []);
    return result;
  }

  //menu
  for (let j = 0; j < orders.length; j++) {
    for (let m of orders[j]) {
      if (menu.includes(m)) {
        continue;
      } else {
        menu.push(m);
      }
    }
  }
  menu.sort();

  for (let co of course) {
    let max = 0;
    let maxArr = [];
    const combination = getCombinations(menu, co);
    for (let c = 0; c < combination.length; c++) {
      const comboArr = combination[c];
      let comboCount = 0;
      for (let order of orders) {
        let orderArr = order.split("");
        const isAllIncluded = comboArr.every((v) => orderArr.includes(v));
        if (isAllIncluded) {
          comboCount++;
        }
      }

      //console.log(comboArr, comboCount);
      if (comboCount > max && comboCount >= 2) {
        max = comboCount;
        maxArr = [comboArr.join("")];
      } else if (comboCount === max && comboCount >= 2) {
        max = comboCount;
        maxArr.push(comboArr.join(""));
      }
    }

    for (let m of maxArr) {
      result.push(m);
    }

    console.log("==");
  }
  result.sort();
  return result;
}

//console.log(solution(["AB", "BCD", "BD", "BDE", "AC"], [2]));
console.log(
  solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
);
console.log(
  solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])
);
console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]));
