var LinkedList = function() {
  var list = {}; // {head: ,  node1: {value: 4, next: null}, node2: {value: value2, next: null}, tail: ,}
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //list.tail = value;
    //debugger;
    list.tail = Node(value);
    if (list.head === null /*&& list.tail !== null*/) { 
      list.head = Node(value);
    }

  };

  list.removeHead = function() {
    var temp = list.head;
    list.head = list.tail;
    return temp.value;
  };

  list.contains = function(target) {
    // debugger;
    for (var key in list) {
      if (list[key].value === target) {
        return true; //.hasOwnProperty(target);
      }
    }
    return false;
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
 */
