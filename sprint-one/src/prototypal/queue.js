var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.count++] = value;
};

queueMethods.dequeue = function() {
  this.keys = Object.keys(this.storage);
  this.shifted = this.storage[this.keys[0]];
  delete this.storage[this.keys[0]];
  return this.shifted;
};

queueMethods.size = function() {
  this.keys = Object.keys(this.storage);
  return this.keys.length;
};
