

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.counter = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this.counter++;
  

  if (this._storage.get(index) !== undefined) {
    var temp = this._storage.get(index);
    //console.log(index, temp)
    var toggle = false;
    //find index
    for (var i = 0; i < temp.length; i++) {
      //console.log(temp[i]);
      if (temp[i][0] === k) {
        temp[i][1] = v;
        toggle = true;
        this.counter--;
      } 
    }
    if (toggle === false) {
      temp.push([k, v]);
    }
    this._storage.set(index, temp);
  } else { 
    
    this._storage.set(index, [[k, v]]);
  }

  if ( this.counter > Math.floor((this._limit * .75))) {
    this.doubledown();

  }

};

HashTable.prototype.doubledown = function() {
  this.counter = 0;
  var tempStorage = [];

  for (var i = 0; i < this._limit; i++) {
    //console.log(i, this._storage.get(i));
    if (this._storage.get(i) !== undefined) {
      tempStorage.push(this._storage.get(i));
      this._storage.set(i, undefined);
    }
  }

  tempStorage = _.flatten(tempStorage, true);
  this._limit = this._limit * 2;
  //console.log(this._limit);
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i < tempStorage.length; i ++) {
    this.insert(tempStorage[i][0], tempStorage[i][1]);
  }
};

HashTable.prototype.tummytuck = function() {
  this.counter = 0;
  var tempStorage = [];

  for (var i = 0; i < this._limit; i++) {
    //console.log(i, this._storage.get(i));
    if (this._storage.get(i) !== undefined) {
      tempStorage.push(this._storage.get(i));
      this._storage.set(i, undefined);
    }
  }

  tempStorage = _.flatten(tempStorage, true);
  this._limit = Math.floor(this._limit / 2);
  //console.log(this._limit);
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i < tempStorage.length; i ++) {
    this.insert(tempStorage[i][0], tempStorage[i][1]);
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
  // this._storage.set(index, undefined);
  //this deletes the whole bucket
  var temp = this._storage.get(index);
  if (temp !== undefined) {
    for (var i = 0; i < temp.length; i++) {
      //console.log(temp[i]);
      if (temp[i][0] === k) {
        temp.splice(i, 1);
        this.counter--;
      } 
    }
  }
  if ( this.counter < Math.floor((this._limit * .25))) {
    this.tummytuck();

  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert: linear
 retrieve: linear;
 remove: linear;
 */


