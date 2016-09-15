var Queue = function() {
  this.storage = {};
  this.tail = 0;
  this.head = 0;

};

Queue.prototype.enqueue = function(value) {
  this.storage[this.tail++] = value;
};

Queue.prototype.dequeue = function() {
  if (this.head !== this.tail) {
    var hold = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return hold;
  }
};

Queue.prototype.size = function() {
  return this.tail - this.head;
};





