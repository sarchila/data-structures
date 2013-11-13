var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0; // Hint: set an initial value here

  // Implement the methods below

  instance.push = function(value){
    instance[instance.size()] = value;
  };

  instance.pop = function(){
    val = instance[instance.size()-1];
    delete instance[instance.size()-1];
    return val;
  };

  instance.size = function(){
    // minus three because I'm subtracting the 3
    // built-in functions.
    return Object.keys(instance).length - 3;
  };

  return instance;
};
