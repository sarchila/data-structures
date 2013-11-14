var makeStack = function() {
  var instance = {};

  instance.storage = {};
  instance.length = 0; 

  instance.push = stackMethods.push;

  instance.pop = stackMethods.pop;

  instance.size = stackMethods.size;

  return instance;
};

var stackMethods = {
  push: function(value){
    this.storage[this.length] = value;
    this.length++;
  },
  pop: function(){
    var val = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length && this.length--;
    return val;
  },
  size: function(){
    return this.length;
  }
};