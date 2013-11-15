var makeTree = function(treeVal){
  var newTree = {};
  newTree.value = treeVal;
  newTree.children = [];

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {
  addChild: function(childValue){
    addInd = this.children.length;
    childNode = makeTree(childValue);
    this.children[addInd] = childNode;
    return childNode;
  },
  contains: function(){
  }
};