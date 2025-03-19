//이모티콘 할인행사
//이모티콘 구독 사용자를 최대, 이후 달성 목표는 매출

//가능한 모든 순열을 리턴하는 함수
function getPermutation(arr, k) {
  if (k === 0) {
    return [[]];
  }
  const result = [];
  const prev = getPermutation(arr, k - 1);
  for (let p of prev) {
    for (let a of arr) {
      result.push([...p, a]);
    }
  }
  return result;
}

function solution(users, emoticons) {
  var answer = [];
  let discountArray = getPermutation([10, 20, 30, 40], emoticons.length); //가능한 할인률 모든 순열
  let maxSubscriber = 0;
  let maxTotalPay = 0;
  let userPay = 0;
  let subscriber = 0;
  let totalPay = 0;

  for (let i = 0; i < discountArray.length; i++) {
    subscriber = 0;
    totalPay = 0;
    for (let user of users) {
      userPay = 0;
      for (let j = 0; j < emoticons.length; j++) {
        if (discountArray[i][j] >= user[0]) {
          userPay =
            userPay + (emoticons[j] / 100) * (100 - discountArray[i][j]);
        }
        if (userPay >= user[1]) {
          userPay = 0;
          subscriber++;
          break;
        }
        if (j === emoticons.length - 1 && userPay < user[1]) {
          totalPay += userPay;
        }
      }
    }

    if (subscriber > maxSubscriber) {
      maxSubscriber = subscriber;
      maxTotalPay = totalPay;
    } else if (maxSubscriber === subscriber && maxTotalPay < totalPay) {
      maxTotalPay = totalPay;
    }
  }

  answer.push(maxSubscriber);
  answer.push(maxTotalPay);

  return answer;
}

// console.log(
//   solution(
//     [
//       [40, 10000],
//       [25, 10000],
//     ],
//     [7000, 9000]
//   )
// );

console.log(
  solution(
    [
      [40, 2900],
      [23, 10000],
      [11, 5200],
      [5, 5900],
      [40, 3100],
      [27, 9200],
      [32, 6900],
    ],
    [1300, 1500, 1600, 4900]
  )
);
