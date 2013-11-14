var Stack = function() {
  this.storage = {};
  this.length = 0;
};

Stack.prototype.push = function(value){
    this.storage[this.length] = value;
    this.length++;
  };

Stack.prototype.pop = function(){
    var val = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length && this.length--;
    return val;
  };

Stack.prototype.size = function(){
    return this.length;
};