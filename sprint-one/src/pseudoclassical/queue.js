var Queue = function() {
  this.storage = {};
  this.count = 0;
  this.keys;
  this.shifted;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count++] = value;
};

Queue.prototype.dequeue = function() {
  this.keys = Object.keys(this.storage);
  this.shifted = this.storage[this.keys[0]];
  delete this.storage[this.keys[0]];
  return this.shifted;
};

Queue.prototype.size = function() {
  this.keys = Object.keys(this.storage);
  return this.keys.length;
};





