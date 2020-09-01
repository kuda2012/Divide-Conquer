function countZeroes(arr) {
  let firstZero = findFirst(arr);
  if (firstZero == -1) return 0;

  return arr.length - firstZero;

  function findFirst(arr, left = 0, right = arr.length) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] < 1) {
      right = middle - 1;
      if (middle == 0) {
        return middle;
      }
      return findFirst(arr, left, right);
    } else if (arr[middle] > 0) {
      left = middle + 1;
      if (arr[middle] > 0 && arr[middle + 1] == 0) {
        return middle + 1;
      } else if (middle == arr.length - 1) {
        return -1;
      }
      return findFirst(arr, left, right);
    }

  }
}

module.exports = countZeroes;
