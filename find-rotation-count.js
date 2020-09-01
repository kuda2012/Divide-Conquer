function findRotationCount(arr) {
  let checkTop = checkTopHalf(arr);
  let checkBottom = checkBottomHalf(arr);
  if (checkBottom != -1) {
    return checkBottom;
  }
  if (checkTop != -1) {
    return checkTop;
  }
  return "No rotation has happened";
}

function checkTopHalf(arr, first = 0, last = arr.length - 1) {
  let middle = Math.floor((first + last) / 2);

  if (middle != arr.length - 1) {
    if (arr[middle] < arr[middle + 1]) {
      first = middle + 1;
      return checkTopHalf(arr, first, last);
    } else {
      return middle + 1;
    }
  } else {
    return -1;
  }
}

function checkBottomHalf(arr, first = 0, last = arr.length - 1) {
  let middle = Math.floor((first + last) / 2);

  if (middle >= 0) {
    if (arr[middle] < arr[middle + 1]) {
      last = middle - 1;
      return checkBottomHalf(arr, first, last);
    } else {
      return middle;
    }
  } else {
    return -1;
  }
}

module.exports = findRotationCount;
