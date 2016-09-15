

// Instantiate a new graph
var Graph = function() {
  this.storage = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage.push(node);
  //console.log(this.storage);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return _.contains(this.storage, node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var removedIndex = this.storage.indexOf(node);
  if ( removedIndex !== -1) {
    for (var i = 0; i < this.edges.length; i ++) {
      if (_.contains(this.edges[i], node)) {
        this.edges.splice(this.edges[i], 1);
      }
    }
    this.storage.splice(removedIndex, 1);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;
  for (var i = 0; i < this.edges.length; i ++) {
    if (_.contains(this.edges[i], fromNode) && _.contains(this.edges[i], toNode)) {
      result = true;
    }
    
  }
  return result;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i ++) {
    if (_.contains(this.edges[i], fromNode) && _.contains(this.edges[i], toNode)) {
      this.edges.splice(this.edges[i], 1);
    }
    
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.storage.forEach(node => cb(node));
};
// var node = function(value) {
//   this.value = value;
//   this.edge = {};
// };
/*
 * Complexity: What is the time complexity of the above functions?
 */


