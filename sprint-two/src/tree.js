var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var tree = Tree(value);
  this.children.push(tree);
};

treeMethods.contains = function(target) {
  var found = false;
  var recurse = function(node, target) { 
    if (node.value === target) {
      found = true;
    } else {
      if (node.children.length > 0) {
        node.children.forEach(function(child) {
          return recurse(child, target); 
        });
      } 
    }
  };
  recurse(this, target);
  return found;
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild: constant;
 contains: linear;
 */
