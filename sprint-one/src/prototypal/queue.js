var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.size1 = 0;
  obj.storage = {};
  obj.counter = 0;

  return obj;
};

var queueMethods = {
  enqueue: function (value) {
    this.storage[this.counter] = value;
    this.size1++;
    this.counter++;
  },
  dequeue: function () { //{0:a, 1:b}
    if (this.size1 > 0) {
      var index = Object.keys(this.storage).shift(); //0
      var temp = this.storage[index];
      this.size1--;
      delete this.storage[index];
      return temp;
    }
  },
  size: function(){
    return this.size1;
  }

};


