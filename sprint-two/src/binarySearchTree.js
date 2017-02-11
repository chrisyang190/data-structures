var BinarySearchTree = function(value) {
  //var binaryTree = Object.create(binaryPrototype);
  var binaryTree = new BinaryTreeNode(value);
  _.extend(binaryTree, binaryPrototype);

  // var parentNode = binaryTreeNode(value); // {5: {value: 5, parent: null , left: newNode[value], right: null}, 
  // binaryTree[value] = parentNode;
  // {5: {value: 5, left: null, right: null}, 
  // 2: {value: 2, parent: 5 , left: null, right: null} }
  //binaryTree obj with new node created
  return binaryTree;
};


var binaryPrototype = {};

binaryPrototype.insert = function(value) { // 2
  // debugger;
  var newNode = new BinaryTreeNode(value);
  var parent = this;

  var insertTree = function(node, currentParent) {


    if (value < parent.value && parent.left === undefined) {
      parent.left = newNode;
    } else if (value < parent.value && parent.left !== undefined) { //recursive case
      parent = parent.left;
      insertTree(newNode, parent);
    } else if (value > parent.value && parent.right === undefined) {
      parent.right = newNode;
    } else if (value > parent.value && parent.right !== undefined) {
      parent = parent.right;
      insertTree(newNode, parent);
    }
  };

  insertTree(newNode, parent);
};
  


binaryPrototype.contains = function(value) {
  var currentNode = this;
  var containsVal = false;
  //debugger;
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
      //cb(currentNode);
    }
    // else if (currentNode.left !== undefined) {
    //   currentNode = currentNode.left;
    // } 
    // else if (currentNode.left !== undefined) {
    //   currentNode = currentNode.left;
    // } 

  };
  traverseTree(currentNode);

// traverse through tree



};

var BinaryTreeNode = function(value) {
  var node = {};

  node.value = value;
  // node.children = {};
  // node.children.left = null;
  // node.children.right = null;
  node.left = undefined;
  node.right = undefined;
  //node.children = [];
  //node.next = null;
  // node.addChild = function(value) {
  //   this.children.push(treeNode(value));
  // };
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(log N);
 contains: O(log N);
 depthFirstLog: O(log N);
 */
