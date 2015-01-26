var mergeSort = function(list) {
  if (list.length === 1) {
    return list;
  } else {
    var middle = list.length/2;
    var left = list.slice(0, middle);
    var right = list.slice(middle, list.length);
    right = mergeSort(right);
    left = mergeSort(left);
    return merge(left, right);
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
  if (leftIndex >= left.length) {
    while (rightIndex < right.length){ 
      result.push(right[rightIndex])
      rightIndex += 1
    }
  } else {
    while (leftIndex < left.length){ 
      result.push(left[leftIndex])
      leftIndex += 1
      }
    }
  return result
} 

// test merge
var example1 = new mergeSort([1, 3, 2, 7, 1, -1, 0])
// console.log(example1.length === 3)
console.log(example1)



