//Keys and Rooms
var canVisitAllRooms = function (rooms) {
  let arr = Array.from({ length: rooms.length }, () => false);

  function unlockRoom(keyIndex) {
    if (arr[keyIndex]) {
      return;
    }
    arr[keyIndex] = true;

    if (rooms[keyIndex].length <= 0) return;
    for (let i = 0; i < rooms[keyIndex].length; i++) {
      let newKey = rooms[keyIndex][i];
      if (!arr[newKey]) {
        unlockRoom(newKey);
      }
    }
  }

  unlockRoom(0);

  for (let unlock of arr) {
    if (!unlock) {
      return false;
    }
  }

  return true;
};

console.log(canVisitAllRooms([[1], [2], [3], []]));
console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]));
