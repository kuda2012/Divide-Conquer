function findRotatedIndex(arr, num) {
  let checkTop = checkTopHalf(arr);
  let checkBottom = checkBottomHalf(arr);
  var pivot;
  if (checkBottom != -1) {
    pivot = checkBottom;
  }
  if (checkTop != -1) {
    pivot = checkTop;
  }
  if (pivot > 0 && num >= arr[0] && num <= arr[pivot - 1]) {
    return binarySearch(arr, num, 0, pivot - 1);
  } else {
    return binarySearch(arr, num, pivot, arr.length - 1);
  }
}
function binarySearch(arr, val, first = 0, last = arr.length - 1) {
  let middle = Math.floor((first + last) / 2);
  if (first <= last) {
    if (arr[middle] == val) {
      return middle;
    }
    if (arr[middle] > val) {
      if (arr[middle - 1] <= val) {
        return middle - 1;
      }
      last = middle - 1;
      return binarySearch(arr, val, first, last);
    }
    first = middle + 1;
    return binarySearch(arr, val, first, last);
  } else {
    return -1;
  }
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

module.exports = findRotatedIndex;
