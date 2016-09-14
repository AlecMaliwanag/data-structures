var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.counter = 0;
  return someInstance;
};

var stackMethods = {};
stackMethods.push = function(value) {
  this.storage[this.counter++] = value;
};
stackMethods.pop = function() {
  if (this.counter > 0) {
    var popped = this.storage[--this.counter];
    delete this.storage[this.counter];
    return popped;
  }
};
stackMethods.size = function() {
  return this.counter;
};

