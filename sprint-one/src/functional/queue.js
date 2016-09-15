var Queue = function() {
  var someInstance = {};

  var storage = {};
  var counter = 0;
  
  someInstance.enqueue = function(value) {
    storage[counter++] = value;
  };

  someInstance.dequeue = function() {
    if (counter > 0) {
      var keys = Object.keys(storage);
      
      var shifted = storage[keys[0]];
      delete storage[keys[0]];
      return shifted;
    }
  };

  someInstance.size = function() {
    var keys = Object.keys(storage);
    return keys.length;
  };

  return someInstance;
};


