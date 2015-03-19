//read text file
var fs = require('fs');
var inputArray = fs.readFileSync('MedianMaintenance.txt').toString().split("\n")
var numbers = []
for (var i = 0; i < inputArray.length; i++) {
  if (inputArray[i] !== '') {
    var number = parseInt(inputArray[i].split("\r")[0]);
    if (typeof(number) === 'number') {
      numbers.push(number);
    }
  }
}


// type is either 'max' or 'min'
var heap = function(type) {
  this.type = type;
  this.nodes = [];
}

heap.prototype.size = function(){
  return this.nodes.length;
}
heap.prototype.parentIndex = function(childIndex){
  return Math.floor((childIndex+1)/2)-1;
}

heap.prototype.childrenIndex = function(parentIndex){
  return [2 * (parentIndex + 1) - 1, 2 * (parentIndex + 1)];
}

heap.prototype.insert = function(node){
  var index = this.nodes.length;
  this.nodes.push(node);
  this.bubbleUp(index)
}

heap.prototype.bubbleUp = function(index) {
  var node = this.nodes[index]
  var parentIndex = this.parentIndex(index);
  var parent = this.nodes[parentIndex];
  if (this.type === 'max') {
    while (parent < node) {
      //swap the parent and the node
      this.nodes[parentIndex] = node;
      this.nodes[index] = parent;
      index = parentIndex;
      parentIndex = this.parentIndex(index);
      parent = this.nodes[parentIndex];
    }
  } else {
    while (parent > node) {
      //swap the parent and the node
      this.nodes[parentIndex] = node;
      this.nodes[index] = parent;
      index = parentIndex;
      parentIndex = this.parentIndex(index);
      parent = this.nodes[parentIndex];
    }  
  }
}
heap.prototype.sinkDown = function(index) {
  var childrenIndex = this.childrenIndex(index);
  var children = [this.nodes[childrenIndex[0]], this.nodes[childrenIndex[1]]];
  var node = this.nodes[index];
  if (this.type === 'max') { // max heap
    while (node < children[0] || node < children[1]) {
      //swap the parent and the larger node
      var child;
      var childIndex;
      if (children[0] && !children[1]) {
          child = children[0]
          childIndex = childrenIndex[0]
      } else if (children[0] > children[1]) {
        child = children[0];
        childIndex = childrenIndex[0];
      } else {
        child = children[1];
        childIndex = childrenIndex[1];
      }
      this.nodes[childIndex] = node;
      this.nodes[index] = child;
      index = childIndex;
      childrenIndex = this.childrenIndex(index);
      children = [this.nodes[childrenIndex[0]], this.nodes[childrenIndex[1]]];
    }
  } else { // min heap
      while (node > children[0] || node > children[1]) {
        //swap the parent and the smaller node
        var child;
        var childIndex;
        if (children[0] && !children[1]) {
          child = children[0]
          childIndex = childrenIndex[0]
        } else if (children[0] < children[1]) {
          child = children[0];
          childIndex = childrenIndex[0];
        } else {
          child = children[1];
          childIndex = childrenIndex[1];
        }
        this.nodes[childIndex] = node;
        this.nodes[index] = child;
        index = childIndex;
        childrenIndex = this.childrenIndex(index);
        children = [this.nodes[childrenIndex[0]], this.nodes[childrenIndex[1]]];
      }
    }
}


heap.prototype.extractRoot = function(){
  var root = this.nodes[0];
  var lastIndex = this.nodes.length-1;
  this.nodes[0] = this.nodes[lastIndex];
  this.nodes.splice(lastIndex, 1)
  var index = lastIndex-1;
  this.sinkDown(0);
  return root;
}

// var numbers = [ 2793, 5685, 4292, 9290, 6195, 6331, 7600 ];
// var testHeap = new heap('min');
// for (var i = 0; i < numbers.length; i++) {
//   testHeap.insert(numbers[i])
// }
// console.log("before: test heap")
// console.log(testHeap.nodes)
// console.log("after: test heap")
// testHeap.extractRoot()
// console.log(testHeap.nodes)

var medianMaintenance = function(numbers) {
  var maxHeap = new heap('max');
  var minHeap = new heap('min');
  var medians = [];
  var sumMedians = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < maxHeap.nodes[0]) {
      maxHeap.insert(numbers[i]);
    } else {
      minHeap.insert(numbers[i]);
    }
    while (minHeap.size() > maxHeap.size() + 1) {
      var root = minHeap.extractRoot();
      maxHeap.insert(root);
    } 
    while (maxHeap.size() > minHeap.size() + 1) {
      var root = maxHeap.extractRoot();
      minHeap.insert(root);
    } 
    //grab median
    var median;
    if (maxHeap.size() >= minHeap.size()) {
      median = maxHeap.nodes[0];
    } else if (maxHeap.size() < minHeap.size()) {
      median = minHeap.nodes[0];
    } 
    sumMedians += median;
    medians.push(median)
  }
  console.log(sumMedians)
}
medianMaintenance(numbers)



