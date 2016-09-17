var Tree = function(value) {
  this.value = value;
  this.children = [];
  this.parent = null;
};

Tree.prototype.addChild = function(value) {
  var tree = new Tree(value);
  this.children.push(tree);
  tree.parent = this;
};

Tree.prototype.contains = function(target) {
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

Tree.prototype.removeFromParent = function() {
  var storage = this.parent;
  var index = _.indexOf(storage.children, this);
  storage.children.splice(index, 1);
  return this.value;
  
};



Tree.prototype.traverse = function(cb) {

  var recurse = function(node, cb) { 
    node.value = cb(node.value);
    if (node.children.length > 0) {
      node.children.forEach(function(child) {
        return recurse(child, cb); 
      });
    }
  };
  recurse(this, cb);
};


/*
 * Complexity: What is the time complexity of the above functions?
 addChild: constant;
 contains: linear;
 */
