var Queue = function() {
  
  var someInstance = {};
  
  someInstance.storage = {};
  someInstance.tail = 0;
  someInstance.head = 0;

  _.extend(someInstance, queueMethods);

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


