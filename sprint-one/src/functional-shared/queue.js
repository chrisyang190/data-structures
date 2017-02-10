var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    size1: 0,
    storage: {},
    counter: 0
  };
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = { 
  enqueue: function (value) {
    this.size1++;
    this.counter++;
    this.storage[this.counter] = value;
  },
  dequeue: function() {  // {1: a, 2:b}
    if (this.size1 > 0) {
      this.size1--;
      var index = Object.keys(this.storage).shift(); 
      //console.log(index);
      var temp = this.storage[index];
      delete this.storage[index];
      return temp;
    }
    
  },
  size: function() {
    return this.size1;
  }
};


