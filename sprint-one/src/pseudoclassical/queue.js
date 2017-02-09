var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.size1 = 0;
  this.storage = {};
  this.counter = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.counter] = value;
  this.size1++;
  this.counter++;
};


Queue.prototype.dequeue = function () {
  if (this.size1 > 0) {
    this.size1--;
    var index = Object.keys(this.storage).shift();
    var temp = this.storage[index];
    delete this.storage[index];
    return temp;  
  }
};


Queue.prototype.size = function () {
  return this.size1;
};



