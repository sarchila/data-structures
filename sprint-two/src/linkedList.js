// Note: don't use an array to do this.
var makeLinkedList = function(){

  var list = {};
  list.head = null;
  list.tail = null;
  var size = 0; // to track size for romve method

  list.addToTail = function(node){
    node = makeNode(node);
    if (list.head === null){ // check for first push basically
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node; // if not the first then tail.next is the node;
      list.tail = node;
    }
    size++;
  };

  list.removeHead = function(value){
    var tempHead = list.head.value;
    list.head = list.head.next;
    return tempHead;
  };

  list.contains = function(){
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
