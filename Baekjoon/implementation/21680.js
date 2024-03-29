// 비어있는 칸 중에서 좋아하는 학생이 인접한 칸에 가장 많은 칸으로 자리를 정한다.
// 1을 만족하는 칸이 여러 개이면, 인접한 칸 중에서 비어있는 칸이 가장 많은 칸으로 자리를 정한다.
// 2를 만족하는 칸도 여러 개인 경우에는 행의 번호가 가장 작은 칸으로, 그러한 칸도 여러 개이면 열의 번호가 가장 작은 칸으로 자리를 정한다.

//action : 빈자리를 찾고, 빈자리를 돌면서 좋아하는 학생이 앉은 근접자리를 찾고, maxCountKey를 이용해 좋아하는 학생들이 가장 많은 근접 자리(조건1)를 찾는다. 그 뒤 해당되는 사항에 따라 조건2, 조건3을 수행한다.
//satisfaction: 만족도를 계산한다.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]); // 자리 (n열 n행)
const studentsNumber = N * N; // 학생수 즉 자리수
const classRoom = new Array(N).fill(0).map(() => new Array(N).fill(0));
//3x3 배열
const list = new Map();
//Map 객체는 키-값 쌍 Object

function makeList() {
  for (let index = 1; index <= studentsNumber; index++) {
    const arr = input[index]
      .trim()
      .split(" ")
      .map((x) => +x);
    list.set(arr[0], arr.slice(1));

    // 예제 1일시 list
    // Map(9) {
    //   4 => [ 2, 5, 1, 7 ],
    //   2 => [ 1, 9, 4, 5 ],
    //   5 => [ 8, 1, 4, 3 ],
    //   1 => [ 2, 9, 3, 4 ],
    //   7 => [ 2, 3, 4, 8 ],
    //   9 => [ 8, 4, 5, 7 ],
    //   6 => [ 5, 2, 3, 4 ],
    //   8 => [ 4, 9, 2, 1 ],
    //   3 => [ 9, 2, 1, 4 ]
    // }
  }
}

action();
satisfaction(); // 만족도 구하기

function action() {
  makeList(); // list에 input을 정의한다.
  list.forEach((value, key) => {
    const emptySpaceArr = findeEmptySpace();
    //빈자리를 찾아 emptySpaceArr에 정의
    let emptySpaceAndFavoriteCount = new Map(); // 자리번호 - 우선순위 map
    //빈자리에 우선순위를 매긴다!
    for (let index = 0; index < emptySpaceArr.length; index++) {
      //빈자리를 돌면서
      //if N = 3, 첫 학생은 9번, 뒷학생은 8번...

      const favoriteNumber = findNearFavorite(emptySpaceArr[index], value);

      //가장 좋아하는 자리를 찾는다
      if (emptySpaceAndFavoriteCount.has(favoriteNumber)) {
        emptySpaceAndFavoriteCount.set(favoriteNumber, [
          ...emptySpaceAndFavoriteCount.get(favoriteNumber),
          emptySpaceArr[index],
        ]);
      } else {
        emptySpaceAndFavoriteCount.set(favoriteNumber, [emptySpaceArr[index]]);
      }
    }

    let sortMap = [...emptySpaceAndFavoriteCount];
    emptySpaceAndFavoriteCount = new Map(sortMap.sort().reverse());
    //array to map
    //     [ [ 1, [ [Array] ] ] ]
    // Map(1) { 1 => [ [ 2, 2 ] ] }

    //친구들이 많이 앉아있는 순대로 정렬
    const maxCountKey = [...emptySpaceAndFavoriteCount.keys()][0];
    const maxCountValueNumber =
      emptySpaceAndFavoriteCount.get(maxCountKey).length;
    if (maxCountValueNumber > 1) {
      //친구들이 많이 앉아있는 자리가 여러 군데라면
      //조건 2번 수행
      const candidatesArr = emptySpaceAndFavoriteCount.get(maxCountKey);
      const condition2PassArr = findNearEmptySpace(candidatesArr);
      if (condition2PassArr.length > 1) {
        // 조건 2 또한 만족한다면, 조건3, 열의 번호가 가장 작은 칸으로 자리를 정한다.
        const studentLocation = sorter(condition2PassArr);
        takeSeat(key, studentLocation);
      } else {
        const studentLocation = condition2PassArr[0];
        takeSeat(key, studentLocation);
      }
    } else {
      const studentLocation = emptySpaceAndFavoriteCount.get(maxCountKey)[0];
      takeSeat(key, studentLocation);
    }
  });
}

function findeEmptySpace() {
  //빈자리들을 뽑아 출력해주는 함수
  const emptySpace = [];
  for (let rowIndex = 0; rowIndex < N; rowIndex++) {
    for (let columnIndex = 0; columnIndex < N; columnIndex++) {
      if (classRoom[rowIndex][columnIndex] === 0) {
        emptySpace.push([rowIndex, columnIndex]);
      }
    }
  }
  return emptySpace;
}

function findNearFavorite(emptySpaceIndex, favoriteArr) {
  //자리들을 돌면서 favorite count 진행, 각 자리들에 선호하는 학생이 있다면 점수를 추가한다.
  // favoriteArr는 학생들이 좋아하는 친구들의 목록!

  const rowIndex = emptySpaceIndex[0];
  const columnIndex = emptySpaceIndex[1];
  let favoriteCount = 0;
  //자리의 상하좌우에 좋아하는 학생이 있을 시 favorite count ++
  for (let index = 0; index < favoriteArr.length; index++) {
    if (
      rowIndex - 1 >= 0 &&
      favoriteArr[index] === classRoom[rowIndex - 1][columnIndex]
    ) {
      favoriteCount++;
    }

    if (
      rowIndex + 1 < N &&
      favoriteArr[index] === classRoom[rowIndex + 1][columnIndex]
    ) {
      favoriteCount++;
    }

    if (
      columnIndex + 1 < N &&
      favoriteArr[index] === classRoom[rowIndex][columnIndex + 1]
    ) {
      favoriteCount++;
    }

    if (
      columnIndex - 1 >= 0 &&
      favoriteArr[index] === classRoom[rowIndex][columnIndex - 1]
    ) {
      favoriteCount++;
    }
  }

  return favoriteCount;
}

function findNearEmptySpace(candidatesArr) {
  let candidatesMap = new Map();
  //후보군에서 count
  let emptySpaceCount = 0;
  for (let index = 0; index < candidatesArr.length; index++) {
    const rowIndex = candidatesArr[index][0];
    const columnIndex = candidatesArr[index][1];

    //인접한 4방향(위, 아래, 왼쪽 , 오른쪽)에서 emptyspacecount
    if (rowIndex - 1 >= 0 && classRoom[rowIndex - 1][columnIndex] === 0) {
      emptySpaceCount++;
    }

    if (rowIndex + 1 < N && classRoom[rowIndex + 1][columnIndex] === 0) {
      emptySpaceCount++;
    }

    if (columnIndex + 1 < N && classRoom[rowIndex][columnIndex + 1] === 0) {
      emptySpaceCount++;
    }

    if (columnIndex - 1 >= 0 && classRoom[rowIndex][columnIndex - 1] === 0) {
      emptySpaceCount++;
    }
    if (candidatesMap.has(emptySpaceCount)) {
      candidatesMap.set(emptySpaceCount, [
        ...candidatesMap.get(emptySpaceCount),
        candidatesArr[index],
      ]);
    } else {
      candidatesMap.set(emptySpaceCount, [candidatesArr[index]]);
    }
    emptySpaceCount = 0;
  }

  let sortMap = [...candidatesMap];
  candidatesMap = new Map(sortMap.sort().reverse());
  const maxCountKey = [...candidatesMap.keys()][0];
  return candidatesMap.get(maxCountKey);
}

function sorter(candidateArr) {
  const sortArr = candidateArr.sort((a, b) => a[0] - b[0]);
  return sortArr[0];
}

function takeSeat(student, location) {
  const rowIndex = location[0];
  const columnIndex = location[1];
  classRoom[rowIndex][columnIndex] = student;
}

function satisfaction() {
  //인접한 친구들 중 좋아하는 학생의 count 에 따라서 만족도가 달라짐, 1, 10, 100, 1000순.
  let result = 0;
  for (let rowIndex = 0; rowIndex < N; rowIndex++) {
    for (let columnIndex = 0; columnIndex < N; columnIndex++) {
      const target = classRoom[rowIndex][columnIndex];
      let count = 0;
      const favoriteArr = list.get(target);

      if (
        rowIndex - 1 >= 0 &&
        favoriteArr.includes(classRoom[rowIndex - 1][columnIndex])
      ) {
        count++;
      }

      if (
        rowIndex + 1 < N &&
        favoriteArr.includes(classRoom[rowIndex + 1][columnIndex])
      ) {
        count++;
      }

      if (
        columnIndex - 1 >= 0 &&
        favoriteArr.includes(classRoom[rowIndex][columnIndex - 1])
      ) {
        count++;
      }

      if (
        columnIndex + 1 < N &&
        favoriteArr.includes(classRoom[rowIndex][columnIndex + 1])
      ) {
        count++;
      }
      if (count === 0) {
        result += 0;
      }
      if (count === 1) {
        result += 1;
      }
      if (count === 2) {
        result += 10;
      }
      if (count === 3) {
        result += 100;
      }
      if (count === 4) {
        result += 1000;
      }
      count = 0;
    }
  }
  console.log(result);
}
