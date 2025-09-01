function solution(order) {
  let answer = 0;
  let stack = [];
  let current = 1; // main 컨테이너 벨트에서 꺼낼 택배 번호 시작

  for (let i = 0; i < order.length; i++) {
    let box = order[i];

    // 만약 스택 맨 위에 찾는 상자가 있다면 pop
    if (stack.length > 0 && stack[stack.length - 1] === box) {
      stack.pop();
      answer++;
    } else {
      // 그렇지 않으면 현재 번호부터 차례대로 스택에 넣으면서 목표 상자 찾기
      while (current <= order.length && current !== box) {
        stack.push(current);
        current++;
      }
      // 만약 찾았다면 answer 증가, current 증가 (이 박스를 바로 트럭에 싣음)
      if (current === box) {
        answer++;
        current++;
      } else {
        // 못 찾았고 스택에도 없으면 더 이상 진행 못함
        break;
      }
    }
  }

  return answer;
}

//console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([4, 3, 1, 2, 5]));
//console.log(solution([5, 4, 3, 2, 1]));
