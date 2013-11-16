var makeTree = function(treeVal){
  var newTree = {};
  newTree.value = treeVal;
  newTree.children = [];
  newTree.parent = null;

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {
  addChild: function(childValue){
    var childNode = makeTree(childValue);
    childNode.parent = this;
    this.children.push(childNode);
    return childNode;
  },
  contains: function(target){
    if (this.value === target) {
      return true;
    } else {
      var anyChild = _.some(this.children, function(child){
        return child.contains(target);
      });
      return anyChild;
    }
  }
};