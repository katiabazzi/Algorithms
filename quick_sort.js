// read array from text file
var fs = require('fs');
var array = fs.readFileSync('QuickSort.txt').toString().split("\r\n");
for (var i = 0; i < array.length; i++) {
  array[i] = parseInt(array[i]);
}
array.pop()

// assuming the pivot is the first item
var partitionA = function(list, l, r){
  var pivot = list[l];
  var i = l + 1;
  var j = l + 1;

  for (j; j <= r; j++) {
    if (list[j] < pivot) {
      var temp = list[i];
      list[i] = list[j];
      list[j] = temp;
      i ++
    }
  }

  list[l] = list[i-1]
  list[i-1] = pivot
  var pivotIndex = i-1;
  return pivotIndex;
}

//assuming the pivot is the last item
var partitionB = function(list, l, r){
  // swap pivot with first item
  var temp = list[l];
  list[l] = list[r];
  list[r] = temp;

  // start partition process
  var pivot = list[l];
  var i = l + 1;
  var j = l + 1;

  for (j; j <= r; j++) {
    if (list[j] < pivot) {
      var temp = list[i];
      list[i] = list[j];
      list[j] = temp;
      i ++
    }
  }

  list[l] = list[i-1]
  list[i-1] = pivot
  var pivotIndex = i-1;
  return pivotIndex;
}


//assuming the pivot is the median of the first, middle, and last item
var findMedian = function(first, second, third) {
  list = [first, second, third]
  var max = Math.max(first, second, third);
  var min = Math.min(first, second, third);
  // console.log(list)
  list.splice(list.indexOf(max), 1)
  list.splice(list.indexOf(min), 1)
  return list[0]
}

var partitionC = function(list, l, r){
  // find pivot (median of 1st, middle, and last items)
  var first = list[l];
  var middle = list[Math.floor((r-l)/2)+l];
  var last = list[r];
  // console.log("first: " + first + " middle: " + middle + " last: " + last)
  // console.log("list: " + list)
  var pivotValue = findMedian(first, middle, last);
  // find pivot index
  if (pivotValue === first) {
    pivotIndex = l;
  } else if (pivotValue === middle) {
    pivotIndex = Math.floor((r-l)/2)+l;
  } else if (pivotValue === last) {
    pivotIndex = r;
  }

  // swap pivot with first item
  var temp = list[l];
  list[l] = pivotValue;
  list[pivotIndex] = temp;

  // start partition process
  var pivot = list[l];
  var i = l + 1;
  var j = l + 1;

  for (j; j <= r; j++) {
    if (list[j] < pivot) {
      var temp = list[i];
      list[i] = list[j];
      list[j] = temp;
      i ++
    }
  }

  list[l] = list[i-1]
  list[i-1] = pivot
  var pivotIndex = i-1;
  return pivotIndex;
}



var quickSort = function(list, left, right) {
  if (list.length === 1 || list.length === 0) {
    return [list, count];
  } 
  if (left >= right || right < 0){
    return [list, count];
  } 
  var pivotIndex = partitionC(list, left, right);
  count += (right - left)
  quickSort(list, left, pivotIndex-1);
  quickSort(list, pivotIndex+1, right);
  return [list, count];
}

count = 0
console.log(quickSort(array, 0, array.length-1))
// count = 0
// list1 = [3, 7, 2, 4]
// partition1 = quickSort(list1, 0, list1.length-1)
// console.log(partition1)

// count = 0
// list1 = [3]
// partition1 = quickSort(list1, 0, list1.length-1)
// console.log(partition1)

// count = 0
// list1 = [3, 2]
// partition1 = quickSort(list1, 0, list1.length-1)
// console.log(partition1)