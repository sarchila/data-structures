var makeSet = function(){
  var set = Object.create(setPrototype); // fix me
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage.item = true;
};

setPrototype.contains = function(item){
  return !!this._storage.item;
};

setPrototype.remove = function(item){
  delete this._storage.item;
};
