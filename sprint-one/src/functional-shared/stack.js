var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.counter = 0;
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};
stackMethods.push = function(value) {
  this.storage[this.counter++] = value;
};
stackMethods.size = function() {
  return this.counter;
};
stackMethods.pop = function() {
  if (this.counter > 0) { 
    var popped = this.storage[--this.counter]; 
    delete this.storage[this.counter];        
    return popped;
  }
};
  



