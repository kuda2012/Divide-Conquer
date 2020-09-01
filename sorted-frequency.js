function sortedFrequency(arr, val) {
  let lowestOccuringVal = lowestOccurence(arr, val);
  if (lowestOccuringVal == -1) return -1;
  let highestOccuringVal = highestOccurence(arr, val);
  if (highestOccuringVal == -1) return -1;
  if (highestOccuringVal == lowestOccuringVal) return 1;
  return highestOccuringVal - lowestOccuringVal;
}

function lowestOccurence(arr, val, left = 0, right = arr.length) {
  let middle = Math.floor((left + right) / 2);
  if (arr[middle] == val) {
    right = middle - 1;
    if (arr[middle] < val && arr[middle + 1] == val) {
      return middle + 1;
    }
    if (middle == 0) {
      return middle;
    }
    return lowestOccurence(arr, val, left, right);
  } else if (arr[middle] < val) {
    left = middle + 1;
    if (arr[middle] < val && arr[middle + 1] == val) {
      return middle + 1;
    } else if (middle == arr.length - 1) {
      return -1;
    }
    return lowestOccurence(arr, val, left, right);
  } else if (arr[middle] > val) {
    right = middle - 1;
    if (middle == 0) {
      return -1;
    }
    return lowestOccurence(arr, val, left, right);
  }
}
function highestOccurence(arr, val, left = 0, right = arr.length) {
  let middle = Math.floor((left + right) / 2);
  if (arr[middle] == val) {
    left = middle + 1;
    if (arr[middle] == val && arr[middle + 1] > val) {
      return middle + 1;
    }
    if (middle == arr.length - 1) {
      return middle + 1;
    }
    return highestOccurence(arr, val, left, right);
  } else if (arr[middle] < val) {
    left = middle + 1;
    if (arr[middle] == val && arr[middle + 1] > val) {
      return middle + 1;
    } else if (middle == arr.length - 1) {
      return -1;
    }
    return highestOccurence(arr, val, left, right);
  } else if (arr[middle] > val) {
    right = middle - 1;
    if (middle == 0) {
      return middle;
    }
    return highestOccurence(arr, val, left, right);
  }
}

module.exports = sortedFrequency;
