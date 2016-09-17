


var DoubleLinkedList = function() {
  this.head = null;
  this.tail = null;
  
};

DoubleLinkedList.prototype.addToTail = function(value) {

  var node = Node(value);
  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.previous = this.tail;
    this.tail = node;
  }
 
};

DoubleLinkedList.prototype.addToHead = function(value) {
  var node = Node(value);
  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.head.previous = node;
    this.head = node;
  }
};

DoubleLinkedList.prototype.removeHead = function() {
  if (this.head === null) {
    return 'error';
  }
  var severedHead = this.head.value;
  
  this.head = this.head.next;
  if (this.head !== null) {
    this.head.previous = null;
  }
  return severedHead;
};

DoubleLinkedList.prototype.removeFromTail = function() {
  if (this.tail === null) {
    return 'error';
  }
  var severedTail = this.tail.value;
  this.tail = this.tail.previous;
  return severedTail;
  
};

DoubleLinkedList.prototype.contains = function(target) {

  var recurse = function (pointer, target) {
    if (pointer.value === target) {
      return true;
    } else {
      if (pointer.next !== null) {
        return recurse(pointer.next, target);
      } else {
        return false;
      }
    }
  };
  return recurse(this.head, target);

};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addtoTail : constant
 removeHead : constant
 contains: linear
 
 */



