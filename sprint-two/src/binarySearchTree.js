var makeBinarySearchTree = function(value){
  var newTree = {};
  newTree.left = null;
  newTree.right = null;
  newTree.value = value || null;

  newTree.insert = bstMethods.insert;
  newTree.contains = bstMethods.contains;
  newTree.depthFirstLog = bstMethods.depthFirstLog;

  return newTree;
};

var bstMethods = {
  insert: function(val){
    // if tree itself that called insert (this)
    // is null, then this.value = val
    if (this.value === null) {
      this.value = val;
    } else {
    // else compare this.value and val
    // if less than, insert() at left
    // if greater than, insert() at right
    // if equal to, do nothing
      if (val > this.value) {
        if (this.right === null){
          this.right = makeBinarySearchTree(val);
        } else {
          this.right.insert(val);
        }
      } else if (val < this.value) {
        if (this.left === null) {
          this.left = makeBinarySearchTree(val);
        } else {
          this.left.insert(val);
        }
      }
    }
  },
  contains: function(target){
    if (this.value === target){
      // console.log(this.value);
      // console.log("==========================");
      return true;
    } else {
      if (target > this.value) {
        if (this.right === null){
          // console.log(this.value);
          return false;
        } else {
          // console.log(this.value);
          return this.right.contains(target);
        }
      } else if (target < this.value) {
        if (this.left === null) {
          // console.log(this.value);
          return false;
        } else {
          // console.log(this.value);
          return this.left.contains(target);
        }
      }
    }
  },
  depthFirstLog: function() {
  }
};
