

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(index) !== undefined) {
    var temp = this._storage.get(index);
    var toggle = false;

    for (var i = 0; i < temp.length; i++) {
      //console.log(temp[i]);
      if (temp[i][0] === k) {
        temp[i][1] = v;
        toggle = true;
      } 
    }
    if (toggle === false) {
      temp.push([k, v]);
    }
    this._storage.set(index, temp);
  } else { 
    
    this._storage.set(index, [[k, v]]);
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(index);
  if (temp !== undefined) {
    for (var i = 0; i < temp.length; i ++) {
      if (temp[i][0] === k) {
        return temp[i][1];
      }
    }
  } else {
    return temp;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert: linear
 retrieve: linear;
 remove: linear;
 */


