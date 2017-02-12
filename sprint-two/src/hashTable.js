

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

  var bucket = this._storage[index] || [];

  // Get the bucket at index
  
  // traverse through each bucket, reassign if there's same key in the same bucket
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      return;
    }
  }
  bucket.push(tuple);
  this._storage[index] = bucket;
};


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // debugger;

  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i] === undefined) {
      return undefined;
    } else if (this._storage[index][i][0] === k) {
      return this._storage[index][i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index][i] = undefined;
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


