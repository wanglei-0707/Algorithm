function BinaryTreeNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
}
var node1 = new BinaryTreeNode(8),
    node2 = new BinaryTreeNode(6),
    node3 = new BinaryTreeNode(4),
    node4 = new BinaryTreeNode(2),
    node5 = new BinaryTreeNode(3),
    node6 = new BinaryTreeNode(5),
    node7 = new BinaryTreeNode(1),
    node8 = new BinaryTreeNode(7);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.right = node6;
node4.left = node7;
node6.left = node8;
function TraversalBinaryTree(root){
    if(!root){
        return null;
    }
    var ret = [];
    ret = PreOrderTraversal(root, ret);
    console.log("前序遍历递归:"+ret);
    ret = [];
    ret = PreOrderTraversal2(root, ret);
    console.log("前序遍历非递归:"+ret);
    ret = [];
    ret = InOrderTraversal(root, ret);
    console.log("中序遍历递归:"+ret);
    ret = [];
    ret = InOrderTraversal2(root, ret);
    console.log("中序遍历非递归:"+ret);
    ret = [];
    ret = PostOrderTraversal(root, ret);
    console.log("后序遍历递归:"+ret);
    ret = [];
    ret = PostOrderTraversal2(root, ret);
    console.log("后序遍历非递归:"+ret);
    ret = [];
    ret = dfsOfBinaryTree(root, ret);
    console.log("深度优先搜索:"+ret);
    ret = [];
    ret = bfsOfBinaryTree(root, ret, []);
    console.log("广度优先搜索:"+ret);
}
// 递归实现
//二叉树的前序遍历
function PreOrderTraversal(root, ret){
    if(!root){
        return ret;
    }
    ret.push(root.val);
    PreOrderTraversal(root.left, ret);
    PreOrderTraversal(root.right, ret);
    return ret;
}
//二叉树的中序遍历
function InOrderTraversal(root, ret){
    if(!root){
        return ret;
    }
    InOrderTraversal(root.left, ret);
    ret.push(root.val);
    InOrderTraversal(root.right, ret);
    return ret;
}
//二叉树的后序遍历
function PostOrderTraversal(root, ret){
    if(!root){
        return ret;
    }
    PostOrderTraversal(root.left, ret);
    PostOrderTraversal(root.right, ret);
    ret.push(root.val);
    return ret;
}
//二叉树的深度优先搜索
function dfsOfBinaryTree(root, ret){
    if(!root){
        return ret;
    }
    if(!root.left && !root.right){
        ret.push(root.val);
        return;
    }
    if(root.left){
        dfsOfBinaryTree(root.left, ret);
    }
    if(root.right){
        dfsOfBinaryTree(root.right, ret);
    }
    ret.push(root.val);
    return ret;
}
//二叉树的广度优先搜索
function bfsOfBinaryTree(root, ret, temp){
    if(!root){
        return ret;
    }
    if(root.left){
        temp.push(root.left);
    }
    if(root.right){
        temp.push(root.right);
    }
    ret.push(root.val);
    if(temp.length > 0){
        bfsOfBinaryTree(temp.shift(), ret, temp);
    }
    return ret;
}
//循环实现
//前序遍历
function PreOrderTraversal2(root, ret){
    if(!root){
        return ret;
    }
    var temp = [];
    temp.push(root);
    while(temp.length>0){
        var cur = temp.pop();
        ret.push(cur.val);
        if(cur.right){
            temp.push(cur.right);
        }
        if(cur.left){
            temp.push(cur.left);
        }
    }
    return ret;
}
//中序遍历
function InOrderTraversal2(root, ret){
    if(!root){
        return ret;
    }
    var temp = [];
    while(temp.length > 0 || root){
        if(root){
            temp.push(root);
            root = root.left;
        }else{
            root = temp.pop();
            ret.push(root.val);
            root = root.right;
        }
    }
    return ret;
}
//后续遍历
function PostOrderTraversal2(root, ret){
    if(!root){
        return ret;
    }
    var temp = [];
    temp.push(root);
    var last = null;
    while(temp.length > 0){
        last = temp[temp.length-1];
        if(last.left && root !== last.left && root !== last.right){
            temp.push(last.left);
        }else if(last.right && root !== last.right){
            temp.push(last.right);
        }else{
            root = temp.pop();
            ret.push(root.val);
        }
    }
    return ret;
}
TraversalBinaryTree(node1);
