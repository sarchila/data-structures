var makeStack = function() {
  // Hey! Copy your code from src/functional/stack.js and paste it here
  var instance = _.extend({}, stackMethods);

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.length = 0; // Hint: set an initial value here

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
