var makeQueue = function(){
<<<<<<< HEAD

  var instance = Object.create(queueMethods);
=======
  var instance = {};
>>>>>>> 0733034f017794670aca24fedf06f3a6ca736f9d

  instance.storage = {};
  instance.length = 0;
  instance.index = 0;
  instance.dqCounter = 0;

<<<<<<< HEAD
=======
  instance.enqueue = queueMethods.enqueue;
  instance.dequeue = queueMethods.dequeue;
  instance.size = queueMethods.size;

>>>>>>> 0733034f017794670aca24fedf06f3a6ca736f9d
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
<<<<<<< HEAD
};
=======
};
>>>>>>> 0733034f017794670aca24fedf06f3a6ca736f9d
