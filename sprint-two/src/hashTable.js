

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); // storage = []
  this.counter = true;
};

HashTable.prototype.insert = function(k, v) {
  // Get index from hashing function
  var index = getIndexBelowMaxForKey(k, this._limit); // 3
  // Create tuple to insert into bucket
  var tuple = [k, v];

  // Get the bucket at index
  if (this._storage[index] === undefined) {
    var bucket = [];
    bucket.push(tuple);
    this._storage[index] = bucket;
  } else if (this._storage[index][0][0] === k) { // condition for if key already exists at that index
    this._storage[index][0][1] = v;
  } else {
    this._storage[index].push(tuple);
  }

  //return bucket.push(tuple);

//return this._storage.set(index, v);

 // var storageKey = this._storage[this._storage.get(index/*0*/)];
  // debugger;

  // if (tempIdx !== index) {
  //if (this._storage.get(index) !== undefined) {
    //console.log('hello');
    //debugger;
    //return this._storage.set(index + 1, v); // value = v1
                                  // value = v2   
  // } else {
    
  // } else {
  //   var tempIdx = Math.floor(Math.random() * this._limit);
  //   return this._storage.set(tempIdx, v);
  // }
  
};


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // debugger;

  for (var i = 0; i < this._storage[index].length; i++) {
  // _.each(this._storage[index], function(s) {
    if (this._storage[index][i][0] === k) {
      return this._storage[index][i][1];
    }
  }

  //return this._storage.get(index[0][k]); // value
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //this._storage[this._storage.set(index)] = undefined;
  for (var i = 0; i < this._storage[index].length; i++) {
  // _.each(this._storage[index], function(s) {
    if (this._storage[index][i][0] === k) {
      this._storage[index][i][1] = undefined;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?

 insert:
   should be: O(1)
   our method: O(1)
 retrieve:
    should be: O(1)
    our method: O(N)
 remove:
    should be: O(1)
    our method: O(N)
 */


