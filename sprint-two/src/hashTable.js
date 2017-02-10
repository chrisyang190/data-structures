

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); // storage = []
  this.counter = true;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tempIdx = index + 1;
 // var storageKey = this._storage[this._storage.get(index/*0*/)];
  // debugger;

  // if (tempIdx !== index) {
  //if (this._storage.get(index) !== undefined) {
    //console.log('hello');
    //debugger;
    //return this._storage.set(index + 1, v); // value = v1
                                  // value = v2   
  // } else {
    return this._storage.set(index, v);
  // } else {
  //   var tempIdx = Math.floor(Math.random() * this._limit);
  //   return this._storage.set(tempIdx, v);
  // }
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // debugger;
  return this._storage.get(index); // value
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // debugger;
  // this._storage[this._storage.get(index)] = undefined;
  this._storage[this._storage.set(index)] = undefined;
  //return this._storage[this._storage.get(index)];
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


