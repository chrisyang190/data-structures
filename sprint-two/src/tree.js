var Tree = function(value) {
  var newTree = {};
  newTree.value = value;  
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);
  
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //debugger;
  this.children.push(treeNode(value));

};

treeMethods.contains = function(target) {
  var contains = false;


  var traverseTree = function(node) {

//base case
    //debugger;
    if (node.value === target) {
      contains = true;
    }
      
//recursive
    //debugger;
    for (var i = 0; i < node.children.length; i++) {
      if (node.children[i].length !== 0) {  
        var node1 = node.children[i];
        traverseTree(node1);
      //node.children(target);
      } 
    }

  };
  

  traverseTree(this);
  // if (contains === false) {
  //   debugger;
  // }
  return contains;
};

var treeNode = function(value) {
  var node = {};

  node.value = value;
  node.children = [];
  //node.next = null;
  node.addChild = function(value) {
    this.children.push(treeNode(value));
  };

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addChild: O(1)
 contains: O(n)
 */
