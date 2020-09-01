function findFloor(arr, val) {
  const floor = binarySearch(arr, val);
  if (floor == -1) return -1;
  return floor;
}

function binarySearch(arr, val, first = 0, last = arr.length - 1) {
  let middle = Math.floor((first + last) / 2);
  if (first <= last) {
    if (arr[middle] == val || arr[arr.length - 1] <= val) {
      return arr[middle];
    }
    if (arr[middle] > val) {
      if (arr[middle - 1] <= val) {
        return arr[middle - 1];
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

module.exports = findFloor;
