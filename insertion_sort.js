
// Insertion sort is a simple sorting algorithm: 
// a comparison sort in which the sorted array (or list) is built one entry at a time.


// iterate through list
// compare each item to all items before
// case 0: no items in list - return empty list
// case 0b: 1 item in list - return current list with no changes
// case 1: if current item is larger than previous item - don't change anything
// case 2: if current item is smaller than previous item 
//        case 2a: if previous item is at position zero, swap the two items
//        case 2b: keep looping backwards until you find appropriate position for current item
 

var insertionSort = function(unsortedList) {
  // list only has 0 or 1 items
  if (unsortedList.length === 0 || unsortedList.length === 1) {

    return unsortedList;
  }
  else {
    // examine every item in list
    for (var i = 1; i < unsortedList.length; i++) {
      var j = i - 1;
      var currentItem = unsortedList[i];
      var previousItem = unsortedList[j];
      // current item needs new position
          while (currentItem < unsortedList[j]) {

            if (j === 0 || currentItem > unsortedList[j-1]) {
              unsortedList.splice(j, 0, currentItem);
              unsortedList.splice(i+1, 1);
              j = - 1
            } else {
              j -= 1
            }
      }
    }
    return unsortedList;
  }
}

var array1 = [4, 2]
var example1 = new insertionSort(array1)
console.log( example1[0] === 2 )
console.log( example1[1] === 4 )
console.log( example1.length === 2)


var array2 = [4, 3, 2, 1]
var example2 = new insertionSort(array2)
console.log( example2[0] === 1 )
console.log( example2[1] === 2 )
console.log( example2[2] === 3 )
console.log( example2[3] === 4 )
console.log( example2.length === 4)

var array3 = []
var example3 = new insertionSort(array3)
console.log( example3.length === 0)

var array4 = [4]
var example4 = new insertionSort(array4)
console.log( example4.length === 1)
console.log( example4[0] === 4)

var array5 = [4, 4, 4]
var example5 = new insertionSort(array5)
console.log( example5.length === 3)
console.log( example5[0] === 4)
console.log( example5[1] === 4)
console.log( example5[2] === 4)
