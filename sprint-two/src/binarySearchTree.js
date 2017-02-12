var BinarySearchTree = function(value) {
  var binaryTree = new BinaryTreeNode(value);
  _.extend(binaryTree, binaryPrototype);
  return binaryTree;
};


var binaryPrototype = {};

binaryPrototype.insert = function(value) { 
  var newNode = new BinaryTreeNode(value);
  var parent = this;
  var insertTree = function(node) {
    if (value < parent.value && parent.left === undefined) {
      parent.left = newNode;
    } else if (value < parent.value && parent.left !== undefined) { //recursive case
      parent = parent.left;
      insertTree(newNode);
    } else if (value > parent.value && parent.right === undefined) {
      parent.right = newNode;
    } else if (value > parent.value && parent.right !== undefined) {
      parent = parent.right;
      insertTree(newNode);
    }
  };
  insertTree(newNode);
};
  


binaryPrototype.contains = function(value) {
  var currentNode = this;
  var containsVal = false;
  var traverseTree = function(node) {
    if (value === node.value) {
      containsVal = true;
    } else if (value > node.value) {
      currentNode = node.right;
      if (currentNode) {
        traverseTree(currentNode);
      } else {
        return;
      }
    } else if (value < node.value) {
      currentNode = node.left;
      if (currentNode) {
        traverseTree(currentNode);
      } else {
        return;
      }
    }
  };
  traverseTree(currentNode);
  return containsVal;
};

binaryPrototype.depthFirstLog = function (cb) {

  var currentNode = this;
  cb(currentNode.value);


  var traverseTree = function(node) {
    if (currentNode.left !== undefined) {
      currentNode = currentNode.left;
      cb(currentNode.value);
      traverseTree(currentNode);
    } else if (currentNode.right !== undefined) {
      currentNode = currentNode.right;
      cb(currentNode.value);
      traverseTree(currentNode);
    } else if (currentNode.right === undefined && currentNode.left === undefined) {
      return;
    }
  };
  traverseTree(currentNode);
};

var BinaryTreeNode = function(value) {
  var node = {};
  node.value = value;
  node.left = undefined;
  node.right = undefined;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(log N);
 contains: O(log N);
 depthFirstLog: O(log N);
 */
