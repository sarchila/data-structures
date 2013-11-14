var Queue = function() {
  this.storage = {};
  this.length = 0;
  this.index = 0;
  this.dqCounter = 0;
};


Queue.prototype.enqueue = function(value){
  this.storage[this.index] = value;
  this.length++;
  this.index++;
};

Queue.prototype.dequeue = function(){
  var val = this.storage[this.dqCounter];
  delete this.storage[this.dqCounter];
  if (this.length > 0){
    this.length--;
    this.dqCounter++;
  }
  return val;
};

Queue.prototype.size = function(){
  return this.length;
};
