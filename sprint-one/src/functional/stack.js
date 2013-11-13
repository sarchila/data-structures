var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0; // Hint: set an initial value here

  // Implement the methods below

  instance.push = function(value){
    storage[instance.size()] = value;
  };

  instance.pop = function(){
    val = storage[instance.size()-1];
    delete storage[instance.size()-1];
    return val;
  };

  instance.size = function(){
    return Object.keys(storage).length;
  };

  return instance;
};
