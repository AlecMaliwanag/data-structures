var Queue = function() {
  var someInstance = {};

  var storage = {};
  var tail = 0;
  var head = 0;
  
  someInstance.enqueue = function(value) {
    storage[tail++] = value;
  };

  someInstance.dequeue = function() {
    if (head !== tail) {
      var shifted = storage[head];
      delete storage[head];
      head++;
      return shifted;
    }
    
  };

  someInstance.size = function() {
    return tail - head;
  };

  return someInstance;
};


