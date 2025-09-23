function solution(storey) {
  let stone = 0;

  while (storey > 0) {
    let digit = storey % 10;
    let next = Math.floor(storey / 10);

    if (digit > 5) {
      stone += 10 - digit;
      storey = next + 1;
    } else if (digit < 5) {
      stone += digit;
      storey = next;
    } else {
      if (next % 10 >= 5) {
        stone += 10 - digit;
        storey = next + 1;
      } else {
        stone += digit;
        storey = next;
      }
    }
  }

  return stone;
}

console.log(solution(5554));
console.log(solution(2554));
