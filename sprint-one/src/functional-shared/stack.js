var Stack = function(/*push, pop, size*/) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // var size1 = 0;
  // var storage = {};
  var someInstance = {
    size1: 0,
    storage: {}
  };
  

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.size1++;
    this.storage[this.size1] = value;
    
    
  },
  pop: function() { // storage = {1:a, 2:b, 3:c}
    var temp;
    if ( this.size1 > 0) {
      temp = this.storage[this.size1];
      delete this.storage[this.size1];
      this.size1--; //2
      return temp;
    }
  },
  size: function() {
    return this.size1;
  }
};


