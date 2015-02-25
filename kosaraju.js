// overall algorithm
// reverse the graph
// run DFS loop on reversed graph


//DFS(G, i)
// mark i as explored
// set leader
// iterate over every edge (i, j) connected to i
  // if j is not explored
    // DFS(G, j)
// t++ (# nodes processed)
// set finishing time = t

//Overall DFS
// t= 0
// s= null
// from 1 to n (nodes)
  // if node is not explored
  // s = node
  // DFS(G, s)
  
function Node() {
  this.explored = false;
  this.edges = [];
}


// var s = NULL; // current source vertex
var t = 0; //number of nodes processed so far
var finishTime = {} // finishing time of each node
var SCCsizes = [] // number of nodes per SCC
var SCCsize = 0; // size of individual SCC

var DFSLoop = function(graph) {
  var keys = Object.keys(graph);
  for(var i=keys.length-1; i>=0; --i){
     var key = keys[i];
     if (graph[key].explored === false) {
         // s = key;
         SCCsize = 0;
         DFS(graph, key);
         SCCsizes.push(SCCsize);
     }
  }
  return SCCsizes;
}

var DFS = function(graph, i) {
    // i is a node value
    graph[i].explored = true;
    // var leader = s;
    // examine all edges from i to j
    var edges = graph[i].edges;
    // console.log(i)
    // console.log(graph[i])
    for (var j=0; j < edges.length; j++) {
        if (!graph[edges[j]].explored) {
            setTimeout(DFS(graph, edges[j]), 1000)
        }
    }
    t++;
    SCCsize++;
    finishTime[i] = t;
}
var kosaraju = function(graph, reversedGraph) {
    console.log("1")
    DFSLoop(reversedGraph);
    console.log("2")
    var finishedGraph = {}
    SCCsizes = [];
    for (var nodeVal in graph) {
      var key = finishTime[nodeVal];
      var value = graph[nodeVal];
      for (var i = 0; i < value.edges.length; i++) {
        value.edges[i] = finishTime[value.edges[i]];
      }
      finishedGraph[key] = value;
    }
    return DFSLoop(finishedGraph);
}

// // reading text file
// var fs = require('fs');
// var inputArray = fs.readFileSync('SCC.txt').toString().split("\n")
// var nodes = {};
// var reverseNodes = {};
// // console.log(inputArray);
// for(var i=0; i<inputArray.length; i++) {
//   var split = inputArray[i].split(' ');
//   var firstVal = split[0];
//   var secondVal = split[1];
//   // make original graph
//   if (nodes[firstVal]) {
//       nodes[firstVal].edges.push(secondVal);
//   } else {
//       nodes[firstVal] = new Node();
//       nodes[firstVal].edges.push(secondVal);
//   } if (!nodes[secondVal]) {
//       nodes[secondVal] = new Node();
//   }

//   // make graph with reversed indices
//   if (reverseNodes[secondVal]) {
//       reverseNodes[secondVal].edges.push(firstVal);
//   } else {
//       reverseNodes[secondVal] = new Node();
//       reverseNodes[secondVal].edges.push(firstVal);
//   } if (!reverseNodes[firstVal]) {
//       reverseNodes[firstVal] = new Node();
//   }
// }
// console.log(kosaraju(nodes, reverseNodes))
// console.log(reverseNodes)

// //TESTING
// function fakeNode(edges) {
//     this.explored = false;
//     this.edges = edges;
    
// }

// var exampleGraph = {}
// exampleGraph['1'] = new fakeNode(['4']); 
// exampleGraph['2'] = new fakeNode(['8']);
// exampleGraph['3'] = new fakeNode(['6']);
// exampleGraph['4'] = new fakeNode(['7']);
// exampleGraph['5'] = new fakeNode(['2']);
// exampleGraph['6'] = new fakeNode(['9']);
// exampleGraph['7'] = new fakeNode(['1']);
// exampleGraph['8'] = new fakeNode(['5','6']);
// exampleGraph['9'] = new fakeNode(['3','7']);

// var revExampleGraph = {}
// revExampleGraph['1'] = new fakeNode(['7']); 
// revExampleGraph['2'] = new fakeNode(['5']);
// revExampleGraph['3'] = new fakeNode(['9']);
// revExampleGraph['4'] = new fakeNode(['1']);
// revExampleGraph['5'] = new fakeNode(['8']);
// revExampleGraph['6'] = new fakeNode(['3','8']);
// revExampleGraph['7'] = new fakeNode(['4','9']);
// revExampleGraph['8'] = new fakeNode(['2']);
// revExampleGraph['9'] = new fakeNode(['6']);

// console.log(kosaraju(exampleGraph, revExampleGraph))

// DFSLoop(revExampleGraph);
// console.log(finishTime);
