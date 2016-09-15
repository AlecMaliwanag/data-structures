var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.head = 0;
  someInstance.tail = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.tail++] = value;
};

queueMethods.dequeue = function() {
  if (this.head !== this.tail) {
    var hold = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return hold;
  }
};

queueMethods.size = function() {
  return this.tail - this.head;
};