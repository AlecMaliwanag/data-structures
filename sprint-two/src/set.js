var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (item !== null && typeof item !== undefined) {
    this._storage[item] = true;
  }
};

setPrototype.contains = function(item) {
  if (this._storage[item] !== undefined) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item) {
  // if (this._storage[item] !== undefined) {
  delete this._storage[item];
  // }
};

/*
 * Complexity: What is the time complexity of the above functions?
add: constant:
contains: constant:
remove: constant;
 */
