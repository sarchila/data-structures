var makeQueue = function(){

  var instance = Object.create(queueMethods);

  instance.storage = {};
  instance.length = 0;
  instance.index = 0;
  instance.dqCounter = 0;

  return instance;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.index] = value;
    this.length++;
    this.index++;
  },
  dequeue: function(){
    var val = this.storage[this.dqCounter];
    delete this.storage[this.dqCounter];
    if (this.length > 0){
      this.length--;
      this.dqCounter++;
    }
    return val;
  },
  size: function(){
    return this.length;
  }
};