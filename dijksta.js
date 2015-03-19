// // reading text file
var fs = require('fs');
var newArray  =[]
var inputArray = fs.readFileSync('dijkstraData.txt').toString().split("\n")


var V = {}
for (var i = 0; i < inputArray.length; i++) {
    var edges = inputArray[i].split('\t');
    var vertex = parseInt(edges[0]);
    for (var j = 1; j < edges.length; j++) {
      var adjacentVertex = parseInt(edges[j].split(",")[0]);
      var edgeWeight = parseInt(edges[j].split(",")[1]);
      if (adjacentVertex && edgeWeight) {
        if (!V[vertex]) {
          V[vertex] = {};
        }
        V[vertex][adjacentVertex] = edgeWeight;
      }
    }
}


var compareObjects = function(object1, object2) {
  return Object.keys(object1).toString() === Object.keys(object2).toString()
}


// X = vertices processed so far
// s = source node
// V = graph
var dijksta = function(V, s) {
  var X = {};
  var A = {};
  X[s] = true; // arbitrary value assignment
  A[s] = 0;
  while (!compareObjects(X, V)) {
    var minEdge = undefined; 
    var minLength = undefined;
    for (var i = 0; i < Object.keys(X).length; i++) {
      var vertex = Object.keys(X)[i];
      var edges = V[vertex]; 
      for (var j = 0; j < Object.keys(edges).length; j++) {
        var w = Object.keys(edges)[j];
        if (X[w] == undefined) {
          var pathLength = A[vertex] + edges[w];
          if (!minLength || pathLength < minLength) {
            minEdge = w;
            minLength = pathLength;
          }
        }
      }
    }
    X[minEdge] = true;
    A[minEdge] = minLength;
  }
  return A;
}


exampleV = {};
exampleV[1] = {};
exampleV[1][2] = 300;
exampleV[1][3] = 500;
exampleV[1][4] = 100;
exampleV[2]= {};
exampleV[3] = {};
exampleV[4] = {};
exampleV[4][3] = 100;


var a = dijksta(V, 1)
console.log(a[7])
console.log(a[37])
console.log(a[59])
console.log(a[82])
console.log(a[99])
console.log(a[115])
console.log(a[133])
console.log(a[165])
console.log(a[188])
console.log(a[197])



