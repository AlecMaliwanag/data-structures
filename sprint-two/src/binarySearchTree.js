var BinarySearchTree = function(value) {
  this.left;
  this.right;
  this.value = value;
};

BinarySearchTree.prototype.insert = function(value) {
  var BST = new BinarySearchTree(value);
  
  var recurse = function (node, value) {
    if (value === node.value) {
      return;
    } 
    if (value > node.value) {
      if (node.right === undefined) {
        node.right = BST;
      } else {
        recurse(node.right, value);
      }
    } else {
      if (node.left === undefined) {
        node.left = BST;
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
/*
 * Complexity: What is the time complexity of the above functions?

 depthFirstLog: O(n);
 contains && insert: O(logn)
 */
