var makeTree = function(treeVal){
  var newTree = {};
  newTree.value = treeVal;
  newTree.children = [];
  newTree.parent = null;

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.removeFromParent = treeMethods.removeFromParent;

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
  },
  removeFromParent: function() {
    if (this.parent !== null) {
      var kids = this.parent.children;
      for (var i = 0; i < kids.length; i++) {
        if (this === kids[i]) {
          kids.splice(i, 1);
        }
      }
      this.parent = null;
    }
  }
};