var TreeNode = /** @class */ (function () {
    function TreeNode(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
        this.value = value;
        this.left = undefined;
        this.right = undefined;
    }
    return TreeNode;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree(root) {
        this.root = root;
        this.root = undefined;
    }
    //Functions
    //Insert
    BinarySearchTree.prototype.insert = function (value) {
        var newNode = new TreeNode(value);
        //If there is no root node, create one
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    };
    //Helper function for comparing nodes and inserting either left or right
    //Recursively looks at deeper nodes until it finds a place to insert
    BinarySearchTree.prototype.insertNode = function (node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else {
            if (!node.right) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    };
    //Delete
    BinarySearchTree.prototype.delete = function (value) {
        this.root = this.deleteNode(value, this.root);
    };
    BinarySearchTree.prototype.deleteNode = function (value, node) {
        if (node === undefined) {
            return undefined;
        }
        if (value < node.value) {
            node.left = this.deleteNode(value, node.left);
            return node;
        }
        else if (value > node.value) {
            node.right = this.deleteNode(value, node.right);
            return node;
        }
        else {
            //If node has no children
            if (node.left === undefined && node.right === undefined) {
                node = undefined;
                return node;
            }
            //If node has one child
            if (node.left === undefined) {
                node = node.right;
                return node;
            }
            else if (node.right === undefined) {
                node = node.left;
                return node;
            }
            //In order to delete a node with two children 
            //we find the node with minimum value in its right subtree 
            //and replace this node with the minimum valued node and 
            //remove the minimum valued node from the tree
            var minNode = this.findMinNode(node.right);
            node.value = minNode.value;
            node.right = this.deleteNode(minNode.value, node.right);
            return node;
        }
    };
    //Traversal
    //Inorder
    //Perform inorder traversal on a tree from a given node
    BinarySearchTree.prototype.inorder = function (node) {
        if (node !== undefined) {
            this.inorder(node.left);
            console.log(node.value);
            this.inorder(node.right);
        }
    };
    //Preorder
    //Perform preorder traversal on a tree from a given node
    BinarySearchTree.prototype.preorder = function (node) {
        if (node !== undefined) {
            console.log(node.value);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    };
    //Postorder
    //Perform postorder traversal on a tree from a given node
    BinarySearchTree.prototype.postorder = function (node) {
        if (node !== undefined) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.value);
        }
    };
    //Helper functions
    //Find min node
    BinarySearchTree.prototype.findMinNode = function (node) {
        //We know we have the min node if the left node is undefined
        if (node.left === undefined) {
            return node;
        }
        else {
            return this.findMinNode(node.left);
        }
    };
    //Find max node
    BinarySearchTree.prototype.findMaxNode = function (node) {
        //We know we have the min node if the left node is undefined
        if (node.right === undefined) {
            return node;
        }
        else {
            return this.findMaxNode(node.right);
        }
    };
    //Search
    BinarySearchTree.prototype.search = function (value, node) {
        if (node === undefined) {
            return undefined;
        }
        if (node.value > value) {
            return this.search(value, node.left);
        }
        if (node.value < value) {
            return this.search(value, node.right);
        }
        if (node.value === value) {
            return node;
        }
    };
    //Get root node
    BinarySearchTree.prototype.getRootNode = function () {
        return this.root;
    };
    return BinarySearchTree;
}());
// create an object for the BinarySearchTree
var BST = new BinarySearchTree();
// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
var root = BST.getRootNode();
BST.inorder(root);
// Removing node with no children 
BST.delete(5);
var root = BST.getRootNode();
BST.inorder(root);
// Removing node with one child 
BST.delete(7);
var root = BST.getRootNode();
BST.inorder(root);
// Removing node with two children 
BST.delete(15);
var root = BST.getRootNode();
console.log("inorder traversal");
BST.inorder(root);
console.log("postorder traversal");
BST.postorder(root);
console.log("preorder traversal");
BST.preorder(root);
