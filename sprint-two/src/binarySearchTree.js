var BinarySearchTree = function(value) {
  this.left;
  this.right;
  this.value = value;
  this.level = 1;
  this.maxDepth = 1;
};

BinarySearchTree.prototype.insert = function(value) {
  var BST = new BinarySearchTree(value);
  var originalTree = this;
  
  var recurse = function (node, value) {
    if (value === node.value) {
      return;
    } 
    if (value > node.value) {
      if (node.right === undefined) {
        node.right = BST;
        node.right.level = node.level + 1;
        if (originalTree.maxDepth < BST.level) {
          originalTree.maxDepth = BST.level;
        }
      } else {
        recurse(node.right, value);
      }
    } else {
      if (node.left === undefined) {
        node.left = BST;
        node.left.level = node.level + 1;
        if (originalTree.maxDepth < BST.level) {
          originalTree.maxDepth = BST.level;
        }
      } else {
        recurse(node.left, value);
      }
    }
  };

  recurse(this, value);

};

BinarySearchTree.prototype.contains = function(value) {
  var result = false;
  var traverse = function (node, value) {
    if (value > node.value) {
      if (node.right !== undefined) {
        if (node.right.value === value) {
          result = true;
        } else {
          traverse(node.right, value);
        }
      }
    } else {
      if (node.left !== undefined) {
        if (node.left.value === value) {
          result = true;
        } else {
          traverse(node.left, value);
        }
      }
    }  
  };

  traverse(this, value);
  return result;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  var traverse = function (node, cb) {
    cb(node.value);
    if (node.left !== undefined) {
      traverse(node.left, cb);
    }
    if (node.right !== undefined) {
      traverse(node.right, cb);
    }
  };
  traverse(this, cb);
};

BinarySearchTree.prototype.breadthFirstLog = function(cb) {
  var results = [];
  results.push(this);
  
  var levelRecurse = function(tree) {
    if (tree.left !== undefined) {
      results.push(tree.left);
    } 

    if (tree.right !== undefined) {
      results.push(tree.right);
    }
  };

  while (results.length > 0) {
    levelRecurse(results[0]);
    cb(results[0].value);
    results.splice(0, 1);
  }

};
/*
 * Complexity: What is the time complexity of the above functions?

 depthFirstLog: O(n);
 contains && insert: O(logn)
 */
