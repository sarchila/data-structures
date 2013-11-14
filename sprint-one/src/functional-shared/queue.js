var makeQueue = function(){
<<<<<<< HEAD
  var instance = _.extend({},queueMethods);
 
=======
  var instance = {}; // use _.extend here

>>>>>>> 4d8bc68dcb53662bff1ec8390cdb302f58dd5791
  instance.storage = {};
  instance.length = 0;
  instance.index = 0;
  instance.dqCounter = 0;
<<<<<<< HEAD
=======
// if instanc was extended with queueMethods there would be no assignments here
  instance.enqueue = queueMethods.enqueue;
  instance.dequeue = queueMethods.dequeue;
  instance.size = queueMethods.size;
>>>>>>> 4d8bc68dcb53662bff1ec8390cdb302f58dd5791

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
