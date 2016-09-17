

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    var node = Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
   
  };

  list.removeHead = function() {

    if (list.head === null) {
      return "error";
    }
    var severedHead = list.head.value;
    
    list.head = list.head.next;
    return severedHead;

  };

  list.contains = function(target) {

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
    return recurse(list.head, target);

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addtoTail : constant
 removeHead : constant
 contains: linear
 
 */



var doubleLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    var node = Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
   
  };

  list.removeHead = function() {

    if (list.head === null) {
      return 'error';
    }
    var severedHead = list.head.value;
    
    list.head = list.head.next;
    return severedHead;

  };

  list.contains = function(target) {

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
    return recurse(list.head, target);

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addtoTail : constant
 removeHead : constant
 contains: linear
 
 */





