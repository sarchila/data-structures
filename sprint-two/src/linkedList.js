// Note: don't use an array to do this.
var makeLinkedList = function(){

  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value); // make var
    if (list.head === null){ // check for first push basically
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node; // if not the first then tail.next is the node;
      node.previous = list.tail;
      list.tail = node;
    }
  };

  list.addToHead = function(value){
    if (!list.head){ // check for first push basically
      list.addToTail(value);
    } else {
      var node = makeNode(value);
      list.head.previous = node; // if not the first then tail.next is the node;
      node.next = list.head;
      list.head = node;
    }
  };

  list.removeHead = function(){
    var tempHead = list.head.value;
    list.head = list.head.next;
    if (list.head === null){
      list.tail = null;
    } else {
      list.head.previous = null;
    }
    return tempHead;
  };

  list.removeTail = function() {
    var tempTail = list.tail.value;
    list.tail = list.tail.previous;
    if (list.tail === null) {
      list.head = null;
    } else {
      list.tail.next = null;
    }
    return tempTail;
  };

  list.contains = function(value){
    var result = false;
    var check = function(item) {
      if (item.value === value) {
        result = true;
      } else if (item.next !== null) {
        check(item.next);
      }
    };

    if (list.head.value === value) {
      return true;
    } else if (list.head.next){
      check(list.head.next);
    }
    return result;
  };
  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};
