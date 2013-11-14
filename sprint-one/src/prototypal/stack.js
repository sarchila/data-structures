var makeStack = function() {
<<<<<<< HEAD
  // Hey! Copy your code from src/functional/stack.js and paste it here
  var instance = Object.create(stackMethods);

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.length = 0; // Hint: set an initial value here
=======
  var instance = {};

  instance.storage = {};
  instance.length = 0; 

  instance.push = stackMethods.push;

  instance.pop = stackMethods.pop;

  instance.size = stackMethods.size;
>>>>>>> 0733034f017794670aca24fedf06f3a6ca736f9d

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
<<<<<<< HEAD
};
=======
};
>>>>>>> 0733034f017794670aca24fedf06f3a6ca736f9d
