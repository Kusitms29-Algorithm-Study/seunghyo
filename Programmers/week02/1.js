//이모티콘 할인행사
//이모티콘 구독 사용자를 최대, 이후 달성 목표는 매출
function solution(users, emoticons) {
  var answer = [];
  let discount = [10, 20, 30, 40];
  for (let user in users) {
    //1. 최소 비용으로 이모티콘 구독을 할 수 있게 함.
    let totalPay = 0;
    let topDiscount = 0;
    //퍼센트 상한 정하기
    for (let j = 0; j < 4; j++) {
      if (users[user][0] < 10) {
        topDiscount = 10;
        break;
      }
      if (discount[j] === users[user][0]) {
        topDiscount = discount[j];
        break;
      }
      if (discount[j] > users[user][0]) {
        topDiscount = discount[j - 1];
        break;
      }
    }
    console.log(topDiscount);
    for (let i = 0; i < emoticons.length; i++) {
      totalPay = (emoticons[i] / 100) * 60;
    }
  }
  return answer;
}

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
);
