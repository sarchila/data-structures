var HashTable = function(){
  this._limit = 8;
  this._delArr = null;
  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  // There's also a '.each' method that you might find
  // handy once you're working on resizing
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  console.log(i);
  if (!this._storage.get(i)){
    this._storage.set(i, [[k,v]]);
  } else {
    this._storage.get(i).push([k,v]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for (var j = 0; j < this._storage.get(i).length; j++) {
    var tuple = this._storage.get(i)[j];
    if (tuple[0] === k) {
      this._delArr = this._storage.get(i);
      this._delInd = j;
      return tuple[1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k){
  if (this.retrieve(k)){
    this._delArr.splice(this._delInd,1);
  }

};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
