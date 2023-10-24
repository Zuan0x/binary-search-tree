class TreeNode {
    constructor(public value: number, public left?: TreeNode, public right?: TreeNode) {
        this.value = value;
        this.left = undefined;
        this.right = undefined;
    }
}

class BinarySearchTree {
    constructor(public root?: TreeNode) {
        this.root = undefined
    }

    //Functions
    //Insert
    insert(value: number) {
        let newNode = new TreeNode(value);

        //If there is no root node, create one
        if(!this.root) {
            this.root = newNode
            return this;
        } else {
            this.insertNode(this.root, newNode)
        }
        
    }

    //Helper function for comparing nodes and inserting either left or right
    //Recursively looks at deeper nodes until it finds a place to insert
    insertNode(node: TreeNode, newNode: TreeNode) {
        if(newNode.value < node.value){
            if(!node.left) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if(!node.right) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    //Delete
    delete(value: number) {
        this.root = this.deleteNode(value, this.root)
    }

    deleteNode(value: number, node: TreeNode | undefined) {
        if(node === undefined) {
            return undefined
        }

        if(value < node.value){
            node.left = this.deleteNode(value, node.left)
            return node
        } else if(value > node.value){
            node.right = this.deleteNode(value, node.right)
            return node
        } else {
            //If node has no children
            if(node.left === undefined && node.right === undefined) {
                node = undefined
                return node
            }
            //If node has one child
            if(node.left === undefined){
                node = node.right
                return node
            } else if (node.right === undefined){
                node = node.left
                return node
            }

            //In order to delete a node with two children 
            //we find the node with minimum value in its right subtree 
            //and replace this node with the minimum valued node and 
            //remove the minimum valued node from the tree
            let minNode = this.findMinNode(node.right)
            node.value = minNode.value
            node.right = this.deleteNode(minNode.value, node.right)
            return node
        }
    }

    //Traversal
    //Inorder
    //Perform inorder traversal on a tree from a given node
    inorder(node: TreeNode | undefined) {
        if(node !== undefined){
            this.inorder(node.left)
            console.log(node.value)
            this.inorder(node.right)
        }
    }

    //Helper functions
    //Find min node
    findMinNode(node: TreeNode) {
        //We know we have the min node if the left node is undefined
        if(node.left === undefined){
            return node
        } else {
            return this.findMinNode(node.left)
        }
    }

    //Find max node
    findMaxNode(node: TreeNode) {
        //We know we have the min node if the left node is undefined
        if(node.right === undefined){
            return node
        } else {
            return this.findMaxNode(node.right)
        }
    }

    //Search
    //Get root node
    //Get height of tree
}