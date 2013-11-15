// Note: don't use an array to do this.
var makeLinkedList = function(){

  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(node){
    node = makeNode(node);
    if (list.head === null){ // check for first push basically
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node; // if not the first then tail.next is the node;
      list.tail = node;
    }
  };

  list.removeHead = function(){
    var tempHead = list.head.value;
    list.head = list.head.next;
    if (list.head === null) list.tail = null;
    return tempHead;
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

  return node;
};
