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
  


binaryPrototype.contains = function() {

};

binaryPrototype.depthFirstLog = function () {

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
 */
