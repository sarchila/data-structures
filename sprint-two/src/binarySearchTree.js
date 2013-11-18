var makeBinarySearchTree = function(value){
  var newTree = {};
  newTree.left = null;
  newTree.right = null;
  newTree.value = value || null;

  newTree.insert = bstMethods.insert;
  newTree.contains = bstMethods.contains;
  newTree.depthFirstLog = bstMethods.depthFirstLog;
  newTree.findClosest = bstMethods.findClosest;

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
  depthFirstLog: function(func, flat) {
    var result = [];

    if (!this.value) return null;
    else {
      this.left && result.push(this.left.depthFirstLog(func));
      result.push(func(this.value));
      this.right && result.push(this.right.depthFirstLog(func));
    }
    return flat ? _.flatten(result) : result;
  },
  findClosest: function(val, closest) {
    var testVal = this.value;
    closest = closest || testVal;
    if (testVal === val || testVal === null) {
      closest = val;
      return closest;
      // check if "testVal" is closer to "val" than "closest", if so, update closest
    } else if (Math.abs(closest - val) > Math.abs(testVal - val)) {
      closest = testVal;
    }
    // If val is less than testVal, run on left
    if (val < testVal && this.left) {
      closest = this.left.findClosest(val, closest);
    // If val is greater than testVal, run on right
    } else if (val > testVal && this.right) {
      closest = this.right.findClosest(val, closest);
    }
    return closest;
  }
};
