//할인 행사
function solution(want, number, discount) {
  let answer = 0;
  let MyBag = new Map();
  for (let w = 0; w < want.length; w++) {
    MyBag.set(want[w], number[w]);
  }
  for (let i = 0; i <= discount.length - 10; i++) {
    if (i === 0) {
      for (let k = 0; k < 10; k++) {
        if (MyBag.has(discount[k])) {
          MyBag.set(discount[k], MyBag.get(discount[k]) - 1);
        }
      }
    } else {
      if (MyBag.has(discount[i - 1])) {
        MyBag.set(discount[i - 1], MyBag.get(discount[i - 1]) + 1);
      }
      if (MyBag.has(discount[i + 9])) {
        MyBag.set(discount[i + 9], MyBag.get(discount[i + 9]) - 1);
      }
    }

    let isAllZero = true;
    MyBag.forEach((value) => {
      if (value !== 0) {
        isAllZero = false;
      }
    });
    if (isAllZero) {
      answer++;
    }
  }
  return answer;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
);
