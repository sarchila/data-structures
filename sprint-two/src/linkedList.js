// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  var prevVal = null;

  list.addToTail = function(value){
    //add value to end of list
    list[value] = makeNode(value);
    // list[prevVal].next = list[value];
    list.tail = list[value];
    if (list.head === null){
      list.head = list[value];
    }
    prevVal = value;
    // list[prevVal] = list[currVal];
  };

  list.removeHead = function(){
    //removes node from head and returns it
  };

  list.contains = function(){
    //check if node is in tree, boolean
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
