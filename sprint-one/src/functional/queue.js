var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  var index = 0;
  var dqCounter = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    storage[index] = value;
    length++;
    index++;
  };

  instance.dequeue = function(){
    var val = storage[dqCounter];
    delete storage[dqCounter];
    if (length > 0){
      length--;
      dqCounter++;
    }
    return val;
  };

  instance.size = function(){
    return length;
  };
  return instance;
};