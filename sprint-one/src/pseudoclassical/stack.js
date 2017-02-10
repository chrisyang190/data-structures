var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.size1 = 0;
  this.storage = {};
};


Stack.prototype.push = function(value) {
  this.storage[this.size1] = value;
  this.size1++;
};

Stack.prototype.pop = function() {
  if (this.size1 > 0) {
    this.size1--;
    var temp = this.storage[this.size1];
    delete this.storage[this.size1];
    return temp;

  }
};

Stack.prototype.size = function() {
  return this.size1;
};

// Stack.prototype.stackMethods = {
//   push: function(value) {
//     this.storage[this.size1] = value;
//     this.size1++;
//   },
//   pop: function() {
//     if (this.size1 > 0) {
//       var temp = this.storage[this.size1];
//       this.size1--;
//       delete this.storage[this.size1];
//       return temp;
//     }
//   },
//   size: function() {
//     return this.size1;
//   }
// };
