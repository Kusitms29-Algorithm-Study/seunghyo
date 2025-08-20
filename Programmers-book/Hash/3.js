//전화번호 목록
function solution(phone_book) {
  phone_book.sort(); // 사전순 정렬

  for (let i = 0; i < phone_book.length - 1; i++) {
    // 현재 번호가 다음 번호의 접두어인지 확인
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }
  return true;
}

console.log(solution(["119", "97674223", "1195524421"]));
console.log(solution(["123", "456", "789"]));
console.log(solution(["12", "123", "1235", "567", "88"]));
