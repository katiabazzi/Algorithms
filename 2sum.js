var fs = require('fs');
var inputArray = fs.readFileSync('2sum.txt').toString().split("\n")
var numbers = {};
// read text file
  // var counter = 1
for (var i = 0; i < inputArray.length; i++) {
  var number = parseInt(inputArray[i]);
  if (!numbers[number] && number != '') {
    numbers[number] = true;
  }    
}

// console.log(numbers)
// var numbers = {}
// numbers[1] = true;
// numbers[3] = true;
var twoSum = function(numbers) {
  var t = {};
  var keys = Object.keys(numbers)
  for (var i = 0; i < keys.length; i++) {
    var x = parseInt(keys[i]);
    var yLow = -10000-x
    var yHigh = 10000-x
    console.log("x: " + x)
    console.log("yLow: " + yLow)
    console.log("yHigh: " + yHigh)

    for (var y = yLow; y <= yHigh; y++) {
      if (x != y && numbers[y]) {
        t[x+y] = true;
      }
    }
  }
  console.log(Object.keys(t).length)
}
twoSum(numbers)