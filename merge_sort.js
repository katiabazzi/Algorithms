var mergeSort = function(list) {
  if (list.length === 1) {
    return list
  } else {
    var middle = list.length/2;
    var left = list.slice(0, middle);
    var right = list.slice(middle, list.length);
    var sortedRight = mergeSort(right);
    var sortedLeft = mergeSort(left);
    return merge(sortedLeft, sortedRight);
  }
}

var merge = function(left, right) {
  // assuming left and right are sorted
  var result = []
  leftIndex = 0;
  rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex += 1
    } else {
      result.push(right[rightIndex])
      rightIndex += 1
    }
  }
  if (leftIndex > left.length) {
    while (leftIndex < left.length){ 
      result.push(left[leftIndex])
      leftIndex += 1
    }
  } else {
    // result.push(right[rightIndex])
    while (rightIndex < right.length){ 
      result.push(right[rightIndex])
      rightIndex += 1
    }
  }
  return result
}



