var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
    counter++;
    storage[counter] = value;

  };

  someInstance.dequeue = function() { // {1: a, 2:b, 3:c, 4:d}
    if (size > 0) {
      size--;  
    }
    var index = Object.keys(storage).shift();
    var temp = storage[index];
    delete storage[index];
    return temp;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
