// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// does contract step of min cut karger method
var contract = function(edges) {
  var edgeIndex = getRandomInt(0, edges.length);
  var edge = edges[edgeIndex];
  var liveNode = edge[0];
  var deadNode = edge[1];

  var contractedEdges = [];
  // replace all dead nodes with live nodes and remove self-loops
  for (var i = 0; i < edges.length; i++) {
    if (edges[i][0] === deadNode) {
      contractedEdges.push([liveNode, edges[i][1]])
    } else if (edges[i][1] === deadNode) {
      contractedEdges.push([edges[i][0], liveNode])
    } else {
      contractedEdges.push([edges[i][0], edges[i][1]])
    }
  }

  //delete all self loops
  var result = [];
  for (var i = 0; i < contractedEdges.length; i++) {
    if (contractedEdges[i][0] !== contractedEdges[i][1]) {
      result.push(contractedEdges[i]);
    }
  }

  return result;
}

// minimum cut karger method
var kargerMinCut = function(edges, numNodes) {
  var copyEdges = edges;
  while (numNodes > 2) {
    copyEdges = contract(copyEdges);
    numNodes --
  }
  return copyEdges.length/2
}

var testArray = [[1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3,2]]
// console.log(kargerMinCut(testArray, 3))
var testArray1 = [[1, 2], [2, 1]]
// console.log(kargerMinCut(testArray1, 2))
var testArray2 = [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 4], [3, 1], [3,2], [3,4], [4,1], [4,2], [4,3]]
// console.log(kargerMinCut(testArray2, 4))

// add .min function to arrays
Array.prototype.min = function() {
  return Math.min.apply(null, this);
};



// run kargerMinCut for text file a few hundred times and grab minimum cut
var solveTextFile = function(){
  // read text file and generate array of edges
  var fs = require('fs');
  var inputArray = fs.readFileSync('kargerMinCut.txt').toString().split("\r\n") 
  var inputEdges = [];
  for(var i=0; i<inputArray.length; i++) {
    var split = inputArray[i].split('\t');
    for(var j=1; j<split.length; j++) {
      if(split[j] != '') {
        inputEdges.push([parseInt(split[0]),parseInt(split[j])])
      }
    }
  }

  var minCut = [];

  for (var i = 0; i < 2000; i++) {    
    minCut.push(kargerMinCut(inputEdges, 200))
  }
  return minCut.min()
}
console.log(solveTextFile());


// inputArray = [[1, 2], [2, 1]]
// contract(inputArray)
// console.log(inputArray)
// var minCut = [];
// for (var i = 0; i < 2000; i++) {
//   minCut.push(solveTextFile())
// }
// console.log(minCut.min())



// Determines minimum cut using the Karger method

